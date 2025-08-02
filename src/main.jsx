import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProviders from './Providers/AuthProviders.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div>
            <RouterProvider router={router}>

            </RouterProvider>
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProviders>
  </StrictMode>,
)
