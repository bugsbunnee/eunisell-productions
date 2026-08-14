import { Skeleton } from '../../ui/skeleton';

const BlogDetailSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-surface flex flex-col gap-6 px-9 md:px-16 lg:px-36 pt-10 pb-20">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-5 w-40 rounded-xs" />
        <div className="flex flex-col gap-3">
          <Skeleton className="h-12 w-full max-w-2xl" />
          <Skeleton className="h-12 w-full max-w-xl" />
        </div>
        <Skeleton className="h-6 w-full max-w-3xl" />
        <Skeleton className="h-72 md:h-96 lg:h-154 w-full rounded-2xl" />
      </div>

      <div className="border-y border-line px-9 md:px-16 lg:px-36 py-6">
        <div className="flex gap-10">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-9 md:px-16 lg:px-36 py-16 max-w-200 mx-auto w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-5 w-full" />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
