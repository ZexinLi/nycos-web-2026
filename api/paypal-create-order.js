import { getAccessToken, paypalBase } from '../lib/paypal-server.js';

const MAX_AMOUNT = 2000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount } = req.body || {};
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0 || value > MAX_AMOUNT) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  try {
    const accessToken = await getAccessToken();
    const orderRes = await fetch(`${paypalBase()}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: 'NYCOS class registration',
            amount: { currency_code: 'USD', value: value.toFixed(2) },
          },
        ],
      }),
    });
    const order = await orderRes.json();
    if (!orderRes.ok || !order.id) {
      console.error('PayPal create order error', orderRes.status, order);
      return res.status(502).json({ error: 'Could not create PayPal order' });
    }
    return res.status(200).json({ id: order.id });
  } catch (err) {
    console.error('PayPal create order exception', err);
    return res.status(500).json({ error: 'Server error creating PayPal order' });
  }
}
