import { ChangeEvent, useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useMutation, useQuery } from "react-query";
import { ReportService } from "@/services/report.service";
import { ICreateReport } from "@/share/table.types";

export const useTableData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const queryData = useQuery(["reports list", debouncedSearch], () =>
    ReportService.getAll(debouncedSearch)
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { mutateAsync: createReportAsync } = useMutation(
    "create report",
    (data: ICreateReport) => ReportService.createProduct(data),
    {
      onError: (error) => {
        console.log(error, "Report list");
      },

      onSuccess: () => {
        console.log("Create report", "create was successful");
        queryData.refetch();
      },
    }
  );

  return useMemo(
    () => ({
      ...queryData,
      createReportAsync,
    }),
    [queryData, createReportAsync]
  );
};
