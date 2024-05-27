import React, { } from "react";
import type { FormProps } from "antd";
import SignInView from "./view";
import { LoginFieldType } from "../../../shared/constants/types/auth.type";


const SignInPage: React.FC = () => {
  const onFinish: FormProps<LoginFieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return <SignInView onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};
export default SignInPage;
