/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import { FC } from "react";
interface ResetPasswordProps {
  updatePassword: (value: any) => void;
}
const ResetComponentView:FC<ResetPasswordProps> = (props) => {
  const {updatePassword} = props;
  return (
    <>
      <Form
        name="info"
        layout="vertical"
        onFinish={updatePassword}>
        <Form.Item
          name="currentPassword"
          label="Current Password"
          rules={[
            {
              required: true,
              message: "Please input your current password!",
            },
           
          ]}
          hasFeedback>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("currentPassword") !== value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password is your current password!")
                );
              },
            }),
          ]}
          hasFeedback>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ResetComponentView;
