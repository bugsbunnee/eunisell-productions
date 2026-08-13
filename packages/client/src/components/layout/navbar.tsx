import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { paths } from '../../lib/data';

const navLinks = [
  { label: 'Company', path: '#' },
  { label: 'Services', path: paths.services },
  { label: 'Projects', path: '#' },
  { label: 'Industries', path: '#' },
  { label: 'HSEQ', path: '#' },
  { label: 'Knowledge Centre', path: '#' },
  { label: 'Careers', path: '#' },
  { label: 'Contact', path: '#' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isDark = useMemo(() => {
    return location.pathname === paths.home;
  }, [location.pathname]);

  return (
    <header className={`relative border-b flex flex-col w-full ${isDark ? 'bg-deep-navy border-white' : 'bg-white border-transparent'}`}>
      <div className="flex items-center justify-between h-25 max-w-432 w-full mx-auto px-9 md:px-16 lg:px-36">
        <a href="#" className="inline-flex items-center bg-secondary rounded-full px-6 py-[8.5px] text-sm text-white leading-5 whitespace-nowrap">
          Contact Our Team
        </a>

        <nav className={`hidden lg:flex items-center gap-10 ${isDark ? 'text-white' : 'text-accent'}`}>
          {navLinks.map(({ label, path }) => (
            <Link key={label} to={path} className="text-sm leading-5 whitespace-nowrap">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`lg:hidden ${isDark ? 'text-white' : 'text-accent'}`}
          >
            {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>

          <Link to="/" className="shrink-0">
            {isDark ? (
              <img src="/general/logo-alternate.png" alt="Eunisell" className="h-10.5 w-26.5 object-contain" />
            ) : (
              <img src="/general/full-logo.png" alt="Eunisell" className="h-14 w-36.25 object-contain" />
            )}
          </Link>
        </div>
      </div>

      {open && (
        <nav className={`lg:hidden flex flex-col gap-1 px-9 md:px-16 pb-6 ${isDark ? 'text-white' : 'text-accent'}`}>
          {navLinks.map(({ label, path }) => (
            <Link key={label} to={path} onClick={() => setOpen(false)} className="text-sm leading-5 py-2">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
