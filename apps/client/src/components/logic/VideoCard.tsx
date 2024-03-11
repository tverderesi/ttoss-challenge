import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { Skeleton } from "../ui/skeleton";

export const VideoCard = ({
  video,
  commit,
  videoData,
  loadQuery,
  loadRankedQuery,
}: {
  video: any;
  commit: any;
  videoData: any;
  loadQuery: any;
  loadRankedQuery: any;
}) => {
  const { dispatch, pagination } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  return (
    <Card className="max-w-[40rem] flex flex-col justify-between w-full">
      <CardHeader>
        <CardTitle className="text-2xl min-h-16">{video.title}</CardTitle>
        <CardDescription className="font-semibold text-primary text-xl">
          <span>Rating: </span>
          {video.rating}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <AspectRatio ratio={16 / 9} className="w-full relative">
          {loading && (
            <Skeleton className="rounded-xl drop-shadow max-w-[560px] max-h-[315px] w-full h-full  mx-auto absolute z-0" />
          )}
          <iframe
            src={video.src}
            title={video.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-xl drop-shadow max-w-[560px] max-h-[315px] w-full h-full  mx-auto absolute z-1"
            onLoad={() => setLoading(false)}
          />
        </AspectRatio>
      </CardContent>
      <CardFooter className="justify-center flex">
        <Button
          className="font-semibold"
          onClick={async () => {
            setLoading(true);
            commit({
              variables: {
                input: {
                  videoAGlobalId: videoData.videoA.id,
                  videoBGlobalId: videoData.videoB.id,
                  winner: video.id,
                },
              },
              onCompleted() {
                dispatch({ type: "SET_PAGE", payload: 1 });
                loadQuery({}, { fetchPolicy: "network-only" });
                loadRankedQuery({ sort: { field: "rating", order: "desc" }, first: pagination }, { fetchPolicy: "network-only" });
              },
            });
          }}
        >
          🏁 Winner!
        </Button>
      </CardFooter>
    </Card>
  );
};
