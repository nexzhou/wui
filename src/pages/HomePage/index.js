import React from "react";
import MyNav from "../../parts/MyNav";
import HomeMain from "./HomeMain";

import "antd/dist/antd.css";
import "./home.css";

const homeTabs = [
  { path: "/user", icon: "user" },
  { path: "/", icon: "home" },
  { path: "/music", icon: "customer-service" },
  { path: "/setting", icon: "setting" }
];

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        <MyNav tabs={homeTabs} />
        <HomeMain />
      </div>
    );
  }
}
