import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";

import MessageBox from "./MessageBox";

function MMain() {
  return <div>dafff</div>;
}

export default class MessageMain extends React.Component {
  render() {
    return (
      <div className="layout-main main-message">
        <Row>
          <Col offset={4} span={16}>
            <Row className="">
              <Col span={24}>
                <h2>最新留言</h2>
              </Col>
              <Col span={24}>
                <MessageBox />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
