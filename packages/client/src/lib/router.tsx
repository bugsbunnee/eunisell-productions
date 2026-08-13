import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import WellTestingPage from '../pages/WellTestingPage';
import CsrPage from '../pages/CsrPage';
import HseqPage from '../pages/HseqPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'services/well-testing',
        element: <WellTestingPage />,
      },
      {
        path: 'csr',
        element: <CsrPage />,
      },
      {
        path: 'hseq',
        element: <HseqPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
