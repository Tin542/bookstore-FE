import { DocumentNode, useQuery } from "@apollo/react-hooks";
import { ICategories } from "../../types/category.type";


export function useCategoryQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<ICategories>(gqlQuery);
  return { loading, error, data };
}