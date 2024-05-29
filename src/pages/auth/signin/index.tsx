import React from "react";
import { message, type FormProps } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SignInView from "./view";
import { LoginFieldType } from "../../../shared/constants/types/auth.type";
import { signIn } from "../../../shared/services/auth/auth.service";
import { error, success } from "../../../shared/components/Notification";
import { handleLogin } from "../../../shared/redux-flow/action";
import { CUSTOMER_PATH } from "../../../shared/constants/path";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish: FormProps<LoginFieldType>["onFinish"] = async (values) => {
    try {
      await signIn(values)
        .then((rs) => {
          const response = rs.data;
          if (response.errors) {
            if (response.errors[0].message === "Unauthorized") {
              error("Sing in Failed", "Username or password incorrect");
            }
            return;
          }

          if (response.data.signin) {
            const user = response.data.signin;
            success("Sign in successfully");
            navigate(CUSTOMER_PATH.HOME);
            dispatch(
              handleLogin({...user.userInfo, accessToken: user.accessToken })
            );
          }
        })
        .catch((err) => {
          error("Signup failed", err);
        });
    } catch (error) {
      message.error("Signup failed. Please try again.");
    }
  };
  const onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return <SignInView onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};
export default SignInPage;
