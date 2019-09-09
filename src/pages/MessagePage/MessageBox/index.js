import React from "react";
import { Row, Col, Input, Icon, Button } from "antd";

import "./index.css";

const { TextArea } = Input;

export default class MessageBox extends React.Component {
  render() {
    return (
      <div className="message-box">
        <Row className="message-wrapper">
          <Col span={2} className="core-icon">
            <img
              className="img-responsive"
              src="http://douhy.com/ims/foto/fruit/j7.ico"
              height="28px"
              alt="icon"
            />
          </Col>
          <Col span={20} className="core-box">
            <Row>
              <Col span={24} className="core-time text-center col-xs-12">
                <time>10:33</time>
              </Col>
            </Row>
            <Row class="core-text row">
              <Col span={22} class="col-xs-11">
                <span className="comment-id hidden" style={{ display: "none" }}>
                  9
                </span>
                <span className="comment-content tri-before">
                  给我刘爱的方垫付的的地方 啊
                </span>
              </Col>
            </Row>
            <Row class="core-info row">
              <Col span={22} className="col-xs-11">
                <span className="core-email">xz@douhy.com</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="core-delete">删除</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="core-btn">回复</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
