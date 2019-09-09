import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "./home.css";

const AppList = [
  { name: "wechat", icon: "wechat", path: "/message", type: "link" },
  {
    name: "alipay-circle",
    icon: "alipay-circle",
    path: "/taobao",
    type: "link"
  },
  { name: "taobao", icon: "taobao", path: "/taobao", type: "link" },
  { name: "weibo", icon: "weibo", path: "/taobao", type: "link" },
  { name: "weibo", icon: "form", path: "/article", type: "link" },
  { name: "github", icon: "github", path: "/taobao", type: "link" }
];

const AppItems = AppList.map((app, index) => (
  <Col className="app-col" span={6} key={index}>
    <Link className="app-item" to={app.path}>
      <Icon type={app.icon} />
    </Link>
  </Col>
));

export default class HomeMain extends React.Component {
  render() {
    return (
      <div className="layout-main main-home">
        <Row className="app-items" type="flex" justify="start">
          {AppItems}
        </Row>
      </div>
    );
  }
}
