import { Link } from 'react-router-dom';

interface NavDropdownItem {
  label: string;
  path: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  open: boolean;
  onToggle: () => void;
  isDark: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, items, open, onToggle, isDark }) => {
  return (
    <div className="relative">
      <button type="button" onClick={onToggle} aria-haspopup="true" aria-expanded={open} className="flex items-center text-sm leading-5 whitespace-nowrap cursor-pointer">
        {label}
        <span className="flex size-4.5 shrink-0 items-center justify-center">
          <svg width="10.5" height="6" viewBox="0 0 10.5 6" fill="none" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>

      <div
        className={`absolute top-full left-0 pt-4 transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div
          className={`flex flex-col gap-1 rounded-2xl border p-2 shadow-[0px_32px_64px_-16px_rgba(0,16,32,0.1)] min-w-50 ${
            isDark ? 'bg-deep-navy border-white/10' : 'bg-white border-[rgba(175,177,179,0.3)]'
          }`}
        >
          {items.map(({ label: itemLabel, path }) => (
            <Link
              key={itemLabel}
              to={path}
              className={`rounded-lg py-2.5 px-3 text-sm font-light whitespace-nowrap ${
                isDark ? 'text-white hover:bg-white/10' : 'text-accent hover:bg-secondary-tint hover:text-secondary'
              }`}
            >
              {itemLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
