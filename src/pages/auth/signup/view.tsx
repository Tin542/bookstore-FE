import React from "react";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import type { FormProps } from "antd";
import { LoginFieldType } from "../../../shared/constants/types/auth.type";
import { HomeOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AUTH_PATH } from "../../../shared/constants/path";

interface SignViewProps {
  onFinish: FormProps<LoginFieldType>["onFinish"];
  onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"];
}
const containerStyle: React.CSSProperties = {
  marginTop: 20,
  width: "100%",
  alignItems: "center",
};
const formStyle: React.CSSProperties = {
  padding: 10,
  width: "30%",
};

const SignUpView: React.FC<SignViewProps> = (props) => {
  const { onFinishFailed, onFinish } = props;
  return (
    <Flex align="center" justify="center" vertical style={containerStyle}>
      <h1>SIGNUP FORM</h1>
      <hr />
      <Form
        style={formStyle}
        name="normal_login"
        className="register-form"
        initialValues={{ remember: true }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}>
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Full Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}>
          <Input
            prefix={<MailOutlined className="site-form-item-icon"/>}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[{ required: true, message: "Please input your phone number!" }]}>
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon"/>}
            placeholder="Phone number"
          />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}>
          <Input
            prefix={<HomeOutlined className="site-form-item-icon"/>}
            placeholder="Address"
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon"/>}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" vertical gap={5}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Sign Up
            </Button>
            <span>
              Already have account ?{" "}
              <Link to={AUTH_PATH.SIGNIN}>signin now !</Link>
            </span>
          </Flex>
        </Form.Item>
      </Form>
    </Flex>
  );
};
export default SignUpView;
