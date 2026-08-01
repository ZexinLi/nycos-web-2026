import { getAccessToken, paypalBase } from '../lib/paypal-server.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { orderID } = req.body || {};
  if (typeof orderID !== 'string' || !orderID) {
    return res.status(400).json({ error: 'Missing orderID' });
  }

  try {
    const accessToken = await getAccessToken();
    const captureRes = await fetch(`${paypalBase()}/v2/checkout/orders/${encodeURIComponent(orderID)}/capture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    const capture = await captureRes.json();
    if (!captureRes.ok || capture.status !== 'COMPLETED') {
      console.error('PayPal capture error', captureRes.status, capture);
      return res.status(502).json({ error: 'Could not capture PayPal payment' });
    }
    const captureId =
      capture.purchase_units?.[0]?.payments?.captures?.[0]?.id || '';
    return res.status(200).json({ ok: true, captureId });
  } catch (err) {
    console.error('PayPal capture exception', err);
    return res.status(500).json({ error: 'Server error capturing PayPal payment' });
  }
}
