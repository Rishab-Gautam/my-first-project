import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Card, Col, Row } from 'antd';
import { Image } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export default function Certificate() {
  return (
    <div >
      <Nav />

      <div style={{ marginTop: '50px' }}>
        <div
          className="site-card-wrapper"
          style={{ backgroundColor: "#FCF5FF", width: "100%" }}
        >
          <div style={{ paddingBottom: "50px" }}>
            <h
              style={{
                marginLeft: "400px",
                font: "28px proximanova-bold",
                color: "#333333",
                Top: "420px",
                marginTop: "50px",
              }}
              level={3}
            >
              <b>How will you get your certificate?</b>{" "}
            </h>
          </div>
          <Row gutter={24}>
            <Col span={12}>
              <div
                style={{
                  marginTop: "180px",
                  font: "16px proximanova-regular",
                  color: "#444444",
                  marginLeft: "320px",
                }}
              >
                <h>
                  {" "}
                  Take the final exam online to complete the Digital Marketing{" "}
                  <br /> Training after which you will be able to download your
                  certificate from Internshala Trainings
                </h>
                .
              </div>
            </Col>
            <Col span={12}>
              <Image width={400} src="certificatee.png" />
            </Col>
          </Row>
        </div>

      </div>
    </div>
  )
}
