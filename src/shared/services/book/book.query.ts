import { IBookQuery } from "../../constants/types/book.type";

export const getAllBook = (data: IBookQuery) => {
  return {
    operationName: "FindAllBooks",
    query: `query FindAllBooks {
          findAllBooks {
              currentPage
              limit
              totalPages
              totalProducts
              list {
                  id
                  title
                  imageUrl
                  isOutofStock
                  price
              }
          }
      }
      `,
    variables: data,
  };
};
