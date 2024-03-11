import { videosQuery } from "@/graphql/queries/Videos";
import { VideosRankingQuery } from "@/graphql/queries/__generated__/VideosRankingQuery.graphql";
import { usePreloadedQuery } from "react-relay";
import { Table, TableBody, TableHeader, TableCell, TableRow, TableHead, TableFooter } from "../ui/table";
import { ItemsPerPage } from "./ItemsPerPage";
import { Pages } from "./Pages";

export function VideoRanking({
  preloadedQuery,
  loadQuery,
  disposeQuery,
}: {
  preloadedQuery: any;
  loadQuery: any;
  disposeQuery: any;
}) {
  const { videos } = usePreloadedQuery<VideosRankingQuery>(videosQuery, preloadedQuery);

  const videoNodes = videos?.edges?.map((edge) => edge?.node);
  const pageInfo = videos?.pageInfo;

  return (
    <div className="gap-8 flex-col flex w-full pb-16">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold text-secondary">Video Ranking</h1>{" "}
      </div>
      {videos && (
        <Table className="bg-card shadow rounded-xl">
          <TableHeader className="bg-card/0 p-2">
            <TableRow>
              <TableHead className="py-4">Title</TableHead>
              <TableHead className="py-4 w-32">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videoNodes?.map((video) => (
              <TableRow key={video?.id}>
                <TableCell className="py-4">{video?.title}</TableCell>
                <TableCell className="py-4">{video?.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-card/0">
            <ItemsPerPage itemsPerPage={[1, 5, 10, 20]} />
            <Pages pageInfo={pageInfo} loadQuery={loadQuery} disposeQuery={disposeQuery} />
          </TableFooter>
        </Table>
      )}
    </div>
  );
}
