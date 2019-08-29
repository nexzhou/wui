import React from "react";
import { Icon, Row, Col, Form, Input, Checkbox, Button, Avatar } from "antd";

import "antd/dist/antd.css";

export default class LoginMain extends React.Component {
  render() {
    return (
      <div className="layout-main login-content">
        <div className="form-wrapper">
          <Form className="login-form">
            <Avatar size="large" src="http://douhy.com/foto/yhy.ico" />
            <h2>豆嗨网</h2>
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
            <Form.Item>
              <Checkbox className="login-rm">Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
