import React from "react";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const containerStyle: React.CSSProperties = {
  margin: "10px 15%",
};

const titleStyle: React.CSSProperties = {
  textAlign: "center",
};
const contentStyle: React.CSSProperties = {
  fontSize: "20px",
};

const AboutView = () => {
  return (
    <>
      <h3>About us</h3>
      <hr />
      <div style={containerStyle}>
        <Row>
          <Col span={24}>
            <div>
              <Title style={titleStyle} level={2}>
                Welcome to Bookstore
              </Title>
              <p style={contentStyle}>
                "Bookworm is an independent New York bookstore and language
                school with locations in Manhattan and Brooklyn. We specialize
                in travel books and language classes."
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12} md={12} xs={24}>
            <div>
              <Title level={2}>
                Our Story
              </Title>
              <p style={contentStyle}>
                The name Bookworm was taken from the original name for New York
                International Airport, which was renamed JFK in December 1963.
                Our Manhattan store has just moved to the West Village. Our new
                location is 170 7th Avenue South, at the corner of Perry Street.
                From March 2008 through May 2016, the store was located in the
                Flatiron District.
              </p>
            </div>
          </Col>
          <Col span={12} md={12} xs={24}>
            <div>
              <Title level={2}>
                Our Vision
              </Title>
              <p style={contentStyle}>
                One of the last travel bookstores in the country, our Manhattan
                store carries a range of guidebooks (all 10% off) to suit the
                needs and tastes of every traveler and budget. We believe that a
                novel or travelogue can be just as valuable a key to a place as
                any guidebook, and our well-read, well-traveled staff is happy
                to make reading recommendations for any traveler, book lover, or
                gift giver.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutView;
