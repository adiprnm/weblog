if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(
      '/tools/item-saver/service-worker.js'
    );
  });
}

