import React from "react";
import Nav from "./Nav";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { Typography, Row, Col, Card, Image, Rate } from "antd";

const { Title } = Typography;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
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
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <LeftOutlined style={{ color: "purple" }} />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Review() {
  return (
    <div>
      <Nav />

      <Row justify="center">
        <Col span={16}>
          <div>
            <Title
              style={{
                marginTop: "80px",
                justifyContent: "center",
                marginLeft: "300px",
                marginBottom: "50px",
              }}
              level={3}
            >
              Review from Student
            </Title>
          </div>
          <Carousel arrows {...settings}>
            <div style={{ display: "flex" }}>
              <div className="site-card-wrapper">
                <Row gutter={24}>
                  <Col span={12}>
                    <Card>
                      <div style={{ display: "flex" }}>
                        <img src="e.png" style={{ borderRadius: "50%" }} />
                        <div style={{ marginTop: "30px" }}>
                          <h
                            style={{
                              font: "20px proximanova-bold",
                              color: "#444444",
                            }}
                          >
                            &nbsp;&nbsp;Abhimaan
                          </h>
                          <br />
                          <h level={5}>
                            &nbsp;&nbsp;Indira Gandhi National
                            <br />
                            &nbsp;&nbsp; Open University
                          </h>
                          <br />
                          &nbsp;&nbsp; <Rate allowHalf defaultValue={4.5} />
                        </div>
                      </div>
                      <p>
                        was keen to learn Digital Marketing but was not sure
                        where to do it from. I heard about the training on
                        Internshala and really liked it. So I took it and I'm
                        glad I did because I had a fantastic learning
                        experience!
                      </p>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <div style={{ display: "flex" }}>
                        <img src="vedika.png" style={{ borderRadius: "50%" }} />
                        <div style={{ marginTop: "30px" }}>
                          <h
                            style={{
                              font: "20px proximanova-bold",
                              color: "#444444",
                            }}
                          >
                            &nbsp;&nbsp;Vedika
                          </h>
                          <br />
                          <h level={5}>
                            &nbsp;&nbsp;Indira Gandhi National
                            <br />
                            &nbsp;&nbsp; Open University
                          </h>
                          <br />
                          &nbsp;&nbsp; <Rate allowHalf defaultValue={3.5} />
                        </div>
                      </div>
                      <p>
                        The Digital Marketing training program provided by
                        Internshala is one of the best I've done! The content
                        was well structured & <br />
                        having assignments to do after every chapter really
                        helped me become more confident
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <div className="site-card-wrapper">
                <Row gutter={24}>
                  <Col span={12}>
                    <Card>
                      <div style={{ display: "flex" }}>
                        <img src="man.png" style={{ borderRadius: "50%" }} />
                        <div style={{ marginTop: "30px" }}>
                          <h
                            style={{
                              font: "20px proximanova-bold",
                              color: "#444444",
                            }}
                          >
                            &nbsp;&nbsp;Rani
                          </h>
                          <br />
                          <h level={5}>
                            &nbsp;&nbsp;Jaipur National University
                            <br />
                          </h>
                          <br />
                          &nbsp;&nbsp; <Rate allowHalf defaultValue={2.5} />
                        </div>
                      </div>
                      <p>
                        As I have a Bachelor's degree in Mechanical Engineering,
                        everything about Digital Marketing was new for me. But
                        after the training, I have started writing SEO-friendly
                        blogs on my own website!
                      </p>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <div style={{ display: "flex" }}>
                        <img src="umesh.png" style={{ borderRadius: "50%" }} />
                        <div style={{ marginTop: "30px" }}>
                          <h
                            style={{
                              font: "20px proximanova-bold",
                              color: "#444444",
                            }}
                          >
                            &nbsp;&nbsp;Umesh
                          </h>
                          <br />
                          <h level={5}>&nbsp;&nbsp;Indiral Open University</h>
                          <br />
                          &nbsp;&nbsp; <Rate allowHalf defaultValue={3.5} />
                        </div>
                      </div>
                      <p>
                        In the 6 weeks of the Digital Marketing training,
                        <br /> I learnt a lot. The videos, modules, and
                        assignments were extremely informative.
                        <br /> The module tests are challenging, and test the
                        knowledge you gain during the course
                      </p>{" "}
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <div className="site-card-wrapper">
                <Row gutter={24}>
                  <Col span={12}>
                    <Card>
                      <div style={{ display: "flex" }}>
                        <img src="ashmit.png" style={{ borderRadius: "50%" }} />
                        <div style={{ marginTop: "30px" }}>
                          <h
                            style={{
                              font: "20px proximanova-bold",
                              color: "#444444",
                            }}
                          >
                            &nbsp;&nbsp;Ashmit
                          </h>
                          <br />
                          <h level={5}>
                            &nbsp;&nbsp;Anugrah Narayan College
                            <br />
                          </h>
                          <br />
                          &nbsp;&nbsp; <Rate allowHalf defaultValue={2.5} />
                        </div>
                      </div>
                      <p>
                        This training is packed with lots of digital marketing
                        essential tools, tips & techniques which one has to know
                        before stepping into the world of digital marketing.
                      </p>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <div style={{ display: "flex" }}>
                        <img src="ashish.png" style={{ borderRadius: "50%" }} />
                        <div style={{ marginTop: "30px" }}>
                          <h
                            style={{
                              font: "20px proximanova-bold",
                              color: "#444444",
                            }}
                          >
                            &nbsp;&nbsp;Ajay
                          </h>
                          <br />
                          <h level={5}>&nbsp;&nbsp;Mountollege </h>
                          <br />
                          &nbsp;&nbsp; <Rate allowHalf defaultValue={3.5} />
                        </div>
                      </div>

                      <p>
                        This training program offered by Internshala is the
                        first step for a beginner to get into the digital world
                        of today. It is divided into different topics which are
                        extremely easy to understand and apply in real life.
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}
