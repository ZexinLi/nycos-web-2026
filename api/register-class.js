const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name, klass, email, phone, minor, emerg, emergPhone, pay,
    amount, paypalOrderId, paypalCaptureId,
  } = req.body || {};

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (typeof klass !== 'string' || !klass.trim()) {
    return res.status(400).json({ error: 'Class is required' });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (typeof phone !== 'string' || !phone.trim()) {
    return res.status(400).json({ error: 'Phone is required' });
  }
  if (minor && (typeof emerg !== 'string' || !emerg.trim() || typeof emergPhone !== 'string' || !emergPhone.trim())) {
    return res.status(400).json({ error: 'Emergency contact is required for minors' });
  }
  if (pay === 'paypal' && (!paypalOrderId || !paypalCaptureId)) {
    return res.status(400).json({ error: 'PayPal payment was not confirmed' });
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_CLASS_TABLE_NAME || 'Class Registrations';

  if (!token || !baseId) {
    console.error('Missing Airtable env vars: AIRTABLE_TOKEN / AIRTABLE_BASE_ID');
    return res.status(500).json({ error: 'Server not configured' });
  }

  const airtableRes = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Class: klass,
          Email: email,
          Phone: phone,
          Minor: !!minor,
          'Emergency Contact': emerg && emergPhone ? `${emerg} — ${emergPhone}` : (emerg || emergPhone || ''),
          'Payment Method': pay || '',
          Amount: typeof amount === 'number' ? amount : Number(amount) || 0,
          'PayPal Order ID': paypalOrderId || '',
          'PayPal Capture ID': paypalCaptureId || '',
        },
      }),
    }
  );

  if (!airtableRes.ok) {
    const detail = await airtableRes.text().catch(() => '');
    console.error('Airtable error', airtableRes.status, detail);
    return res.status(502).json({ error: 'Could not save registration' });
  }

  return res.status(200).json({ ok: true });
}
