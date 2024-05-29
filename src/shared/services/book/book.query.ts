import { BookQuery } from "../../constants/types/book.type";

export const getAllBook = (data?: BookQuery) => {
  return {
    operationName: "FindAllBooks",
    query: `query FindAllBooks(
      $author: [String!],
      $category: [String!],
      $limit: Int
      $page: Int,
      $rate: [Int!],
      $title: String) {
      findAllBooks(
        author: $author,
        category: $category
        limit: $limit,
        page: $page,
        rate: $rate,
        title: $title) {
        currentPage
        limit
        totalPages
        totalProducts
        list {
          id
          imageUrl
          price
          title
          rate
        }
      }
    }
      `,
    variables: data || ({} as BookQuery),
  };
};
