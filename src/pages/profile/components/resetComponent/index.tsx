/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import ResetComponentView from "./view";
import { UpdatePasswordType } from "../../../../shared/constants/types/user.type";
import { updatePasswordApi } from "../../../../shared/services/user/user.service";
import {
  errorPopUpMessage,
  successPopUpMessage,
} from "../../../../shared/components/Notification";
import { useSelector } from "react-redux";
import { userSelector } from "../../../../shared/redux-flow/selector";

const ResetComponent: FC = () => {
  const userStore = useSelector(userSelector);
  const handleUpdatePassword = async (data: UpdatePasswordType) => {
    try {
      const result = await updatePasswordApi(data);
      if (!result.data.data) {
        errorPopUpMessage(
          "Error updating password",
          result.data.errors[0].message
        );
        return;
      }
      successPopUpMessage("Updated password successfull");
    } catch (error) {
      console.error(error);
    }
  };
  const updatePassword = (value: any) => {
    handleUpdatePassword({ ...value, id: userStore?.id });
  };
  return <ResetComponentView updatePassword={updatePassword} />;
};

export default ResetComponent;
