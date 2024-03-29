import React from "react";
import MyNav from "../../parts/MyNav";
import MusicMain from "./MusicMain";

import "./index.css";

const defaultTabs = [
  { path: "/", icon: "customer-service" },
  { path: "/music/list", icon: "ordered-list" },
  { path: "/music/favorite", icon: "heart" },
  { path: "/", icon: "smile" }
];

export default class MusicPage extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <MyNav tabs={defaultTabs} />
        <MusicMain />
      </div>
    );
  }
}
