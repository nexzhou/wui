import React from "react";
import UserMain from "./UserMain";
import MyNav from "../../parts/MyNav";
import { Route, Switch } from "react-router-dom";
import LoginMain from "./LoginMain";

import "./index.css";

const defaultTabs = [
  { path: "/user/login", icon: "login" },
  { path: "/", icon: "logout" },
  { path: "/", icon: "home" },
  { path: "/", icon: "menu" }
];

export default class UserPage extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <MyNav tabs={defaultTabs} />
        <Switch>
          <Route exact path="/user" component={UserMain} />
          <Route path="/user/login" component={LoginMain} />
        </Switch>
      </div>
    );
  }
}
