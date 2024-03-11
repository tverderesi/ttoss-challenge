import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function RankingSkeleton() {
  return (
    <div className="gap-8 flex-col flex w-full pb-16">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold text-secondary">Video Ranking</h1>{" "}
      </div>
      <Card className="bg-card shadow rounded-xl">
        <CardHeader className="flex-row items-center justify-between">
          <Skeleton className="h-9 w-1/2" />
          <Skeleton className="h-9 w-1/4" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-6 w-full mx-auto" />
          <Skeleton className="h-6 w-full mx-auto" />
          <Skeleton className="h-6 w-full mx-auto" />
          <Skeleton className="h-6 w-full mx-auto" />
          <Skeleton className="h-6 w-full mx-auto" />
          <Skeleton className="h-6 w-full mx-auto" />
          <Skeleton className="h-6 w-full mx-auto" />
          <Skeleton className="h-6 w-full mx-auto" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-12 w-full mx-auto" />
        </CardFooter>
      </Card>
    </div>
  );
}
