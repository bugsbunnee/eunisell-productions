import { useState } from 'react';
import searchIcon from '../../../assets/icons/blog/search.svg';
import { FILTER_CATEGORIES } from './blog.constants';

const CategoryFilter: React.FC = () => {
  const [active, setActive] = useState(FILTER_CATEGORIES[0].label);

  return (
    <nav className="bg-white border-y border-line flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-end justify-between px-9 md:px-16 lg:px-36 py-8">
      <div className="flex flex-nowrap gap-6 lg:gap-8 items-end overflow-x-auto scrollbar-hide w-full lg:w-auto min-w-0">
        {FILTER_CATEGORIES.map((category) => {
          const isActive = category.label === active;

          return (
            <button
              key={category.label}
              type="button"
              onClick={() => setActive(category.label)}
              className={`text-sm leading-normal pb-1 border-b-2 whitespace-nowrap text-left shrink-0 ${
                isActive ? 'font-semibold text-secondary border-secondary' : 'font-medium text-navy-subtle border-transparent'
              }`}
            >
              {category.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </button>
          );
        })}
      </div>

      <div className="flex items-center border border-line rounded-full px-4 py-2 w-full md:w-58 shrink-0">
        <img src={searchIcon} alt="" className="size-4 mr-3" />
        <input type="search" placeholder="Search insights" className="flex-1 min-w-0 text-sm text-accent placeholder:text-placeholder outline-none bg-transparent" />
      </div>
    </nav>
  );
};

export default CategoryFilter;
