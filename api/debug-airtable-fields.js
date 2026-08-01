export default async function handler(req, res) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!token || !baseId) {
    return res.status(500).json({ error: 'Missing AIRTABLE_TOKEN / AIRTABLE_BASE_ID' });
  }

  const tableName = req.query.table || 'Class Registrations';
  const allFields = {
    Name: 'ZZZ_TEST_PROBE (safe to delete)',
    Class: 'ZZZ_TEST_PROBE',
    Email: 'probe@example.com',
    Phone: '0000000000',
    Minor: false,
    'Emergency Contact': '',
    'Emergency Phone': '',
    'Payment Method': 'zelle',
    Amount: 0,
    'PayPal Order ID': '',
    'PayPal Capture ID': '',
  };

  const results = {};
  const working = {};
  let remaining = { ...allFields };

  for (let attempt = 0; attempt < Object.keys(allFields).length + 1; attempt++) {
    const createRes = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: remaining }),
      }
    );
    const data = await createRes.json();
    if (createRes.ok) {
      await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}/${data.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }).catch(() => {});
      return res.status(200).json({ table: tableName, working: Object.keys(remaining), rejected: results });
    }
    const msg = data?.error?.message || '';
    const match = msg.match(/Unknown field name: "([^"]+)"/);
    if (!match) {
      return res.status(502).json({ error: 'Unhandled Airtable error', detail: data, workingSoFar: Object.keys(remaining), rejected: results });
    }
    const badField = match[1];
    results[badField] = 'UNKNOWN_FIELD_NAME';
    delete remaining[badField];
  }

  return res.status(500).json({ error: 'Too many bad fields', results });
}
