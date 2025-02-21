export async function enableMocking() {
  const useMocking = import.meta.env.VITE_APP_MSW === 'true';
  if (!useMocking) {
    return;
  }

  const { worker } = await import('../../mocks/browser');

  // test
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}


