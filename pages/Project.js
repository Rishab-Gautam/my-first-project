import React from "react";
import Nav from "./Nav";
import { Carousel, Radio } from "antd";
import { Typography, Row, Col, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "25px",
        lineHeight: "1.5715",
        marginRight: '300px'
      }}
      onClick={onClick}
    >
      <RightOutlined style={{ color: "purple" }} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "25px",
        lineHeight: "1.5715",
        marginLeft: '250px'
      }}
      onClick={onClick}
    >
      <LeftOutlined style={{ color: "purple" }} />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Project() {
  return (
    <div>
      <Nav />
      <div style={{ marginLeft: "430px", marginTop: "140px" }}>
        <Title level={2}>What projects will you build?</Title>
      </div>

      <div style={{ marginLeft: "" }}>
        <Carousel arrows {...settings}>
          <div>
            <div className="site-card-wrapper" style={{ marginLeft: "300px" }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card style={{ backgroundColor: "#AD80CC" }}>
                    <h
                      style={{
                        font: "14px proximanova-bold",
                        color: "#ffffff",
                      }}
                    >
                      Project Name
                    </h>
                    <br />
                    <h
                      style={{
                        font: "20px proximanova-bold",
                        color: "white",
                      }}
                    >
                      Create your own blog
                    </h>
                  </Card>
                  <div>
                    <p
                      style={{
                        font: "20px proximanova-bold",
                        color: "#444444",
                      }}
                    >
                      Set up your own blog and link it with Google Analytics to
                      track the number of visitors on it.
                    </p>
                  </div>
                </Col>
                <Col span={8}>
                  <Card style={{ backgroundColor: "#AD80CC" }}>
                    <h
                      style={{
                        font: "14px proximanova-regular",
                        color: "#ffffff",
                      }}
                    >
                      Project Name
                    </h>
                    <br />
                    <h
                      style={{
                        font: "20px proximanova-bold",
                        color: "white",
                      }}
                    >
                      Website SEO audit
                    </h>
                  </Card>
                  <div>
                    <p
                      style={{
                        font: "20px proximanova-bold",
                        color: "#444444",
                      }}
                    >
                      Analyse a website and suggest at least 3 ways it can
                      improve its ranking in Google search results.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div>
            <div className="site-card-wrapper" style={{ marginLeft: "300px" }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card style={{ backgroundColor: "#AD80CC" }}>
                    <h
                      style={{
                        font: "14px proximanova-bold",
                        color: "#ffffff",
                      }}
                    >
                      Project Name
                    </h>
                    <br />
                    <h
                      style={{
                        font: "20px proximanova-bold",
                        color: "white",
                      }}
                    >
                      Create & send an email campaign
                    </h>
                  </Card>
                  <div>
                    <p
                      style={{
                        font: "20px proximanova-bold",
                        color: "#444444",
                      }}
                    >
                      Use MailChimp to build your email list, send a mailer, and
                      track its performance
                    </p>
                  </div>
                </Col>
                <Col span={8}>
                  <Card style={{ backgroundColor: "#AD80CC" }}>
                    <h
                      style={{
                        font: "14px proximanova-regular",
                        color: "#ffffff",
                      }}
                    >
                      Project Name
                    </h>
                    <br />
                    <h
                      style={{
                        font: "20px proximanova-bold",
                        color: "white",
                      }}
                    >
                      Build a content plan
                    </h>
                  </Card>
                  <div>
                    <p
                      style={{
                        font: "20px proximanova-bold",
                        color: "#444444",
                      }}
                    >
                      Create a buyer's persona and develop a content plan for
                      the website of a business school
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>  <div>
            <div className="site-card-wrapper" style={{ marginLeft: "300px" }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card style={{ backgroundColor: "#AD80CC" }}>
                    <h
                      style={{
                        font: "14px proximanova-bold",
                        color: "#ffffff",
                      }}
                    >
                      Project Name
                    </h>
                    <br />
                    <h
                      style={{
                        font: "20px proximanova-bold",
                        color: "white",
                      }}
                    >
                      Create & send an email campaign
                    </h>
                  </Card>
                  <div>
                    <p
                      style={{
                        font: "20px proximanova-bold",
                        color: "#444444",
                      }}
                    >
                      Use MailChimp to build your email list, send a mailer, and
                      track its performance
                    </p>
                  </div>
                </Col>
                <Col span={8}>
                  <Card style={{ backgroundColor: "#AD80CC" }}>
                    <h
                      style={{
                        font: "14px proximanova-regular",
                        color: "#ffffff",
                      }}
                    >
                      Project Name
                    </h>
                    <br />
                    <h
                      style={{
                        font: "20px proximanova-bold",
                        color: "white",
                      }}
                    >
                      Build a content plan
                    </h>
                  </Card>
                  <div>
                    <p
                      style={{
                        font: "20px proximanova-bold",
                        color: "#444444",
                      }}
                    >
                      Create a buyer's persona and develop a content plan for
                      the website of a business school
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>


        </Carousel>
      </div>
    </div>
  );
}
