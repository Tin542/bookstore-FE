// import axios, { Method, AxiosRequestConfig, AxiosResponse } from "axios";

// export const axiosBase = async (
//   method: Method = "POST",
//   body: Record<string, any> = {},
//   configHeaders: Record<string, string> | null = null,
//   responseType: AxiosRequestConfig["responseType"] = undefined
// ): Promise<AxiosResponse> => {
//   const headers = configHeaders ?? {
//     "content-type": "application/json",
//   };

//   const config: AxiosRequestConfig = {
//     method,
//     url: 'http://localhost:3000/graphql',
//     headers,
//     data: body,
//     responseType,
//   };

//   try {
//     const response = await axios(config);
//     return response;
//   } catch (error) {
//     // Handle error as needed, e.g., logging or re-throwing
//     console.error("Error axios base:", error);
//     throw error;
//   }
// };
