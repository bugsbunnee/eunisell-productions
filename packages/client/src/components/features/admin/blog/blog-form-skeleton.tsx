import { Skeleton } from '../../../ui/skeleton';

const BlogFormSkeleton: React.FC = () => {
  return (
    <div className="min-h-full bg-surface-muted px-10 py-9">
      <div className="flex flex-col gap-6 max-w-300">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="flex flex-col gap-1 px-2 py-6">
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>

          <div className="flex flex-col gap-10 rounded-2xl bg-primary-foreground p-8 shadow-[0_1px_2px_rgba(16,24,40,0.03),0_8px_24px_-16px_rgba(16,24,40,0.1)]">
            <div className="flex flex-col gap-1">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-4 w-64" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
              <div className="flex flex-col gap-6">
                <Skeleton className="aspect-4/3 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>

                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-4 w-14" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-14" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                </div>

                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-14" />
                  <Skeleton className="h-72 w-full rounded-xl" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <Skeleton className="h-10 w-28 rounded-xl" />
              <Skeleton className="h-10 w-24 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFormSkeleton;
