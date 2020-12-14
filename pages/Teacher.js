import React from 'react'
import Nav from './Nav';
import { Image, Card } from 'antd'
import { Typography } from 'antd';
import { Button, notification } from 'antd';

const { Title } = Typography;




export default function Teacher() {
  return (
    <div >
      <Nav />



      <Card>
        <div style={{ marginTop: "50px", marginLeft: "500px" }}>
          <img
            src="amitabh.png"
            style={{ borderRadius: "50%", width: "250px" }}
          />
        </div>
        <div style={{ backgroundColor: "#FCF5FF" }}>
          <Title style={{ marginLeft: "520px" }} level={3}>Abhishek sharma</Title>

          <Title
            level={4}
            style={{ marginLeft: "490px", backgroundcolor: "" }}
          >
            Founder, AMP Digital. Ex-Google
            </Title>
          <Title style={{ marginLeft: "485px" }} level={5}>
            Delhi School of Economics (1995), IIM Kozhikode (1999),
              <br /> 14+ years of experience working with companies like ICICI{" "}
            <br />
              Bank and Google.
            </Title>
        </div>
      </Card>

    </div>

  )
}
