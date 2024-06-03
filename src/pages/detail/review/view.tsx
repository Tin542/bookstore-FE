/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  Form,
  List,
  Pagination,
  Rate,
  Row,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../../shared/redux-flow/selector";
import { AUTH_PATH } from "../../../shared/constants/path";

const dataList = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

interface ReviewViewProps {
  onFinishReview: (value: any) => void;
}
const ReviewView: FC<ReviewViewProps> = (props) => {
  const { onFinishReview } = props;
  const userStore = useSelector(userSelector);
  return (
    <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
      <Col md={17} sm={24} xs={24}>
        <Card
          title="CUSTOMER REVIEWS"
          bordered={false}
          style={{ width: "100%", border: "1px, solid" }}>
          <Flex justify="flex-start" align="center" gap={10}>
            <div style={{ width: "27%" }}>
              <h1>4.5 /5</h1>
              <Rate disabled defaultValue={4} style={{ fontSize: 20 }} />
            </div>

            <div style={{ width: "100%" }}>
              <Card>
                <Flex vertical gap={15}>
                  <Rate style={{ fontSize: 10 }} disabled defaultValue={1} />
                  <Rate style={{ fontSize: 10 }} disabled defaultValue={2} />
                  <Rate style={{ fontSize: 10 }} disabled defaultValue={3} />
                  <Rate style={{ fontSize: 10 }} disabled defaultValue={4} />
                  <Rate style={{ fontSize: 10 }} disabled defaultValue={5} />
                </Flex>
              </Card>
            </div>
          </Flex>
          <List
            itemLayout="horizontal"
            dataSource={dataList}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<span>{item.title} | 06/03/2024</span>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <Rate style={{ fontSize: 10 }} disabled defaultValue={2} />
              </List.Item>
            )}
          />
          <Pagination
            defaultCurrent={1}
            total={10}
            pageSize={5}
            // onChange={onChangePage}
          />
        </Card>
      </Col>
      <Col md={7} sm={24} xs={24} style={{ alignContent: "flex-start" }}>
        <Card
          title="REVIEW"
          bordered={false}
          style={{ width: "100%", border: "1px, solid" }}>
          <Flex
            vertical
            gap="small"
            style={{ width: "100%", padding: "0 10px" }}>
            {userStore ? (
              <Form layout="vertical" onFinish={onFinishReview}>
                <Form.Item label="Content" name="content">
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item name="rate" label="Rate">
                  <Rate />
                </Form.Item>
                <hr />

                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ width: "100%" }}>
                  Submit Review
                </Button>
              </Form>
            ) : (
              <h3 style={{ textAlign: "center" }}>
                You need <a href={AUTH_PATH.SIGNIN}>Sigin</a> to write a review
              </h3>
            )}
          </Flex>
        </Card>
      </Col>
    </Row>
  );
};

export default ReviewView;
