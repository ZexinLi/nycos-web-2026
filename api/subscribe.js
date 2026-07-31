const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, lang } = req.body || {};
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;
  const emailField = process.env.AIRTABLE_EMAIL_FIELD || 'Email';

  if (!token || !baseId || !tableName) {
    console.error('Missing Airtable env vars: AIRTABLE_TOKEN / AIRTABLE_BASE_ID / AIRTABLE_TABLE_NAME');
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
          [emailField]: email,
          ...(lang ? { Language: lang } : {}),
          Source: 'nycos-website',
        },
      }),
    }
  );

  if (!airtableRes.ok) {
    const detail = await airtableRes.text().catch(() => '');
    console.error('Airtable error', airtableRes.status, detail);
    return res.status(502).json({ error: 'Could not save subscription' });
  }

  return res.status(200).json({ ok: true });
}
