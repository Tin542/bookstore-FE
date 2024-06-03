import { IReviewInput } from "../../constants/types/review";
import { apiBase } from "../apiBase";
import { createReview } from "./review.query";

export const createReviewApi = (data: IReviewInput) => apiBase(createReview(data));

