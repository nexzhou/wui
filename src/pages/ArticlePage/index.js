import React from "react";
import { Switch, Route } from "react-router-dom";

import MyNav from "../../parts/MyNav";
import ArticleMain from "./ArticleMain";

import "./index.css";

const defaultTabs = [
  { path: "/article", icon: "form" },
  { path: "/article/list", icon: "ordered-list" },
  { path: "/article/new", icon: "plus-square" },
  { path: "/article/favorite", icon: "heart" }
];

export default class ArticlePage extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <MyNav tabs={defaultTabs} />
        <Switch>
          <Route
            path="/article/new"
            render={() => <div className="layout-main">dfaf</div>}
          />
          <Route
            path="/article/favorite"
            render={() => <div className="layout-main">favorite</div>}
          />
          <Route exact path="/article" component={ArticleMain} />
        </Switch>
      </div>
    );
  }
}
