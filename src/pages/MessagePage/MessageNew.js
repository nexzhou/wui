import React from "react";
import { Row, Col } from "antd";
import EditBox from "./EditBox";

export default class MessageNew extends React.Component {
  render() {
    return (
      <div className="layout-main main-message">
        <Row>
          <Col offset={4} span={16}>
            <Row>
              <Col span={24}>
                <EditBox />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
