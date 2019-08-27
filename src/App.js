import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import MusicPage from "./pages/MusicPage";
import UserPage from "./pages/UserPage";
import { MyHeader } from "./parts";

import "./app.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <Router>
          <Switch>
            <Route path="/article" component={ArticlePage} />
            <Route path="/music" component={MusicPage} />
            <Route path="/user" component={UserPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
