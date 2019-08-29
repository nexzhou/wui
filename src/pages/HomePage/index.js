import React from "react";
import MyNav from "../../parts/MyNav";
import MyHeader from "../../parts/MyHeader";

import HomeMain from "./HomeMain";

import "antd/dist/antd.css";
import "./home.css";

const homeTabs = [
  { path: "/user", icon: "user" },
  { path: "/message", icon: "message" },
  { path: "/music", icon: "customer-service" },
  { path: "/setting", icon: "setting" }
];

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <MyNav tabs={homeTabs} />
        <HomeMain />
        <MyHeader />
      </div>
    );
  }
}
