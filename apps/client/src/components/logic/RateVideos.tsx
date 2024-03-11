import { usePreloadedQuery, useMutation } from "react-relay";
import { VideoCard } from "@/components/logic/VideoCard";
import { twoRandomVideosQuery } from "../../graphql/queries/Videos";
import { AppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { VideosRandomQuery } from "@/graphql/queries/__generated__/VideosRandomQuery.graphql";
import { useContext } from "react";
import { rateVideosMutation } from "@/graphql/mutations/Videos";

export function RateVideos({
  queryReference,
  loadQuery,
  loadRankedQuery,
}: {
  queryReference: any;
  loadQuery: any;
  disposeRankingQuery: any;
  loadRankedQuery: any;
}) {
  const { twoRandomVideos } = usePreloadedQuery<VideosRandomQuery>(twoRandomVideosQuery, queryReference);
  const { pagination, dispatch } = useContext(AppContext);
  const [commit] = useMutation(rateVideosMutation);

  return (
    <div className="gap-8 flex-col flex pt-20 min-h-screen w-full">
      <div className="flex md:flex-row flex-col justify-between items-center gap-y-4 w-full">
        <h1 className="text-4xl font-semibold text-secondary">Rate Videos</h1>
        <Button
          variant="secondary"
          className="font-semibold shadow ml-0"
          onClick={async () =>
            commit({
              variables: {
                input: {
                  videoAGlobalId: twoRandomVideos?.videoA?.id,
                  videoBGlobalId: twoRandomVideos?.videoB?.id,
                  winner: "DRAW",
                },
              },
              onCompleted() {
                loadQuery({}, { fetchPolicy: "network-only" });
                dispatch({ type: "SET_PAGE", payload: 1 });
                loadRankedQuery({ sort: { field: "rating", order: "desc" }, first: pagination }, { fetchPolicy: "network-only" });
              },
            })
          }
        >
          😑 It's a draw.
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[75vh]  justify-items-center gap-8">
        <VideoCard
          video={twoRandomVideos?.videoA}
          commit={commit}
          videoData={twoRandomVideos}
          loadQuery={loadQuery}
          loadRankedQuery={loadRankedQuery}
        />
        <VideoCard
          video={twoRandomVideos?.videoB}
          commit={commit}
          videoData={twoRandomVideos}
          loadQuery={loadQuery}
          loadRankedQuery={loadRankedQuery}
        />
      </div>
    </div>
  );
}
