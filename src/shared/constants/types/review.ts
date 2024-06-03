export type ReviewType = {
  id: string;
  content: string;
  rate: string;
  user: {
    fullName: string;
    imageUrl: string;
  }
};

export interface IReviewInput {
  content: string;
  rate: string;
  userId: string;
  bookId: string;
}

export interface IQueryReview {
  rate?: number[];
  page?: number;
  limit?: number;
}

export interface IResponseReview {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalProducts: number;
  list: [ReviewType];
}
