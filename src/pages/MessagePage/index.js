import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Icon } from "antd";

import { MyNav } from "../../parts";
import MessageMain from "./MessageMain";
import EditBox from "./EditBox";
import MessageBox from "./MessageBox";

import "./message.css";
import MessageNew from "./MessageNew";

const defaultTabs = [
  { path: "/message", icon: "wechat" },
  { path: "/message/list", icon: "team" },
  { path: "/message/new", icon: "plus-square" }
];

export default class MessagePage extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <MyNav tabs={defaultTabs} />
        <Switch>
          <Route path="/message/new" component={MessageNew} />
          <Route path="/message/list" component={MessageNew} />
          <Route path="/message" component={MessageMain} />
        </Switch>
      </div>
    );
  }
}
