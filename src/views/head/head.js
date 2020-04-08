import React, { Component } from "react";
import NavGlobal from "./navGlobal.js";
import NavSub from "./navSub.js";
class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subList: [
        { name: "首页", class: "" },
        { name: "手机", class: "" },
        { name: "“足迹系列”手感膜", class: "" },
        { name: "官方配件", class: "active" },
        { name: "周边产品", class: "" },
        { name: "第三方配件", class: "" },
        { name: "全部商品", class: "" },
        { name: "服务", class: "" }
      ]
    };
  }
  render() {
    return (
      <div>
        <NavGlobal></NavGlobal>
        <NavSub {...this.state}></NavSub>
      </div>
    );
  }
}
export default Head;
