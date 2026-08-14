import { Activity } from 'react';
import searchIcon from '../../../assets/icons/blog/search.svg';
import { Skeleton } from '../../ui/skeleton';

export const ALL_CATEGORIES = 'ALL';

const splitLabel = (label: string): string[] => {
  const words = label.split(' ');
  if (words.length <= 2) return words;
  return [words.slice(0, -1).join(' '), words[words.length - 1]!];
};

interface CategoryFilterProps {
  categories: string[];
  isLoading: boolean;
  active: string;
  onSelect: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, isLoading, active, onSelect, search, onSearchChange }) => {
  const options = ['All Insights', ...categories];

  return (
    <nav className="bg-white border-y border-line flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-end justify-between px-9 md:px-16 lg:px-36 py-8">
      <div className="flex flex-nowrap gap-6 lg:gap-8 items-end overflow-x-auto scrollbar-hide w-full lg:w-auto min-w-0">
        <Activity mode={isLoading ? 'visible' : 'hidden'}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-10 w-20 shrink-0" />
          ))}
        </Activity>

        <Activity mode={isLoading ? 'hidden' : 'visible'}>
          {options.map((label) => {
            const value = label === 'All Insights' ? ALL_CATEGORIES : label;
            const isActive = value === active;

            return (
              <button
                key={label}
                type="button"
                onClick={() => onSelect(value)}
                className={`text-sm leading-normal pb-1 border-b-2 whitespace-nowrap text-left shrink-0 ${
                  isActive ? 'font-semibold text-secondary border-secondary' : 'font-medium text-navy-subtle border-transparent'
                }`}
              >
                {splitLabel(label).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </button>
            );
          })}
        </Activity>
      </div>

      <div className="flex items-center border border-line rounded-full px-4 py-2 w-full md:w-58 shrink-0">
        <img src={searchIcon} alt="" className="size-4 mr-3" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search insights"
          className="flex-1 min-w-0 text-sm text-accent placeholder:text-placeholder outline-none bg-transparent"
        />
      </div>
    </nav>
  );
};

export default CategoryFilter;
