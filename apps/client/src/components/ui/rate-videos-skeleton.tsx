import { Skeleton } from "./skeleton";
import { VideoCardSkeleton } from "./video-card-skeleton";
export function RateVideosSkeleton() {
  return (
    <div className="gap-8 flex-col flex pt-20 min-h-screen w-full">
      <div className="flex md:flex-row flex-col justify-between items-center gap-y-4 w-full">
        <h1 className="text-4xl font-semibold text-secondary">Rate Videos</h1>
        <div className="w-[7.6rem] h-9 bg-secondary shadow rounded-md">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[75vh] justify-items-center gap-8">
        <VideoCardSkeleton />
        <VideoCardSkeleton />
      </div>
    </div>
  );
}
