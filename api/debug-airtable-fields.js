export default async function handler(req, res) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!token || !baseId) {
    return res.status(500).json({ error: 'Missing AIRTABLE_TOKEN / AIRTABLE_BASE_ID' });
  }

  const tableName = req.query.table || 'Class Registrations';
  const candidates = [
    'Name', 'Class', 'Email', 'Phone', 'Minor',
    'Emergency Contact', 'Emergency Phone', 'Payment Method', 'Amount',
    'PayPal Order ID', 'PayPal Capture ID',
  ];

  const results = {};
  for (const field of candidates) {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}?maxRecords=1&fields%5B%5D=${encodeURIComponent(field)}`;
    const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (r.ok) {
      results[field] = 'exists';
    } else {
      const detail = await r.json().catch(() => ({}));
      results[field] = detail?.error?.type || `error ${r.status}`;
    }
  }

  return res.status(200).json({ table: tableName, results });
}
