(() => {
  let loadedClientId = null;
  let loadingPromise = null;

  function loadSdk(clientId) {
    if (window.paypal && loadedClientId === clientId) return Promise.resolve();
    if (loadingPromise && loadedClientId === clientId) return loadingPromise;
    const existing = document.getElementById('paypal-sdk-script');
    if (existing) existing.remove();
    window.paypal = undefined;
    loadedClientId = clientId;
    loadingPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.id = 'paypal-sdk-script';
      s.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(clientId) + '&currency=USD&intent=capture';
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load PayPal SDK'));
      document.head.appendChild(s);
    });
    return loadingPromise;
  }

  async function mount(container, clientId, amount, onSuccess, onError) {
    try {
      await loadSdk(clientId);
    } catch (err) {
      onError(err);
      return;
    }
    if (!window.paypal || !window.paypal.Buttons) {
      onError(new Error('PayPal SDK unavailable'));
      return;
    }
    window.paypal.Buttons({
      style: { layout: 'vertical', shape: 'rect', label: 'paypal' },
      createOrder: async () => {
        const r = await fetch('/api/paypal-create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount })
        });
        const data = await r.json();
        if (!r.ok || !data.id) throw new Error(data.error || 'Could not start PayPal order');
        return data.id;
      },
      onApprove: async (data) => {
        const r = await fetch('/api/paypal-capture-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderID: data.orderID })
        });
        const result = await r.json();
        if (!r.ok || !result.ok) {
          onError(new Error(result.error || 'Could not capture PayPal payment'));
          return;
        }
        onSuccess({ orderID: data.orderID, captureId: result.captureId });
      },
      onError: (err) => onError(err),
      onCancel: () => {}
    }).render(container);
  }

  window.NYCOSPaypal = { mount };
})();
