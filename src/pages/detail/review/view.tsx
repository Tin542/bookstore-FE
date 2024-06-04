/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Button,
  Card,
  Checkbox,
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
import {
  IQueryReview,
  ReviewType,
} from "../../../shared/constants/types/review";
import { CheckboxValueType } from "antd/es/checkbox/Group";


interface ReviewViewProps {
  onFinishReview: (value: any) => void;
  setFilter: (value: IQueryReview) => void;
  data: ReviewType[] | undefined;
  onChangeRating: (checkedValues: CheckboxValueType[]) => void;
  totalItems: number | undefined;
  filter: IQueryReview;
}

const ratingOption = [
  { label: <Rate disabled defaultValue={1} />, value: 1 },
  { label: <Rate disabled defaultValue={2} />, value: 2 },
  { label: <Rate disabled defaultValue={3} />, value: 3 },
  { label: <Rate disabled defaultValue={4} />, value: 4 },
  { label: <Rate disabled defaultValue={5} />, value: 5 },
];

const ReviewView: FC<ReviewViewProps> = (props) => {
  const { onFinishReview, onChangeRating, data, totalItems, filter } = props;
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
                  <Checkbox.Group
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 5,
                    }}
                    options={ratingOption}
                    onChange={onChangeRating}
                  />
                </Flex>
              </Card>
            </div>
          </Flex>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.user.imageUrl} />}
                  title={
                    <span>
                      {item.user.fullName} | {item.createdAt}
                    </span>
                  }
                  description={item.content}
                />
                <Rate
                  style={{ fontSize: 10 }}
                  disabled
                  defaultValue={item.rate}
                />
              </List.Item>
            )}
          />
          <Pagination
            defaultCurrent={filter.page}
            total={totalItems}
            pageSize={filter.limit}
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
