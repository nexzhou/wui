import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

// const defaultTabs = [
//   { path: "/", icon: "left-circle" },
//   { path: "/", icon: "home" },
//   { path: "/setting", icon: "pause" }
// ];

export default class UserNav extends React.Component {
  // static defaultProps = {
  //   tabs: { defaultTabs }
  // };

  render() {
    let HtmlTabs = null;
    HtmlTabs = this.props.tabs.map((tab, index) => (
      <li>
        <Link to={tab.path}>
          <Icon type={tab.icon} />
        </Link>
      </li>
    ));

    return <ul className="nav-left nav-items">{HtmlTabs}</ul>;
  }
}
