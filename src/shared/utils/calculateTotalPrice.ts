/* eslint-disable @typescript-eslint/no-explicit-any */
export const calculateTotalPrice = (list: any[]) => {
  let result: number = 0;
  list.forEach((item) => {
    result += item.price;
  });
  return result;
};
