import axios from "axios";

const endPoint = "http://localhost:3000/graphql";
const token = "";
const headers = {
  "Content-Type": "application/json",
  token: token,
};
const allCategoryQuery = `{
    findAllCategories {
        id
        name
    }
  }`;
const graphqlQuery = {
  operationName: "FindAllCategories",
  query: `query FindAllCategories ${allCategoryQuery}`,
  variables: {},
};
export const fetchAllCategory = () => {
  const response = axios({
    url: endPoint,
    method: "post",
    data: graphqlQuery,
    headers: headers,
  });
  return response;
};
