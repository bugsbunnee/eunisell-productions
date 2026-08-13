import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner.tsx';
import { router } from './lib/router.tsx';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/client.ts';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
