const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(input) {
  const d = input ? new Date(input) : new Date();
  if (Number.isNaN(d.getTime())) return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function receiptHtml({ name, amount, datePaid }) {
  const safeName = escapeHtml(name);
  const safeAmount = Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const safeDate = formatDate(datePaid);
  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#F7F4EE;font-family:Georgia,'Times New Roman',serif;color:#141420;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EE;padding:32px 0;">
<tr><td align="center">
<table role="presentation" width="100%" style="max-width:520px;background:#ffffff;border-radius:12px;overflow:hidden;" cellpadding="0" cellspacing="0">
<tr><td style="background:#0033A0;padding:28px 36px;">
<span style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#C8102E;">New York Chinese Opera Society</span>
</td></tr>
<tr><td style="padding:36px;">
<h1 style="margin:0 0 18px;font-size:26px;font-weight:400;color:#141420;">Thank you, ${safeName}</h1>
<p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#3a3a3a;">
Your gift keeps this art form alive — the studio, the teachers, and the students who show up every week. We're grateful you're part of it.
</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EE;border-radius:8px;margin:0 0 22px;">
<tr>
<td style="padding:18px 22px;font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#77736b;">Amount</td>
<td style="padding:18px 22px;text-align:right;font-size:22px;color:#141420;">$${safeAmount}</td>
</tr>
<tr>
<td style="padding:0 22px 18px;font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#77736b;">Date received</td>
<td style="padding:0 22px 18px;text-align:right;font-size:14px;color:#141420;">${safeDate}</td>
</tr>
</table>
<p style="margin:0;font-size:12px;line-height:1.7;color:#9a968c;">
New York Chinese Opera Society is a registered 501(c)(3) nonprofit organization. No goods or services were provided in exchange for this gift. Please keep this email for your tax records.
</p>
</td></tr>
<tr><td style="padding:20px 36px;background:#F7F4EE;border-top:1px solid #e8e4da;">
<span style="font-size:12px;color:#9a968c;">120 Broadway STE 3650, New York, NY 10271 · nycosyouth@gmail.com</span>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.RECEIPT_WEBHOOK_SECRET;
  if (secret && req.headers['x-webhook-secret'] !== secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { name, email, amount, datePaid } = req.body || {};

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RECEIPT_FROM_EMAIL || 'New York Chinese Opera Society <donations@nycos.org>';
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY env var');
    return res.status(500).json({ error: 'Server not configured' });
  }

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: email,
      subject: 'Thank you for your donation to NYCOS',
      html: receiptHtml({ name, amount: value, datePaid }),
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text().catch(() => '');
    console.error('Resend error', resendRes.status, detail);
    return res.status(502).json({ error: 'Could not send receipt email' });
  }

  return res.status(200).json({ ok: true });
}
