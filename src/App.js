import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import MusicPage from "./pages/MusicPage";
import UserPage from "./pages/UserPage";
import MessagePage from "./pages/MessagePage";
import NotFoundPage from "./pages/404";
import { MyHeader } from "./parts";

import "./app.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MyHeader />
          <Switch>
            <Route path="/article" component={ArticlePage} />
            <Route path="/music" component={MusicPage} />
            <Route path="/message" component={MessagePage} />
            <Route path="/user" component={UserPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
