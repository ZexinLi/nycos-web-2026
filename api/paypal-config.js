export default async function handler(req, res) {
  const clientId = process.env.PAYPAL_CLIENT_ID || '';
  return res.status(200).json({ clientId, env: process.env.PAYPAL_ENV || 'sandbox' });
}
