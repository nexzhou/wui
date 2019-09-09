import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

export default class MyHeader extends React.Component {
  render() {
    return (
      <div className="layout-header">
        <Row className="header-wrapper">
          <Col className="header-drive" span={12}>
            <Link className="header-item" to="/">
              <Icon type="home" />
            </Link>
            <Link className="header-item" to="/home">
              <Icon type="rollback" />
            </Link>
            <Icon className="header-item" type="car" />
            <Icon className="header-item" type="key" />
          </Col>
          <Col className="header-time" span={1}>
            10:45
          </Col>
          <Col className="header-info" span={11}>
            <Icon className="header-item" type="bell" />
            <Icon className="header-item" type="compass" />
            <Icon className="header-item" type="wifi" />
            <Icon className="header-item" type="align-left" rotate={270} />
          </Col>
        </Row>
      </div>
    );
  }
}
