import { getReportsUrl } from "@/config/api.config";
import { BasicData, ICreateReport } from "@/share/table.types";
import axios from "axios";

export const ReportService = {
  async createProduct(data: ICreateReport) {
    return axios.post<string>(getReportsUrl(``), data);
  },

  async getAll(searchTerm?: string) {
    return axios.get<BasicData[]>(getReportsUrl(``), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },
};
