import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ServicesPage from '../pages/ServicesPage';
import PortfolioPage from '../pages/PortfolioPage';
import WellTestingPage from '../pages/WellTestingPage';
import EpcPage from '../pages/EpcPage';
import CsrPage from '../pages/CsrPage';
import HseqPage from '../pages/HseqPage';
import ContactPage from '../pages/ContactPage';

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
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'services/well-testing',
        element: <WellTestingPage />,
      },
      {
        path: 'services/epc',
        element: <EpcPage />,
      },
      {
        path: 'csr',
        element: <CsrPage />,
      },
      {
        path: 'hseq',
        element: <HseqPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
