import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { paths } from '../../lib/data';
import { serviceLinks } from './footer.constants';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import ServicesMegaMenu from './services-mega-menu';

const navLinks = [
  { label: 'Company', path: paths.about },
  { label: 'Services', path: paths.services },
  { label: 'Projects', path: paths.projects },
  { label: 'Service Portfolio', path: paths.portfolio },
  { label: 'HSEQ', path: paths.hseq },
  { label: 'Blog', path: paths.blog },
  { label: 'Contact', path: paths.contact },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  const isDark = useMemo(() => {
    return location.pathname === paths.home;
  }, [location.pathname]);

  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    if (!servicesOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [servicesOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b flex flex-col w-full ${isDark ? 'bg-deep-navy border-white' : 'bg-white border-transparent'}`}>
      <div className="flex items-center justify-between h-25 max-w-432 w-full mx-auto px-9 md:px-16 lg:px-36">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`lg:hidden shrink-0 ${isDark ? 'text-white' : 'text-accent'}`}
        >
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        <Link to={paths.contact} className="hidden lg:inline-flex items-center bg-secondary rounded-full px-6 py-[8.5px] text-sm text-white leading-5 whitespace-nowrap">
          Contact Our Team
        </Link>

        <nav className={`hidden lg:flex items-center gap-10 ${isDark ? 'text-white' : 'text-accent'}`}>
          {navLinks.map(({ label, path }) =>
            label === 'Services' ? (
              <div key={label} ref={servicesRef} onKeyDown={(e) => e.key === 'Escape' && setServicesOpen(false)}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((p) => !p)}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  className="flex items-center text-sm leading-5 whitespace-nowrap cursor-pointer"
                >
                  {label}
                  <span className="flex size-4.5 shrink-0 items-center justify-center">
                    <svg width="10.5" height="6" viewBox="0 0 10.5 6" fill="none" className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>

                <ServicesMegaMenu open={servicesOpen} />
              </div>
            ) : (
              <Link key={label} to={path} className="text-sm leading-5 whitespace-nowrap">
                {label}
              </Link>
            )
          )}
        </nav>

        <Link to={paths.home} className="shrink-0">
          {isDark ? (
            <img src="/general/logo-alternate.png" alt="Eunisell" className="h-10.5 w-26.5 object-contain" />
          ) : (
            <img src="/general/full-logo.png" alt="Eunisell" className="h-14 w-36.25 object-contain" />
          )}
        </Link>
      </div>

      {open && (
        <nav className={`lg:hidden flex flex-col gap-1 px-9 md:px-16 pb-6 ${isDark ? 'text-white' : 'text-accent'}`}>
          {navLinks.map(({ label, path }) =>
            label === 'Services' ? (
              <Accordion key={label} type="single" collapsible>
                <AccordionItem value="services" className="not-last:border-b-0">
                  <AccordionTrigger className="rounded-none border-none py-2 text-sm font-light leading-5 hover:no-underline focus-visible:ring-0">{label}</AccordionTrigger>
                  <AccordionContent className="flex flex-col pb-2 pl-4 [&_a]:no-underline">
                    {serviceLinks.map((service) => (
                      <Link key={service.label} to={service.path} onClick={() => setOpen(false)} className="py-2 text-sm leading-5">
                        {service.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link key={label} to={path} onClick={() => setOpen(false)} className="text-sm leading-5 py-2">
                {label}
              </Link>
            )
          )}

          <Link
            to={paths.contact}
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center bg-secondary rounded-full px-6 py-[8.5px] text-sm text-white leading-5 whitespace-nowrap mt-3"
          >
            Contact Our Team
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
