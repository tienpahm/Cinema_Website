import React, {useState} from "react";
import {Tabs, Radio, Space} from "antd";

export default function HomeMenu() {
  const {TabPane} = Tabs;
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const changeTabPosition = (e) => {
    setState({tabPosition: e.target.value});
  };
  const {tabPosition} = state;
  return (
    <div>
      <Tabs tabPosition={tabPosition}>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/50"
              alt=""
              className="rounded-full"
            />
          }
          key="1">
          Content of Tab 1
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/50"
              alt=""
              className="rounded-full"
            />
          }
          key="2">
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/50"
              alt=""
              className="rounded-full"
            />
          }
          key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
