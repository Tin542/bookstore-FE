import { notification } from "antd";

export const successPopUpMessage = (msg: string) => {
  notification.success({
    message: msg,
  });
};
export const errorPopUpMessage = (msg: string, description: string) => {
  notification.error({
    message: msg,
    description: description,
  });
};
