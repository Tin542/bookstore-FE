/* eslint-disable @typescript-eslint/no-explicit-any */
import ReviewView from "./view";
import { IReviewInput } from "../../../shared/constants/types/review";
import { createReviewApi } from "../../../shared/services/review/review.service";
import {
  errorPopUpMessage,
  successPopUpMessage,
} from "../../../shared/components/Notification";
import { FC } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../../shared/redux-flow/selector";

interface ReviewComponentProps {
  bookId: string;
}
const ReviewComponent: FC<ReviewComponentProps> = (props) => {
  const { bookId } = props;
  const userStore = useSelector(userSelector);
  const handleCreateReview = async (value: IReviewInput) => {
    try {
      const result = await createReviewApi(value);
      if (!result.data.data.createReview) {
        errorPopUpMessage("Review Failed", result.data.errors[0].message);
        return;
      }
      successPopUpMessage("Review Success");
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishReview = async (values: IReviewInput) => {
    console.log("onFinishReview", values);
    await handleCreateReview({
      ...values,
      bookId,
      userId: userStore?.id as string,
    });
  };
  return <ReviewView onFinishReview={onFinishReview} />;
};

export default ReviewComponent;
