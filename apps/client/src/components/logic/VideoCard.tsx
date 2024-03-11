import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

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
  return (
    <Card className="max-w-[40rem] flex flex-col justify-between w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{video.title}</CardTitle>
        <CardDescription className="font-semibold text-primary text-xl">
          <span>Rating: </span>
          {video.rating}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <AspectRatio ratio={16 / 9} className="w-full">
          {video.src ? (
            <iframe
              src={video.src}
              title={video.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-xl drop-shadow max-w-[560px] max-h-[315px] w-full h-full"
            ></iframe>
          ) : (
            <div className=" bg-gray-300 rounded-xl drop-shadow">
              <Loader2 className="animate-spin h-10 w-10 text-white" />
            </div>
          )}
        </AspectRatio>
      </CardContent>
      <CardFooter className="justify-center flex">
        <Button
          className="font-semibold"
          onClick={async () =>
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
            })
          }
        >
          🏁 Winner!
        </Button>
      </CardFooter>
    </Card>
  );
};
