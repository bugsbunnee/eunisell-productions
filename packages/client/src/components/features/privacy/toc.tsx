import useScrollSpy from '../../../hooks/use-scroll-spy';
import { scrollToView } from '../../../lib/utils';
import { TOC_ITEMS } from './privacy.constants';

const OBSERVED_IDS = TOC_ITEMS.filter((item) => item.id).map((item) => item.id as string);

const Toc: React.FC = () => {
  const activeId = useScrollSpy(OBSERVED_IDS);

  return (
    <nav className="flex flex-col gap-1 items-start w-full">
      {TOC_ITEMS.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.number}
            type="button"
            disabled={!item.id}
            onClick={() => item.id && scrollToView(item.id)}
            className={`flex gap-4 items-center px-4 py-3 w-full text-left border-l-4 transition-colors ${
              isActive ? 'bg-surface border-secondary' : 'border-transparent'
            } ${item.id ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <span className={`text-xs font-bold ${isActive ? 'text-secondary' : 'text-muted'}`}>{item.number}</span>
            <span className={`text-sm ${isActive ? 'font-medium text-secondary' : 'font-light text-accent'}`}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Toc;
