import React from "react";
import { Row, Col } from "antd";

import { MyHeader } from "../../parts";
import "./index.css";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <MyHeader />
        <div className="layout-main main-404">
          <Row>
            <Col offset={4} span={16}>
              <Row>
                <Col span={24}>oops, no page found !</Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
