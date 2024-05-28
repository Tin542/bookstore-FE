import axios from "axios";
import { IApi } from "../constants/types/api.type";

export const apiBase = (graphqlQuery: IApi) => {
  const baseUrl: string = import.meta.env.VITE_API;
  const token = "";
  const headers = {
    "Content-Type": "application/json",
    token: token,
  };

  const response = axios({
    url: baseUrl,
    method: "post",
    data: graphqlQuery,
    headers: headers,
  });
  return response;
};

// axiosClient.interceptors.response.use(res => res.data.d)

