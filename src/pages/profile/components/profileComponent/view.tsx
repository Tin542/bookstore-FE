/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Flex,
  Form,
  Image,
  Input,
  Row,
} from "antd";
import { FC, useEffect } from "react";
import { ProfileUserType, UpdateUserType } from "../../../../shared/constants/types/user.type";
import ImageUpload from "../../../../shared/components/upload/imageUpload";

interface ProfileComponentViewProps {
  userData: ProfileUserType | undefined;
  onFinishUpdateUser: (data: UpdateUserType) => void;
  setAvatarUrl: (data: string) => void;
  avatarUrl: string | undefined;
}
const ProfileComponentView: FC<ProfileComponentViewProps> = (props) => {
  const { userData, onFinishUpdateUser, setAvatarUrl, avatarUrl } = props;
  const [form] = Form.useForm();


  // To disable submit button at the beginning.
  useEffect(() => {
    if (userData) {
      form.setFieldsValue({
        email: userData.email,
        fullName: userData.fullName,
        username: userData.username,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
      });
    }
  }, [userData, form]);

  return (
    <>
      <Row gutter={[10, 10]}>
        <Col md={15} sm={24} xs={24}>
          <Form
            form={form}
            name="info"
            layout="vertical"
            onFinish={onFinishUpdateUser}>
            <Form.Item
              label="Emial"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}>
              <Input prefix={<MailOutlined />} placeholder="Email" defaultValue={userData?.email}/>
            </Form.Item>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your Full name !" },
              ]}>
              <Input
                prefix={<UserOutlined />}
                type="text"
                placeholder="Full Name"
              />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}>
              <Input prefix={<HomeOutlined />} placeholder="Address" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your Phone !" },
              ]}>
              <Input
                prefix={<PhoneOutlined />}
                type="text"
                placeholder="Phone"
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col md={9} sm={24} xs={24} style={{ alignContent: "flex-start" }}>
          <Flex justify="center" align="center" vertical gap={10}>
            <Image width={200} src={avatarUrl ? avatarUrl : userData?.avatar} />
            <ImageUpload setData={setAvatarUrl} />
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default ProfileComponentView;
