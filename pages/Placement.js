import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Typography } from 'antd';
import { Card, Col, Row } from 'antd';
import { Image } from 'antd';


const { Title } = Typography;
const { Text } = Typography;

export default function Placement() {
  return (
    <div>
      <Nav />

      <div style={{ marginTop: "60px", marginLeft: "450px" }}>
        {" "}
        <Text style={{ font: "28px proximanova-bold", color: "#444444" }}>
          what placement assistant will you receive?
          </Text>{" "}
      </div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <div style={{ display: "flex" }}>
              {" "}
              <Image
                style={{ marginLeft: "40px" }}
                width={200}
                src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_1.png"
              />
              <h
                style={{
                  font: "20px proximanova-bold",
                  marginLeft: "",
                  marginTop: "80px",
                }}
              >
                Free{" "}
                <b>
                  Placement <br />
                    Preparation Training
                  </b>
              </h>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ display: "flex" }}>
              {" "}
              <Image
                style={{ marginLeft: "40px" }}
                width={200}
                src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_2.png"
              />
              <h
                style={{
                  font: "20px proximanova-bold",
                  marginLeft: "",
                  marginTop: "80px",
                }}
              >
                Access to{" "}
                <b>
                  accurated <br /> internship & jobs
                  </b>{" "}
              </h>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ display: "flex" }}>
              {" "}
              <Image
                style={{ marginRight: "40px" }}
                width={500}
                src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_3.png"
              />
              <h
                style={{
                  font: "20px proximanova-bold",
                  marginLeft: "",
                  marginTop: "80px",
                }}
              >
                Top performers will be{" "}
                <b>highlighted in their internship & job applications</b> on
                  Internshala
                </h>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          backgroundColor: "#FCF5FF",
          width: "100%",
          marginTop: "100px",
        }}
      >
        <Text
          style={{
            marginLeft: "490px",
            font: "28px proximanova-bold",
            color: "#333333",
            Top: "420px",
            marginTop: "100px",
            marginBottom: "300px",
          }}
        >
          Why we learn digital marketing?
          </Text>

        <div
          className="site-card-wrapper"
          style={{ backgroundColor: "#FCF5FF" }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <div style={{ display: "flex" }}>
                <Image
                  width={600}
                  src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/take_your_idea_to_millions.png"
                />
                <h
                  style={{
                    font: "20px proximanova-bold",
                    marginLeft: "",
                    marginTop: "90px",
                  }}
                >
                  <b>Take your idea to millions</b>
                  <br />
                    Whether you have an app, blog, YouTube channel, or want to
                    manage publicity for your college fest; !
                  </h>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ display: "flex" }}>
                <Image
                  width={700}
                  src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/be_in_demand.png"
                />
                <h
                  style={{
                    font: "20px proximanova-bold",
                    marginLeft: "",
                    marginTop: "80px",
                  }}
                >
                  <b>Be in demand</b>
                  <br />
                    Digital marketing is one of the hottest career options these
                    days with thousands of internships and jobs being added
                    everyday..
                  </h>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ display: "flex" }}>
                <Image
                  width={600}
                  src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/channel_your_creativity.png"
                />
                <h
                  style={{
                    font: "20px proximanova-bold",
                    marginLeft: "",
                    marginTop: "80px",
                  }}
                >
                  <b>Channel your creativity</b>
                  <br />
                    Whether you like numbers, or wordplay, or designing things;
                    digital marketing offers a heady mix of creativity for
                    everyone.
                  </h>
              </div>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  )
}
