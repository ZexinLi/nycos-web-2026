const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, msg, topic } = req.body || {};

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (typeof msg !== 'string' || !msg.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_CONTACT_TABLE_NAME || 'Contact Messages';

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
          Email: email,
          Phone: phone || '',
          Message: msg,
          Topic: topic || '',
        },
      }),
    }
  );

  if (!airtableRes.ok) {
    const detail = await airtableRes.text().catch(() => '');
    console.error('Airtable error', airtableRes.status, detail);
    return res.status(502).json({ error: 'Could not send message' });
  }

  return res.status(200).json({ ok: true });
}
