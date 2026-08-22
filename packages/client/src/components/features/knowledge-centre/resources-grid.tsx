import { Activity } from 'react';
import type { PublicKnowledgeResource } from '../../../services/public-knowledge-resource.service';
import { Stagger, StaggerItem } from '../../common/motion';
import { Skeleton } from '../../ui/skeleton';
import { formatFileSize } from '../../../lib/utils';
import downloadArrow from '../../../assets/icons/knowledge-centre/download-arrow-sm.svg';

const ResourceCard: React.FC<{ resource: PublicKnowledgeResource }> = ({ resource }) => (
  <div className="flex flex-col gap-6 items-start w-full">
    <div className="bg-surface h-120 w-full rounded-2xl overflow-hidden">
      <img src={resource.coverImage} alt="" className="size-full object-cover" />
    </div>

    <div className="flex flex-col gap-3 items-start w-full">
      <p className="font-bold text-secondary text-xs tracking-[1.2px] uppercase">{resource.category}</p>
      <h3 className="font-semibold text-accent text-2xl leading-tight">{resource.title}</h3>
      <p className="font-normal text-navy-subtle text-sm leading-[1.6] line-clamp-2">{resource.description}</p>

      <div className="flex items-center justify-between w-full pt-3">
        <span className="font-medium text-navy-subtle text-xs">
          {resource.fileType} · {formatFileSize(resource.fileSizeBytes)}
        </span>
        <a href={resource.file} download target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center group">
          <span className="font-bold text-secondary text-sm">Download</span>
          <img src={downloadArrow} alt="" className="w-2.25 h-3 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </div>
  </div>
);

const ResourceCardSkeleton: React.FC = () => (
  <div className="flex flex-col gap-6 items-start w-full">
    <Skeleton className="h-120 w-full rounded-2xl" />
    <div className="flex flex-col gap-3 items-start w-full">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-7 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

interface ResourcesGridProps {
  resources: PublicKnowledgeResource[];
  isLoading: boolean;
  hasMore: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
}

const ResourcesGrid: React.FC<ResourcesGridProps> = ({ resources, isLoading, hasMore, isLoadingMore, onLoadMore }) => {
  return (
    <section className="flex flex-col gap-20 items-center px-9 md:px-16 lg:px-36 py-16 md:py-20 lg:py-24 w-full">
      <Activity mode={isLoading ? 'visible' : 'hidden'}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 w-full max-w-432">
          {Array.from({ length: 6 }).map((_, index) => (
            <ResourceCardSkeleton key={index} />
          ))}
        </div>
      </Activity>

      <Activity mode={isLoading ? 'hidden' : 'visible'}>
        <Activity mode={resources.length === 0 ? 'visible' : 'hidden'}>
          <p className="text-center text-navy-subtle text-base">No resources match this filter yet — try a different category or search term.</p>
        </Activity>

        <Activity mode={resources.length > 0 ? 'visible' : 'hidden'}>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 w-full max-w-432">
            {resources.map((resource) => (
              <StaggerItem key={resource.id} hover>
                <ResourceCard resource={resource} />
              </StaggerItem>
            ))}
          </Stagger>
        </Activity>
      </Activity>

      {hasMore && (
        <button
          type="button"
          onClick={onLoadMore}
          disabled={isLoadingMore}
          className="border-2 border-line rounded-full px-12 py-4.5 font-bold text-accent text-base disabled:opacity-50 disabled:pointer-events-none"
        >
          {isLoadingMore ? 'Loading…' : 'Load More Resources'}
        </button>
      )}
    </section>
  );
};

export default ResourcesGrid;
