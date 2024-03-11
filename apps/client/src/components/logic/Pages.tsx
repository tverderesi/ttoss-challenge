import { useLazyLoadQuery } from "react-relay";
import { videoCountQuery } from "@/graphql/queries/Videos";
import { VideosCountQuery } from "@/graphql/queries/__generated__/VideosCountQuery.graphql";
import { startTransition, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Pages({ pageInfo, loadQuery, disposeQuery }: { pageInfo: any; loadQuery: any; disposeQuery: any }) {
  const { videoCount } = useLazyLoadQuery<VideosCountQuery>(videoCountQuery, {});
  const { startCursor, endCursor } = pageInfo;
  const { pagination, page, dispatch } = useContext(AppContext);
  const pageCount = Math.ceil((videoCount || 1) / pagination);

  const handleNextPage = () => {
    startTransition(() => {
      disposeQuery();
      loadQuery(
        { after: endCursor, first: pagination, sort: { field: "rating", order: "desc" } },
        { fetchPolicy: "network-only" }
      );
      dispatch({ type: "SET_PAGE", payload: page + 1 });
    });
  };
  const handlePreviousPage = () => {
    startTransition(() => {
      disposeQuery();
      loadQuery(
        { before: startCursor, last: pagination, sort: { field: "rating", order: "desc" } },
        { fetchPolicy: "network-only" }
      );
      dispatch({ type: "SET_PAGE", payload: page - 1 });
    });
  };
  if (!videoCount) return null;
  return (
    <div className="flex flex-col gap-1 p-2">
      <p className="font-semibold p-0.5">
        Page {page} of {pageCount}
      </p>
      <div className="flex gap-1 ">
        <Button size="icon" disabled={page === 1} onClick={handlePreviousPage}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button size="icon" disabled={page === pageCount} onClick={handleNextPage}>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
