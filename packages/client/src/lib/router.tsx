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
import PrivacyPage from '../pages/PrivacyPage';
import BlogPage from '../pages/BlogPage';
import InstallationCommissioningPage from '../pages/InstallationCommissioningPage';
import EngineeringDesignPage from '../pages/EngineeringDesignPage';
import ProductionImprovementPage from '../pages/ProductionImprovementPage';
import ProductionFacilitiesPage from '../pages/ProductionFacilitiesPage';
import WellheadMaintenancePage from '../pages/WellheadMaintenancePage';
import OperationsMaintenancePage from '../pages/OperationsMaintenancePage';
import ShutinWellReentryPage from '../pages/ShutinWellReentryPage';
import EquipmentSupplyPage from '../pages/EquipmentSupplyPage';
import EquipmentRepairsPage from '../pages/EquipmentRepairsPage';
import EquipmentRentalsPage from '../pages/EquipmentRentalsPage';
import ProducedWaterManagementPage from '../pages/ProducedWaterManagementPage';
import SandManagementPage from '../pages/SandManagementPage';

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
        path: 'services/installation-commissioning',
        element: <InstallationCommissioningPage />,
      },
      {
        path: 'services/engineering-design',
        element: <EngineeringDesignPage />,
      },
      {
        path: 'services/production-improvement',
        element: <ProductionImprovementPage />,
      },
      {
        path: 'services/production-facilities',
        element: <ProductionFacilitiesPage />,
      },
      {
        path: 'services/wellhead-maintenance',
        element: <WellheadMaintenancePage />,
      },
      {
        path: 'services/operations-maintenance',
        element: <OperationsMaintenancePage />,
      },
      {
        path: 'services/shut-in-well-re-entry',
        element: <ShutinWellReentryPage />,
      },
      {
        path: 'services/equipment-supply',
        element: <EquipmentSupplyPage />,
      },
      {
        path: 'services/equipment-repairs',
        element: <EquipmentRepairsPage />,
      },
      {
        path: 'services/equipment-rentals',
        element: <EquipmentRentalsPage />,
      },
      {
        path: 'services/produced-water-management',
        element: <ProducedWaterManagementPage />,
      },
      {
        path: 'services/sand-management',
        element: <SandManagementPage />,
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
      {
        path: 'privacy-policy',
        element: <PrivacyPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
