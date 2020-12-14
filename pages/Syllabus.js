import React from 'react'
import Nav from './Nav'
import { Collapse } from 'antd';

import { Typography } from 'antd';

const { Title } = Typography

const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    <ul>
      <li>.Creating a blog
    </li>
      <li>
        Creating a Google Analytics Account and linking to Blog account

    </li>
      <li>Implementing Google Analytics
</li>
      <li>GA Account Structure
</li>
      <li>Understanding Metrics
</li>
      <li>Standard Reports
</li>
    </ul>
  </p>
);
const text1 = (
  <ul>

    <li>Importance of a Search Engine?
  </li>
    <li>What is SEO?
</li>
    <li>Page Rank / Authority of a website
</li>
    <li>On Page SEO
</li>
    <li>Off Page SEO
</li>
    <li>Tools</li>
  </ul>
)
const text2 = (
  <ul>
    <li>Email Marketing</li>
  </ul>
)
const text3 = (
  <ul>
    <li>Inbound Marketing for B2B businesses
</li>
    <li>Buyer Persona

</li>
    <li>Content Marketing
</li>
  </ul>
)
const text4 = (
  <ul>
    <li>Advertising Fundamentals
</li>
    <li>Google AdWords Overview
</li>
    <li>Search Advertising
</li>
    <li>AdWords Auction
</li>
    <li>Display Advertising
</li>
    <li>YouTube Advertising
</li>
    <li>A/B Testing
</li>
  </ul>
)
const text5 = (
  <ul>
    <li>Overview
</li>
    <li>Targeting Mobile users
</li>
    <li>Driving App Installs
</li>
  </ul>
)
const text6 = (
  <ul>
    <li>Facebook Organic


<li></li>Facebook Paid
</li>
    <li>Twitter Marketing
</li>
    <li>LinkedIN Marketing
</li>
    <li>Quora, Pinterest & Google Plus
</li>
    <li>Social Listening & Online Reputation Management
</li>
    <li>Marketing Automation
</li>
  </ul>
)
export default function Syllabus() {
  return (
    <div>
      <Nav />
      <div style={{ width: '80%', height: '', margintop: '190px', marginLeft: '130px' }}>
        < h style={{ marginTop: '50px', marginLeft: '380px', justifyContent: 'center', font: '28px proximanova-bold', color: '#444444' }}>What will be the training syllabus?
</h>
        <div style={{ fontSize: '50px', margintop: '80px' }}>
          <Collapse bordered={false} defaultActiveKey={['1']}>
            <br /><br />
            <Panel style={{ font: '24px proximanova-bold', color: '#444444' }} header="Blogging And Web Analytics" key="1">
              <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text}</div>
            </Panel>
            <br /><br />

            <Panel style={{ font: '24px proximanova-bold', color: '#444444' }} header="Search Engine Optimisation
" key="2">
              <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text1}</div>
            </Panel>
            <br /><br />
            <Panel style={{ font: '24px proximanova-bold', color: '#444444' }} header="Email Marketing" key="3">
              <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text2}</div>
            </Panel>
            <br /><br />
            <Panel style={{ font: '24px proximanova-bold', color: '#444444' }} header="Inbound And Content Marketing" key="4">
              <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text3} </div>
            </Panel>
            <br /><br />
            <Panel style={{ font: '24px proximanova-bold', color: '#444444' }} header="Online Advertising - Search, Display and Video" key="5">
              <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text4}</div>
            </Panel>
            <br /><br />
            <Panel style={{ font: '24px proximanova-bold', color: '#444444' }} header="Mobile Marketing" key="6">
              <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text5}</div>
            </Panel>
            <br /><nr />
            <Panel style={{ font: '24px proximanova-bold', color: '#444444' }} header="Social Media Marketing - Platforms, ORM & Automation
" key="7">
              <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text6}</div>
            </Panel>
            <br /><br />
          </Collapse>
        </div>



      </div>
    </div>
  )
}
