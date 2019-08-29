import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "./home.css";

const AppNames = [
  "taobao",
  "alipay-circle",
  "message",
  "wechat",
  "weibo",
  "zhihu",
  "qq",
  "audio",
  "camera",
  "picture",
  "weibo",
  "github",
  "camera",
  "picture",
  "weibo",
  "github",
  "camera",
  "weibo",
  "audio",
  "camera",
  "picture",
  "weibo",
  "audio",
  "github",
  "zhihu",
  "weibo"
];

const AppItems = AppNames.map((item, index) => (
  <Col className="app-col" span={6} key={index}>
    <Link className="app-item" to="/article">
      <Icon type={item} />
    </Link>
  </Col>
));

export default class HomeMain extends React.Component {
  render() {
    return (
      <div className="layout-main">
        <Row className="app-items" type="flex" justify="start">
          {AppItems}
        </Row>
      </div>
    );
  }
}
