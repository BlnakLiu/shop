import React, { Component } from "react";
import { Global, NavList, NavAside, NavCart } from "./navGlobalStyle";
import Cart from "../cart/cart.js";
import { connect } from "react-redux";
class NavGlobal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        { name: "在商城" },
        { name: "坚果 Pro" },
        { name: "Smartisan M1 / M1L" },
        { name: "Smartisan OS" },
        { name: "欢喜云" },
        { name: "应用下载" },
        { name: "官方论坛" }
      ],
      orderList: [
        { name: "我的订单", class: "order" },
        { name: "售后服务", class: "support" },
        { name: "我的优惠", class: "coupon" },
        { name: "账户资料", class: "information" },
        { name: "收货地址", class: "address" },
        { name: "退出", class: "logout" }
      ],
      number: 0,
      CartisDisplay: false
    };
  }
  render() {
    return (
      <Global>
        <div className="container">
          <h1 className="nav-logo">
            <a></a>
          </h1>
          <NavAside>
            <li className="nav-user">
              <a>个人中心</a>
              <div className="nav-user-wrapper">
                <div className="nav-user-list">
                  <dl className="nav-user-avatar">
                    <dd>
                      <span className="ng-scope"></span>
                    </dd>
                    <dt className="ng-binding"></dt>
                  </dl>
                  <ul>
                    {this.state.orderList.map((L, index) => (
                      <li key={index} className={L.class}>
                        <a>{L.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <NavCart
              onMouseOver={this.props.moveDisplay.bind(this)}
              onMouseOut={this.props.outDisplay.bind(this)}
            >
              <a>购物车</a>
              <span
                className={
                  this.props.CartNum > 0
                    ? "cart-empty-num cart-num"
                    : "cart-empty-num"
                }
              >
                <i>{this.props.CartNum}</i>
              </span>
              <Cart></Cart>
            </NavCart>
          </NavAside>
          <NavList>
            {this.state.navList.map((L, index) => (
              <li key={index}>
                <a>{L.name}</a>
              </li>
            ))}
          </NavList>
        </div>
      </Global>
    );
  }
}
const mapToPropState = state => {
  return {
    CartNum: state.CartNum,
    CartisDisplay: state.CartisDisplay
  };
};

const mapToPropDispatch = dispatch => {
  return {
    moveDisplay() {
      const action = {
        type: "moveDisplay"
      };
      dispatch(action);
    },
    outDisplay() {
      const action = {
        type: "outDisplay"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(NavGlobal);
