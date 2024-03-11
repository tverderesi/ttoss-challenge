import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export function ItemsPerPage({ itemsPerPage }: { itemsPerPage: number[] }) {
  const { dispatch, pagination } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-1 p-2">
      <p className="font-semibold p-0.5">Items/Page</p>
      <Select
        onValueChange={(value) => dispatch({ type: "SET_PAGINATION", payload: parseInt(value) })}
        defaultValue={pagination.toString()}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {itemsPerPage.map((count) => (
            <SelectItem key={count} value={count.toString()}>
              {count}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
