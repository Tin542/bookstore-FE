import { DocumentNode, useQuery } from "@apollo/react-hooks";
import { IBooks } from "../../types/book.type";

export function useBookQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<IBooks>(gqlQuery);
  return { loading, error, data };
}