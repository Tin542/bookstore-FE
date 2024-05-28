import { notification } from "antd";

export const success = (msg: string) => {
  notification.success({
    message: msg,
  });
};
export const error = (msg: string, description: string) => {
  notification.error({
    message: msg,
    description: description,
  });
};
