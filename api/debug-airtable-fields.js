export default async function handler(req, res) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!token || !baseId) {
    return res.status(500).json({ error: 'Missing AIRTABLE_TOKEN / AIRTABLE_BASE_ID' });
  }

  const metaRes = await fetch(`https://api.airtable.com/v0/meta/bases/${baseId}/tables`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const meta = await metaRes.json();
  if (!metaRes.ok) {
    return res.status(502).json({ error: 'Airtable meta error', detail: meta });
  }

  const tables = (meta.tables || []).map((t) => ({
    name: t.name,
    fields: (t.fields || []).map((f) => f.name),
  }));

  return res.status(200).json({ tables });
}
