import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import arrowBlue from '../../../assets/icons/services/arrow-blue.svg';
import { Stagger, StaggerItem } from '../../common/motion';

import epcImg from '/services/card-epc.png';
import installationImg from '/services/card-installation-1.png';
import engineeringDesignImg from '/services/card-engineering-design.png';
import productionImprovementImg from '/services/card-production-improvement.png';
import productionFacilitiesImg from '/services/card-production-facilities.png';
import wellTestingImg from '/services/card-well-testing.png';
import wellheadMaintenanceImg from '/services/card-wellhead-maintenance.png';
import operationsMaintenanceImg from '/services/card-operations-maintenance.png';
import shutinReentryImg from '/services/card-shutin-reentry.png';
import equipmentSupplyImg from '/services/card-equipment-supply.png';
import equipmentRepairsImg from '/services/card-equipment-repairs.png';
import equipmentRentalsImg from '/services/card-equipment-rentals.png';
import producedWaterImg from '/services/card-produced-water.png';
import sandManagementImg from '/services/card-sand-management.png';

interface Service {
  badge: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    badge: 'EPC Delivery',
    title: 'Engineering, Procurement & Construction (EPC)',
    description: 'From concept to completion, Eunisell delivers integrated EPC solutions for production facilities, gathering systems, process upgrades, and field...',
    image: epcImg,
    href: paths.epc,
  },
  {
    badge: 'EPC Delivery',
    title: 'Installation & Commissioning',
    description: 'We provide complete installation and commissioning services for production equipment and facilities, ensuring systems are safely installed, thoroughly...',
    image: installationImg,
    href: paths.installationCommissioning,
  },
  {
    badge: 'Engineering Design',
    title: 'Engineering Design (FEED & DED)',
    description: 'Our engineering team develops robust Front-End Engineering Design (FEED) and Detailed Engineering Design (DED) packages that reduce project risk...',
    image: engineeringDesignImg,
    href: paths.engineeringDesign,
  },
  {
    badge: 'Production',
    title: 'Production Improvement',
    description: 'We help operators increase production efficiency through engineering interventions, production diagnostics, process optimization, and field...',
    image: productionImprovementImg,
    href: paths.productionImprovement,
  },
  {
    badge: 'Optimization',
    title: 'Production Facilities',
    description: 'Eunisell designs, upgrades, maintains, and supports oil and gas production facilities to ensure safe and efficient processing operations...',
    image: productionFacilitiesImg,
    href: paths.productionFacilities,
  },
  {
    badge: 'Asset Management',
    title: 'Well Testing',
    description: 'Accurate production data is essential for reservoir management and production planning. Our well testing services provide reliable...',
    image: wellTestingImg,
    href: paths.services + '/well-testing',
  },
  {
    badge: 'Asset Management',
    title: 'Wellhead Maintenance',
    description: 'Reliable wellhead systems are critical to safe production. Our experienced field teams perform preventive and corrective maintenance to maintain...',
    image: wellheadMaintenanceImg,
    href: paths.wellheadMaintenance,
  },
  {
    badge: 'Asset Management',
    title: 'Operations & Maintenance',
    description: 'We provide comprehensive operations and maintenance services that improve asset reliability, maximize equipment availability, and reduce...',
    image: operationsMaintenanceImg,
    href: paths.operationsMaintenance,
  },
  {
    badge: 'Asset Management',
    title: 'Shut-In Well Re-Entry',
    description:
      'We support operators in safely restoring shut-in wells to production through engineering assessment, equipment refurbishment, intervention planning, and execution...',
    image: shutinReentryImg,
    href: paths.shutinWellReentry,
  },
  {
    badge: 'Asset Management',
    title: 'Equipment Supply',
    description: 'Through our extensive global partnerships, Eunisell supplies high-quality production equipment from leading international manufacturers.',
    image: equipmentSupplyImg,
    href: paths.equipmentSupply,
  },
  {
    badge: 'Asset Management',
    title: 'Equipment Repairs',
    description: 'We provide professional repair, refurbishment, and overhaul services that restore equipment performance and extend operational life.',
    image: equipmentRepairsImg,
    href: paths.equipmentRepairs,
  },
  {
    badge: 'Asset Management',
    title: 'Equipment Rentals',
    description: 'Our equipment rental solutions provide operators with flexible access to critical production equipment without significant capital investment.',
    image: equipmentRentalsImg,
    href: paths.equipmentRentals,
  },
  {
    badge: 'Asset Management',
    title: 'Produced Water Management',
    description: 'Produced water handling is a critical component of environmentally responsible production. Eunisell provides integrated produced water...',
    image: producedWaterImg,
    href: paths.producedWaterManagement,
  },
  {
    badge: 'Asset Management',
    title: 'Sand Management',
    description:
      "Eunisell's sand management solutions are designed to help oil and gas operators effectively control and manage sand production from wells, particularly in challenging and unconsolidated reservoirs.",
    image: sandManagementImg,
    href: paths.sandManagement,
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <StaggerItem hover className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0px_32px_64px_-16px_rgba(0,16,32,0.06)]">
    <div className="relative h-100 shrink-0 overflow-hidden">
      <img src={service.image} alt={service.title} className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
      <div className="absolute top-8 left-8 bg-secondary rounded-full px-4 py-1.5">
        <p className="font-light text-white text-xs tracking-[1.2px] uppercase whitespace-nowrap">{service.badge}</p>
      </div>
    </div>

    <div className="flex flex-1 flex-col items-start p-5">
      <h3 className="font-light text-accent text-[28px] leading-[1.25] pb-6">{service.title}</h3>
      <p className="font-light text-navy-subtle text-base leading-7 line-clamp-3 flex-1 pb-8">{service.description}</p>

      <Link to={service.href} className="flex gap-3 items-center py-3.75">
        <span className="font-light text-secondary text-sm">EXPLORE SERVICE</span>
        <img src={arrowBlue} alt="" className="w-3 h-3.5" />
      </Link>
    </div>
  </StaggerItem>
);

const ServiceGrid: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:pb-35">
      <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-360 pt-16 lg:pt-35 w-full">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </Stagger>
    </section>
  );
};

export default ServiceGrid;
