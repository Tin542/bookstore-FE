import {
  Col,
  Row,
  Layout,
  Rate,
  Select,
  Checkbox,
  Input 
} from "antd";
import React, { FC } from "react";

import CardComponent from "../../shared/components/Card";

interface Item {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  rate: number;
  author: {
    name: string;
  };
}
interface ShopViewProps {
  item: Item[];
  onChangeCategory: (value: string[]) => void;
  onChangeRate: (value: number) => void;
  onChangeSort: (value: string) => void;
}

const contentStyle: React.CSSProperties = {
  background: "#fff",
  padding: 10,
};

const { Content, Sider } = Layout;
const { Option } = Select;

const options = [
  { label: "Kinh dị", value: "Apple" },
  { label: "Manga", value: "Pear" },
  { label: "Ngôn tình", value: "Orange" },
];

const ShopView: FC<ShopViewProps> = (props) => {
  const { onChangeCategory, onChangeRate, onChangeSort, item } = props;
  return (
    // <ConfigProvider
    //   theme={{
    //     components: {
    //       Typography: {
    //         titleMarginTop: 0,
    //         titleMarginBottom: 10,
    //       },
    //     },
    //     token: {
    //       padding: 5,
    //     },
    //   }}>
    //   <div style={contentStyle}>
    //     <Row>
    //       <Col span={7}>
    //         <Card style={{ width: 300 }}>
    //           <p>Card content</p>
    //           <p>Card content</p>
    //           <p>Card content</p>
    //         </Card>
    //         <Card style={{ width: 300 }}>
    //           <p>Card content</p>
    //           <p>Card content</p>
    //           <p>Card content</p>
    //         </Card>
    //       </Col>
    //       <Col span={17}>
    //         <Flex justify="flex-end" vertical>
    //           <Select
    //             defaultValue="popular"
    //             style={{ width: 120 }}
    //             onChange={onChangeSort}>
    //             <Option value="popular">Popular</Option>
    //             <Option value="price-asc">On Sale</Option>
    //           </Select>
    //           <Flex wrap justify="flex-end" gap={10}>
    //             {item.map((item) => (
    //               <CardComponent item={item} />
    //             ))}
    //           </Flex>
    //         </Flex>
    //       </Col>
    //     </Row>
    //   </div>
    // </ConfigProvider>
    <Layout>
      <Sider
        style={contentStyle}
        width={200}
        className="site-layout-background">
        <h1>FILTER</h1>
        <hr/>
        <Input placeholder="Title..." />
        <hr />
        <h3>Category</h3>
        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChangeCategory} />
        <hr/>
        <h3>Rate</h3>
        <Rate onChange={onChangeRate} />
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Select
          defaultValue="popular"
          style={{ width: 120 }}
          onChange={onChangeSort}>
          <Option value="popular">Popular</Option>
          <Option value="onsale">On Sale</Option>
          <Option value="all">All</Option>
        </Select>
        <Row gutter={[10, 10]}>
          {item.map((book) => (
            <Col span={6} key={book.id}>
              <CardComponent item={book} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};
export default ShopView;
