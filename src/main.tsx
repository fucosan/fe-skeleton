import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query';
import { RouterProviderWithContext } from '@/components/providers/router';
import { enableMocking } from '@/lib/msw';
import '@/index.css'

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProviderWithContext />
      </QueryClientProvider>
    </StrictMode>
  );
});

