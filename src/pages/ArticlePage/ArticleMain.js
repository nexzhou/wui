import React from "react";
import { Row, Col, Icon, PageHeader, Tabs } from "antd";

const { TabPane } = Tabs;

export default class ArticleMain extends React.Component {
  render() {
    return (
      <div class="main-content article-content">
        <Row>
          <Col offset={4} span={16}>
            <Row className="article-tabs">
              <Tabs type="card" defaultActiveKey="1">
                <TabPane tab="推荐" key="1">
                  推荐1
                </TabPane>
                <TabPane tab="最新" key="2">
                  最新
                </TabPane>
              </Tabs>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
