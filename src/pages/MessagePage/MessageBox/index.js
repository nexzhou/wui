import React from "react";
import { Row, Col, Input, Icon, Button } from "antd";

import EditBox from "../EditBox";
import "./index.css";

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReply: true,
      replyInputtable: false,
      replyBtnText: "回复"
    };
  }

  static defaultProps = {};

  activateReply = () => {
    var inputtable = this.state.replyInputtable;
    var btnText = this.state.replyBtnText;

    if (inputtable === true) {
      inputtable = false;
      btnText = "回复";
    } else {
      inputtable = true;
      btnText = "收起";
    }

    this.setState({
      replyInputtable: inputtable,
      replyBtnText: btnText
    });
  };

  render() {
    return (
      <div className="message-box">
        <Row className="mere-wrapper message-wrapper">
          <Col span={2} className="mere-icon">
            <img
              className="img-responsive mere-img"
              src="http://douhy.com/ims/foto/fruit/j7.ico"
              height="36px"
              alt="icon"
            />
          </Col>
          <Col span={20} className="mere-main">
            <Row>
              <Col span={24} className="mere-time text-center col-xs-12">
                <time>10:33</time>
              </Col>
            </Row>
            <Row className="mere-content row">
              <Col span={24} className="col-xs-11">
                <span className="message-id hidden" style={{ display: "none" }}>
                  9
                </span>
                <span className="mere-text message-text tri-before">
                  给我刘爱公积金个计划的方垫付的的地空江涵霁晖开
                  快了环境老客户了方阿富汗撒谎奋达科技安徽打卡机啊哈卡看哈啊
                </span>
              </Col>
            </Row>
            <Row className="mere-info row">
              <Col span={24} className="col-xs-11">
                <span className="mere-email">xz@douhy.com</span>
                <span className="mere-ctrl mere-delete">删除</span>
                <span
                  className="mere-ctrl mere-reply"
                  onClick={this.activateReply}
                >
                  {this.state.replyBtnText}
                </span>
              </Col>
            </Row>
            {this.state.replyInputtable === true && (
              <Row>
                <Col span={24}>
                  <EditBox />
                </Col>
              </Row>
            )}
          </Col>
        </Row>
        {this.state.hasReply === true && (
          <Row className="reply-items">
            <Col span={24}>
              <Row className="row mere-wrapper reply-wrapper">
                <Col className="mere-main" offset={2} span={20}>
                  <Row>
                    <Col className="col-xs-12 text-center" span={24}>
                      <span className="mere-time">
                        <time>10:21</time>
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-xs-10 text-right mere-after" span={24}>
                      <div className="mere-content reply-content text-left">
                        <span
                          className="hidden reply-id"
                          style={{ display: "none" }}
                        >
                          2
                        </span>
                        <span className="mere-text reply-text tri-after">
                          回复回复给我刘爱的方垫
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-xs-12 text-right " span={24}>
                      <span className="mere-ctrl mere-delete reply-delete">
                        删除
                      </span>
                      <span className="mere-email">message@test.com</span>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-xs-1" span={2}>
                  <div className="mere-icon reply-icon">
                    <img
                      className="img-responsive mere-img"
                      src="http://www.douhy.com/foto/fruit/j16.ico"
                      height="36px"
                      alt="icon"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        <Row>
          <Col offset={2} span={20} className="mere-divider" />
        </Row>
      </div>
    );
  }
}
