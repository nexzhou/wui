import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

// import "./MyNav.css";

// const defaultTabs = [
//   { path: "/", icon: "home" }
// ];

export default class MyNav extends React.Component {
  // static defaultProps = {
  //   tabs: { defaultTabs }
  // };

  render() {
    let HtmlTabs = null;
    let ht = parseInt(92 / this.props.tabs.length, 0);

    let cssTabs = {
      fontSize: "36px",
      width: "100%",
      height: ht + "vh",
      display: "flex",
      alignItems: "center",
      textAlign: "center"
    };
    HtmlTabs = this.props.tabs.map((tab, index) => (
      <li key={index} style={cssTabs}>
        <Link to={tab.path} style={{ width: "100%" }}>
          <Icon type={tab.icon} />
        </Link>
      </li>
    ));

    return <ul className="layout-nav nav-items">{HtmlTabs}</ul>;
  }
}
