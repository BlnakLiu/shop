import React, { Component } from "react";
import { CartStyle } from "./cartStyle.js";
import { connect } from "react-redux";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartList: []
    };
  }
  render() {
    return (
      <CartStyle
        className={
          this.props.CartisDisplay ? "nav-cart-wrapper" : "nav-cart-wrapperNone"
        }
      >
        <div className="nav-cart-list">
          {this.props.CartList.length === 0 ? (
            <div className="empty">
              <h3>购物车为空</h3>
              <p>您还没有选购任何商品，现在前往商城选购吧!</p>
            </div>
          ) : (
            <div className="full">
              <div className="nav-cart-items">
                <ul>
                  {this.props.CartList.map((c, cindex) => (
                    <li key={cindex} className="content">
                      <div className="cart-item js-cart-item cart-item-sell">
                        <div className="cart-item-inner">
                          <div className="item-thumb">
                            <img src={c.ali_image} />
                          </div>
                          <div className="item-desc">
                            <div className="cart-cell">
                              <h4>
                                <a>{c.title}</a>
                              </h4>
                              <p className="attrs">
                                <span>{c.spec_json.show_name}</span>
                              </p>
                              <h6>
                                <span className="price-icon">¥</span>
                                <span className="price-num">{c.price}</span>
                                <span className="item-num">x {c.n}</span>
                              </h6>
                            </div>
                          </div>
                          <div
                            className="del-btn"
                            onClick={() => this.props.deleteShop(c.id)}
                          >
                            删除
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-cart-total">
                <p>
                  共{" "}
                  <strong className="ng-binding">{this.props.CartNum}</strong>{" "}
                  件商品
                </p>
                <h5>
                  合计：<span className="price-icon">¥</span>
                  <span
                    className="price-num ng-binding"
                    ng-bind="cartMenu.totalPrice"
                  >
                    {this.props.CartPrice.toFixed(2)}
                  </span>
                </h5>
                <h6>
                  <a className="nav-cart-btn" href={"#/shoplist"}>
                    去购物车
                  </a>
                </h6>
              </div>
            </div>
          )}
        </div>
      </CartStyle>
    );
  }
}

const mapToPropState = state => {
  return {
    CartList: state.CartList,
    CartNum: state.CartNum,
    CartPrice: state.CartPrice,
    CartisDisplay: state.CartisDisplay
  };
};

const mapToPropDispatch = dispatch => {
  return {
    deleteShop(id) {
      const action = {
        type: "deleteShop",
        id: id
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(Cart);
