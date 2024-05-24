import axios from "axios";

const endPoint = "http://localhost:3000/graphql";
const token = "";
const headers = {
  "Content-Type": "application/json",
  token: token,
};
const allBookQuery = `{
    findAllBooks(filter: { limit: 5, page: 1 }) {
        currentPage
        limit
        totalPages
        totalProducts
        list {
            authorId
            categoryId
            id
            imageUrl
            isOutofStock
            price
            rate
            title
        }
    }
  }`;
const graphqlQuery = {
  operationName: "FindAllBooks",
  query: `query FindAllBooks ${allBookQuery}`,
  variables: {},
};
export const fetchAllBooks = () => {
  const response = axios({
    url: endPoint,
    method: "post",
    data: graphqlQuery,
    headers: headers,
  });
  return response;
};
