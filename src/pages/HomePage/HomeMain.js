import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
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
  "picture",
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
  <Col className="app-item" span={6}>
    <Link to="/article">
      <Icon type={item} />
    </Link>
  </Col>
));

export default class HomeMain extends React.Component {
  render() {
    return (
      <div className="main-layout app-list">
        <Row type="flex" justify="start">
          {AppItems}
        </Row>
      </div>
    );
  }
}
