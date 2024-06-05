import { bookPromotion } from "../constants/types/book.type";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const calculateTotalPrice = (list: any[]) => {
  let result: number = 0;
  if(!list) return 0;
  list.forEach((item) => {
    result += item.price;
  });
  return result;
};

export const calculateDiscount = (
  price: number,
  discountPercents: Array<bookPromotion>
) => {
  console.log("discountPercents", discountPercents);
  if(!discountPercents) return price;
  let totalDiscountPercent = 0;
  discountPercents.forEach((item) => {
    totalDiscountPercent += item.promotion.discountPercents;
  });
  if (totalDiscountPercent > 80) totalDiscountPercent = 80;
  return Math.ceil((price * totalDiscountPercent) / 100);
};