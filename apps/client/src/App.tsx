import { Navbar } from "./components/ui/navbar";
import { useQueryLoader } from "react-relay";
import { RateVideos } from "@/components/logic/RateVideos";
import { Suspense, useContext, useEffect } from "react";
import { VideoRanking } from "@/components/logic/Ranking";
import { videosQuery } from "@/graphql/queries/Videos";
import { NewVideoForm } from "@/components/logic/NewVideoForm";
import { RateVideosSkeleton } from "@/components/ui/rate-videos-skeleton";
import { AppContext } from "./context/AppContext";
import { RankingSkeleton } from "./components/ui/ranking-skeleton";

const App: React.FC = () => {
  const { pagination } = useContext(AppContext);
  const [preloadedRankingVideosQuery, loadRankingVideosQuery, disposeRankingVideosQuery] = useQueryLoader(videosQuery);
  useEffect(() => {
    loadRankingVideosQuery({ first: pagination, sort: { field: "rating", order: "desc" } }, { fetchPolicy: "store-or-network" });
  }, [pagination]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-start gap-4 relative pt-0 px-8 ">
        <main className="flex flex-col items-center justify-start gap-16 w-full">
          <Suspense fallback={<RateVideosSkeleton />}>
            <RateVideos />
          </Suspense>
          <NewVideoForm />
          {preloadedRankingVideosQuery ? (
            <VideoRanking
              preloadedQuery={preloadedRankingVideosQuery}
              loadQuery={loadRankingVideosQuery}
              disposeQuery={disposeRankingVideosQuery}
            />
          ) : (
            <RankingSkeleton />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
