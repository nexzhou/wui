import React from "react";
import { Row, Col, Input, Icon, Button, Divider } from "antd";

import "./index.css";

const { TextArea } = Input;

export default class EditBox extends React.Component {
  render() {
    return (
      <div className="edit-box">
        <Row className="edit-wrapper">
          <Col className="edit-title" span={24}>
            <Icon type="wechat" /> <b>给我留言</b>
          </Col>
          <Col className="text-wrapper" span={24}>
            <TextArea
              className="text-edit"
              placeholder={"欢迎留言，文明灌水..."}
              row={4}
            />
          </Col>
          <Col className="edit-divider" span={24} />
        </Row>
        <Row className="edit-controls">
          <Col span={16}>
            <lable className="edit-hint" ref="#edit-input">
              your email:
            </lable>
            <Input className="edit-input" placeholder="email" />
          </Col>
          <Col offset={4} span={4}>
            <Button>send</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
