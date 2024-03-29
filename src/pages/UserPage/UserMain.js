import React from "react";
import { Icon, Row, Col } from "antd";
import { Route, Switch } from "react-router-dom";
import { LoginMain } from "./LoginMain";

import "antd/dist/antd.css";


export default class UserMain extends React.Component {
  render() {
    return (
      <div className="layout-main user-content">
        <Row>
          <Col offset={4} span={16}>
            <Row>
              <Col span={24}>
                <h2 style={{ color: "#ffffff" }}>
                  <b>用户中心</b>
                </h2>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <Icon type="user" className="myicon" />
              </Col>
              <Col span={20}>
                <Row>
                  <Col span={24}>
                    <span>Duo Zhou</span>
                    <span>Yun Zhou</span>
                  </Col>
                  <Col span={24}>
                    <p>管理员</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={20}>设置密码</Col>
              <Col span={4}>
                <Icon type="right" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
