
import { IReviewInput } from "../../constants/types/review";

export const createReview = (data: IReviewInput) => {
  return {
    operationName: "CreateReview",
    query: `
    mutation CreateReview(
        $bookId: String!,
        $userId: String!,
        $content: String!,
        $rate: Int!
    ) {
        createReview(
            bookId: $bookId
            content: $content
            rate: $rate
            userId: $userId
        ) {
            bookId
            content
            createdAt
            id
            rate
            updatedAt
            userId
        }
    }
    
        `,
    variables: data,
  };
};
