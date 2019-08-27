import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

export default class MyHeader extends React.Component {
  render() {
    return (
      <div className="layout-header">
        <div className="header-drive">
          <Link to="/home">
            <Icon type="home" />
          </Link>
          <span className="drive-tool">
            <Icon type="rollback" />
          </span>
        </div>
        <div className="header-content">10:21</div>
      </div>
    );
  }
}
