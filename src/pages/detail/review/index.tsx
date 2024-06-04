/* eslint-disable @typescript-eslint/no-explicit-any */
import ReviewView from "./view";
import {
  IQueryReview,
  IReviewInput,
  ReviewType,
} from "../../../shared/constants/types/review";
import {
  createReviewApi,
  getAllReviews,
} from "../../../shared/services/review/review.service";
import {
  errorPopUpMessage,
  successPopUpMessage,
} from "../../../shared/components/Notification";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../../shared/redux-flow/selector";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface ReviewComponentProps {
  bid: string | undefined;
}
const ReviewComponent: FC<ReviewComponentProps> = (props) => {
  const { bid } = props;

  const userStore = useSelector(userSelector);

  const [listReview, setListReview] = useState<ReviewType[] | undefined>();
  const [totalItems, setTotalItems] = useState<number>();
  const [filter, setFilter] = useState<IQueryReview>({
    bookId: "",
    rate: [],
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    if (bid) {
      setFilter({ ...filter, bookId: bid });
    }
  }, [bid]);

  useEffect(() => {
    console.log('bookId: ', bid);
    handleGetAllReview(filter);
  }, [filter]);

  const handleGetAllReview = async (value: IQueryReview) => {
    try {
      const response = await getAllReviews(value);
      if (!response.data.data) {
        return;
      }
      const result = response.data.data.getAllReview;
      setListReview(result.list);
      setTotalItems(result.totalProducts);
    } catch (error) {
      console.log(error);
    }
  };
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
    if (!bid) {
      errorPopUpMessage("Create Review failed", "BookId not found");
      return;
    }
    await handleCreateReview({
      ...values,
      bookId: bid,
      userId: userStore?.id as string,
    });
  };

  const onChangeRating = (checkedValues: CheckboxValueType[]) => {
    const intValues = checkedValues.map((value) => parseInt(value as string));
    setFilter({
      ...filter,
      rate: intValues,
      page: 1,
    });
  };

  return (
    <ReviewView
      data={listReview}
      setFilter={setFilter}
      onFinishReview={onFinishReview}
      onChangeRating={onChangeRating}
      totalItems={totalItems}
      filter={filter}
    />
  );
};

export default ReviewComponent;
