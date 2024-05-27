import SignUpView from "./view";
import { FormProps } from "antd";
import { LoginFieldType } from "../../../shared/constants/types/auth.type";

const SignUpPage = () => {
  const onFinish: FormProps<LoginFieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return <SignUpView onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};

export default SignUpPage;
