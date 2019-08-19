import React from "react";
import { Icon, Row, Col, Form, Input, Checkbox, Button } from "antd";

import "antd/dist/antd.css";

export default class LoginMain extends React.Component {
  render() {
    return (
      <div className="main-content login-content">
        <Row>
          <Col offset={4} spne={16}>
            <Form onSubmit={null} className="login-form">
              <Form.Item>
      
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
         
              </Form.Item>
              <Form.Item>
             
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
            </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
