import { Activity } from 'react';
import searchIcon from '../../../assets/icons/knowledge-centre/search-icon.svg';
import { Skeleton } from '../../ui/skeleton';

export const ALL_BROCHURES = 'All Brochures';

interface FilterProps {
  categories: string[];
  isLoading: boolean;
  active: string;
  onSelect: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, isLoading, active, onSelect, search, onSearchChange }) => {
  const options = [ALL_BROCHURES, ...categories];

  return (
    <section className="border-b border-line flex flex-col gap-10 items-start px-9 md:px-16 lg:px-36 py-16 w-full">
      <div className="relative w-full max-w-150">
        <img src={searchIcon} alt="" className="absolute left-6 top-1/2 -translate-y-1/2 size-4 pointer-events-none" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search brochures"
          className="bg-surface border border-line rounded-2xl pl-15 pr-6 py-5 w-full text-base text-accent placeholder:text-placeholder outline-none"
        />
      </div>

      <nav className="flex flex-nowrap gap-8 items-center overflow-x-auto scrollbar-hide w-full">
        <Activity mode={isLoading ? 'visible' : 'hidden'}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-5 w-24 shrink-0" />
          ))}
        </Activity>

        <Activity mode={isLoading ? 'hidden' : 'visible'}>
          {options.map((category) => {
            const isActive = category === active;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelect(category)}
                className={`text-sm leading-normal pb-2 border-b-2 whitespace-nowrap shrink-0 ${
                  isActive ? 'font-bold text-accent border-secondary' : 'font-medium text-navy-subtle border-transparent'
                }`}
              >
                {category}
              </button>
            );
          })}
        </Activity>
      </nav>
    </section>
  );
};

export default Filter;
