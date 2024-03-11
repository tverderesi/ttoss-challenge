import { Card, CardContent, CardHeader, CardFooter } from "./card";
import { AspectRatio } from "./aspect-ratio";
import { Skeleton } from "./skeleton";
export function VideoCardSkeleton() {
  return (
    <Card className="max-w-[40rem] flex flex-col justify-between w-full">
      <CardHeader>
        <Skeleton className="w-3/4 h-8" />
        <Skeleton className="w-1/4 h-8" />
      </CardHeader>
      <CardContent className="w-full">
        <AspectRatio ratio={16 / 9} className="w-full relative">
          <Skeleton className="rounded-xl drop-shadow max-w-[560px] max-h-[315px] w-full h-full  mx-auto absolute z-0" />
        </AspectRatio>
      </CardContent>
      <CardFooter className="justify-center flex items-center">
        <Skeleton className="w-1/5 h-9" />
      </CardFooter>
    </Card>
  );
}
