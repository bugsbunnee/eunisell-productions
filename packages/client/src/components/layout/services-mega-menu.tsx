import { Link } from 'react-router-dom';

import { serviceLinks } from './footer.constants';
import { paths } from '../../lib/data';
import serviceLinkArrow from '../../assets/icons/nav/service-link-arrow.svg';
import navDropdownImage from '/services/nav-dropdown.jpg';

// Mirrors the 5 / 5 / 4 three-column split from the Figma "Our Services" mega menu.
const columns = [serviceLinks.slice(0, 5), serviceLinks.slice(5, 10), serviceLinks.slice(10)];

interface ServicesMegaMenuProps {
  open: boolean;
}

const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ open }) => {
  return (
    <div
      className={`absolute inset-x-0 top-full transition-all duration-200 ${
        open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="max-w-432 mx-auto px-9 md:px-16 lg:px-9 pt-4">
        <div className="bg-white border border-[rgba(175,177,179,0.3)] rounded-[16px] shadow-[0px_32px_64px_-16px_rgba(0,16,32,0.1)] flex items-stretch overflow-hidden">
          <div className="flex-1 min-w-0 flex flex-col p-10">
            <div className="flex flex-col gap-2 pb-10">
              <div className="flex gap-3 items-center">
                <div className="bg-secondary h-0.5 w-8 shrink-0" />
                <p className="font-light text-secondary text-[11px] tracking-[3px] uppercase">Solutions &amp; Services</p>
              </div>
              <h3 className="font-light text-accent text-[32px] leading-normal">Our Services</h3>
            </div>

            <div className="flex flex-wrap justify-between gap-x-8 gap-y-10">
              {columns.map((column, index) => (
                <ul key={index} className={`flex flex-col ${index === 0 ? 'gap-5' : 'gap-2'} items-start ${index === 2 ? 'w-54.75' : 'w-45'}`}>
                  {column.map(({ label, path }) => (
                    <li key={label} className="w-full">
                      <Link
                        to={path}
                        className="group/link flex items-center justify-between gap-2 -mx-3 rounded-lg py-3 pl-3 pr-5.5 text-[15px] font-light text-accent hover:bg-secondary-tint hover:text-secondary"
                      >
                        {label}
                        <img src={serviceLinkArrow} alt="" className="size-3 shrink-0 opacity-0 transition-opacity group-hover/link:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="hidden xl:flex relative flex-col w-95 shrink-0 overflow-hidden">
            <img src={navDropdownImage} alt="Eunisell field engineers on site" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-white/20 mix-blend-saturation" />
            <div className="absolute inset-0 bg-linear-to-t from-deep-navy via-deep-navy/40 via-50% to-deep-navy/0" />

            <Link
              to={paths.services}
              className="absolute top-6 right-6 rounded-full bg-secondary px-4 py-2.5 font-light text-[11px] text-white tracking-[1.1px] uppercase whitespace-nowrap"
            >
              Our Services
            </Link>

            <div className="relative mt-auto flex flex-col gap-6 p-10">
              <div className="flex flex-col gap-4">
                <p className="font-light text-white text-[10px] tracking-[3px] uppercase">Engineering Excellence</p>
                <h4 className="font-light text-white text-2xl leading-tight tracking-[-0.1172px]">
                  Delivering Integrated
                  <br />
                  Solutions Since 1999
                </h4>
                <p className="font-light text-navy-subtle text-sm leading-relaxed">
                  Our multidisciplinary teams combine technical
                  <br />
                  strategy with local field expertise.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-col items-start">
                  <span className="font-light text-secondary text-xl tracking-[0.2344px]">20+</span>
                  <span className="font-light text-white text-[10px] tracking-[0.5px] uppercase">Years Experience</span>
                </div>
                <div className="h-8 w-px bg-white/20 shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="font-light text-secondary text-xl tracking-[0.1758px]">500+</span>
                  <span className="font-light text-white text-[10px] tracking-[0.5px] uppercase">Projects Done</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
