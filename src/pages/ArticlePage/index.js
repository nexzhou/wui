import React from "react";

import MyNav from "../../parts/MyNav";
import ArticleMain from "./ArticleMain";

const defaultTabs = [
  { path: "/", icon: "rollback" },
  { path: "/", icon: "home" },
  { path: "/music/list", icon: "ordered-list" },
  { path: "/music/favorite", icon: "heart" }
];

export default class ArticlePage extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        <MyNav tabs={defaultTabs} />
        <div>article</div>
      </div>
    );
  }
}
