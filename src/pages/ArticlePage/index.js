import React from "react";

import MyNav from "../../parts/MyNav";
import ArticleMain from "./ArticleMain";

import "./index.css";

const defaultTabs = [
  { path: "/", icon: "rollback" },
  { path: "/", icon: "home" },
  { path: "/article/list", icon: "ordered-list" },
  { path: "/article/favorite", icon: "heart" }
];

export default class ArticlePage extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        <MyNav tabs={defaultTabs} />
        <ArticleMain />
      </div>
    );
  }
}
