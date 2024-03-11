import { loadQuery, useQueryLoader } from "react-relay";
import { RateVideos } from "../components/logic/RateVideos";
import { twoRandomVideosQuery } from "../graphql/queries/Videos";
import { useContext, useEffect } from "react";
import { VideoRanking } from "@/components/logic/Ranking";
import { videosQuery } from "../graphql/queries/Videos";
import { AppContext } from "@/context/AppContext";
import { NewVideoForm } from "@/components/logic/NewVideoForm";
export function RateHome() {
  const [queryRandomVideosReference, loadRandomVideosQuery] = useQueryLoader(twoRandomVideosQuery);
  const { pagination } = useContext(AppContext);
  useEffect(() => {
    loadRandomVideosQuery({}, { fetchPolicy: "network-only" });
  }, [loadRandomVideosQuery]);
  const [queryRankingVideosReference, loadRankingVideosQuery, disposeRankingQuery] = useQueryLoader(videosQuery);
  useEffect(() => {
    loadRankingVideosQuery({ sort: { field: "rating", order: "desc" }, first: pagination }, { fetchPolicy: "network-only" });
  }, [loadRankingVideosQuery, pagination]);

  return (
    <div className="flex flex-col items-center justify-start gap-4 relative pt-0 px-8 ">
      <div className="bg-secondary-foreground/90 backdrop-blur p-4 w-full h-16 flex items-center justify-center fixed z-10 gap-4">
        <div className="text-xl font-semibold text-secondary flex-grow">🎬 Video Battle 9000</div>
      </div>
      <main className="flex flex-col items-center justify-start gap-16 w-full">
        {queryRandomVideosReference && (
          <RateVideos
            queryReference={queryRandomVideosReference}
            loadQuery={loadRandomVideosQuery}
            loadRankedQuery={loadRankingVideosQuery}
            disposeRankingQuery={disposeRankingQuery}
          />
        )}
        {queryRankingVideosReference && (
          <>
            <NewVideoForm loadQuery={loadRankingVideosQuery} />
            <VideoRanking queryReference={queryRankingVideosReference} loadQuery={loadRankingVideosQuery} />
          </>
        )}
      </main>
    </div>
  );
}
