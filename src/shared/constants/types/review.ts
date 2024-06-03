export type ReviewType = {
  id: string;
  content: string;
  rate: string;
  userId: string;
  bookId: string;
};

export interface IReviewInput {
  content: string;
  rate: string;
  userId: string;
  bookId: string;
}
