import React from "react";
import {  type FormProps } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SignInView from "./view";
import { LoginFieldType } from "../../../shared/constants/types/auth.type";
import { signIn } from "../../../shared/services/auth/auth.service";
import { error, success } from "../../../shared/components/Notification";
import { handleLogin } from "../../../shared/redux-flow/action";
import { CUSTOMER_PATH } from "../../../shared/constants/path";
import { fetchAllCartItem } from "../../../shared/services/cart/cart.service";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(loginInfo);
  // useEffect(() => {
  //   console.log(loginInfo);
  //   if (loginInfo?.id) {
  //     fetchAllCartItems(loginInfo.id);
  //   }
  // }, [loginInfo]);

  const fetchAllCartItems = async (uid: string) => {
    try {
      const response = await fetchAllCartItem(uid);
      console.log("cart", response);
    } catch (err) {
      error('Failed to get cart', err as string);
    }
  };

  const handleSignIn = async (values: LoginFieldType) => {
    try {
      const response = await signIn(values);
      const data = response.data;

      if (data.errors) {
        error("Sign in Failed", data.errors[0].message);
        return;
      }

      if (data.data.signin) {
        const user = data.data.signin;
        dispatch(
          handleLogin({ ...user.userInfo, accessToken: user.accessToken })
        );
        await fetchAllCartItems(user.userInfo.id);
        success("Sign in successfully");
        navigate(CUSTOMER_PATH.HOME);
      }
    } catch (err) {
      error("Sign in failed", "");
    }
  };

  const onFinish: FormProps<LoginFieldType>["onFinish"] = async (values) => {
    await handleSignIn(values);
  };

  const onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return <SignInView onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};

export default SignInPage;
