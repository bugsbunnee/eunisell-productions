import { Skeleton } from '../../../ui/skeleton';

const DashboardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 rounded-2xl bg-primary-foreground p-6">
        <div className="flex items-center gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-1 flex-col gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-14" />
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-border" />
        <div className="flex items-center gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-1 flex-col gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-14" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
        <div className="flex flex-col gap-5 rounded-2xl bg-primary-foreground p-6">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-65 w-full rounded-xl" />
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-primary-foreground p-6">
          <Skeleton className="h-5 w-32" />
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-full rounded-md" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
        <div className="flex flex-col gap-4 rounded-2xl bg-primary-foreground p-6">
          <Skeleton className="h-5 w-32" />
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-full rounded-md" />
          ))}
        </div>
        <div className="flex flex-col gap-5 rounded-2xl bg-primary-foreground p-6">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-40 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
