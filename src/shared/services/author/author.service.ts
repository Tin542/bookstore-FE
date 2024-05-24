import axios from "axios";

const endPoint = "http://localhost:3000/graphql";
const token = "";
const headers = {
  "Content-Type": "application/json",
  token: token,
};
const allAuthorQuery = `{
    findAllAuthors {
        id
        name
    }
  }`;
const graphqlQuery = {
  operationName: "FindAllAuthors",
  query: `query FindAllAuthors ${allAuthorQuery}`,
  variables: {},
};
export const fetchAllAuthor = () => {
  const response = axios({
    url: endPoint,
    method: "post",
    data: graphqlQuery,
    headers: headers,
  });
  return response;
};
