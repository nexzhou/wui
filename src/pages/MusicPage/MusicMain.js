import React from "react";
import { Row, Col, Icon, Slider } from "antd";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function HtmlLyrics() {
  return (
    <p style={{ fontSize: "12x", lineHeight: "24px" }}>
      beautiful girls all over the world 世界上有那么多的漂亮女孩
      <br />
      i could be chasing but my time would be wasted 我可以去追她们
      不过那只会浪费我的时间
      <br />
      they got nothing on you baby 她们都比不上你,宝贝
      <br />
      nothing on you baby 没人比得上你,宝贝
      <br />
      they might say hi 她们会说嗨
      <br />
      and i might say hey 我也会说嘿
      <br />
      but you should't worried about what they say 但是你不用担心她们说的
      <br />
      cause they got nothing on you,baby 因为她们哪儿及得上你，宝贝
      <br />
      nothing on you,baby 及不上你，宝贝
    </p>
  );
}

function HtmlSonglist() {
  return (
    <ul>
      <li>1 talking to the moon</li>
      <li>2 nothing on you</li>
      <li>3 流年</li>
      <li>4 没法哦</li>
      <li>5 一起学猫叫</li>
    </ul>
  );
}

function HtmlMusicFavorite() {
  return <div>my favorite</div>;
}

export default class MusicMain extends React.Component {
  render() {
    return (
      <div className="layout-main music-content">
        <Row>
          <Col offset={4} span={16}>
            <Row style={{ marginTop: "32px" }}>
              <Col span={24}>
                <h2 className="music-header">Music</h2>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ minHeight: "50vh" }}>
                <Switch>
                  <Route exact path="/music" component={HtmlLyrics} />
                  <Route path="/music/list" component={HtmlSonglist} />
                  <Route path="/music/favorite" component={HtmlMusicFavorite} />
                </Switch>
              </Col>
            </Row>
            <Row>
              <Col span={1}>0:00</Col>
              <Col span={22}>
                <Slider />
              </Col>
              <Col span={1}>0:00</Col>
            </Row>
            <Row>
              <Col span={4} style={{ textAlign: "center" }}>
                <Icon type="bell" style={{ fontSize: "50px" }} />
              </Col>
              <Col span={14}>
                <Row>
                  <Col span={24}>Nothing On You</Col>
                  <Col span={24}>Bruno Mars</Col>
                </Row>
              </Col>
            </Row>
            <Row className="play-bar">
              <Col span={4}>
                <Icon type="delete" />
              </Col>
              <Col span={4} style={{ fontSize: "36px" }}>
                <Icon type="fast-backward" />
              </Col>
              <Col span={8} style={{ fontSize: "48px" }}>
                <Icon type="play-circle" />
              </Col>
              <Col span={4}>
                <Icon type="fast-forward" style={{ fontSize: "36px" }} />
              </Col>
              <Col span={4}>
                <Icon type="menu" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
