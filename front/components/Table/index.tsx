"use client";

import {
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columnDef } from "./Columns";
import { useMemo, useState } from "react";
import { useTableData } from "@/hooks/useTableData";

const Table = () => {
  const [sotring, setSorting] = useState<ColumnSort[]>([]);

  const { data: axiosResponseData } = useTableData();

  const memorizedData = useMemo(() => {
    return axiosResponseData?.data || [];
  }, [axiosResponseData]);
  const memorizedColumnsDef = useMemo(() => columnDef, []);

  const tableInstance = useReactTable({
    columns: memorizedColumnsDef,
    data: memorizedData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sotring,
    },
    onSortingChange: setSorting,
  });

  return (
    <table className="border-collapse w-full border border-solid border-gray-300">
      <thead className="bg-green-400">
        {tableInstance.getHeaderGroups().map((headerEl) => {
          return (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => {
                return (
                  <th
                    className="p-4 border border-solid text-white border-gray-300 cursor-pointer"
                    key={columnEl.id}
                    colSpan={columnEl.colSpan}
                    onClick={columnEl.column.getToggleSortingHandler()}
                  >
                    {columnEl.isPlaceholder
                      ? null
                      : flexRender(
                          columnEl.column.columnDef.header,
                          columnEl.getContext()
                        )}
                    {
                      { asc: " ⬆️", desc: " ⬇️" }[
                        //@ts-ignore
                        columnEl.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((rowEl) => {
          return (
            <tr className="hover:bg-gray-200" key={rowEl.id}>
              {rowEl.getVisibleCells().map((cellEl) => {
                return (
                  <td
                    className="p-2 border border-solid  border-gray-300"
                    key={cellEl.id}
                  >
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext()
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
