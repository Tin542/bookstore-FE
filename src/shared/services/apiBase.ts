import axios from "axios";
import { IApi } from "../constants/types/api.type";
import { ACCESS_TOKEN } from "../constants/appConstants";

export const apiBase = (graphqlQuery: IApi) => {
  
  const baseUrl: string = import.meta.env.VITE_API;
  const token = localStorage.getItem(ACCESS_TOKEN);
  console.log('token: ', typeof token);
  const headers = {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : '',
  };

  const response = axios({
    url: baseUrl,
    method: "post",
    data: graphqlQuery,
    headers: headers,
  });
  return response;
};

