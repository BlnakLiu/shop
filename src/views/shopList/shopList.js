import React, { Component } from "react";
import { ListStyle, CartMsgStyle, SubmitStyle } from "./shopListStyle.js";
import Head from "../head/head.js";
import { connect } from "react-redux";
class Submit extends Component {
  render() {
    return (
      <SubmitStyle>
        <div className="cart-bar-operation">
          <div>
            <div
              onClick={() => this.props.outChecke()}
              className="choose-all js-choose-all"
            >
              <span
                className={
                  this.props.isChecked && this.props.CartList.length
                    ? "checkbox-on blue-checkbox-new"
                    : "blue-checkbox-new"
                }
              >
                <a></a>
              </span>
              全选
            </div>
            <div
              className="delete-choose-goods"
              onClick={() => this.props.clearComplete()}
            >
              删除选中的商品
            </div>
          </div>
        </div>
        <div className="shipping">
          <div className="shipping-box">
            <div className="shipping-total shipping-num">
              <h4>
                已选择
                <i>{this.props.SmtNum}</i> 件商品
              </h4>
              <h5>
                共计
                <i>{this.props.CartNum}</i> 件商品
              </h5>
            </div>
            <div className="shipping-total shipping-price">
              <h4>
                应付总额：
                <span>￥</span>
                <i>{this.props.SmtPrice}</i>
              </h4>
              <h5 className="shipping-tips">应付总额不含运费</h5>
            </div>
          </div>
          <span
            className={
              this.props.six || this.props.isChecked
                ? "jianguo-blue-main-btn big-main-btn js-checkout"
                : "jianguo-blue-main-btn big-main-btn js-checkout disabled-btn"
            }
          >
            <a
              href={
                this.props.six || this.props.isChecked
                  ? `#/submit`
                  : "#/shoplist"
              }
            >
              现在结算
            </a>
          </span>
        </div>
      </SubmitStyle>
    );
  }
}

class CartMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MsgData: props.data
    };
  }
  render() {
    return (
      <CartMsgStyle>
        <div className="cart-items">
          <div className="items-choose">
            <span
              className={
                this.props.data.iscommodity
                  ? "checkbox-on blue-checkbox-new"
                  : "blue-checkbox-new"
              }
              onClick={() => this.props.moveCommoDity(this.props.data)}
            >
              <a></a>
            </span>
          </div>
          <div className="items-thumb">
            <img src={this.props.data.ali_image}></img>
            <a target="_blank"></a>
          </div>
          <div className="name hide-row">
            <div className="name-table">
              <a target="_blank">{this.props.data.sub_title}</a>
              <ul className="attribute">
                <li>{this.props.data.spec_json.show_name}</li>
              </ul>
            </div>
          </div>
          <div className="operation">
            <a
              className="items-delete-btn"
              onClick={() => this.props.deleteShop(this.props.data.id)}
            ></a>
          </div>
          <div className="subtotal">
            {this.props.data.price * this.props.data.n}
          </div>
          <div className="item-cols-num">
            <div className="select js-select-quantity">
              <span
                className="down"
                onClick={() => this.props.subNum(this.props.data)}
              >
                -
              </span>

              <span className="num">
                {this.props.data.n}
                <input type="text" />
              </span>
              <span
                className="up"
                onClick={() => this.props.addNum(this.props.data)}
              >
                +
              </span>
            </div>
          </div>
          <div className="price">¥ {this.props.data.price}</div>
        </div>
      </CartMsgStyle>
    );
  }
}

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Head></Head>
        <div id="main" className="hander-car">
          <div className="store-content">
            <ListStyle>
              <div className="title">
                <h2>购物清单</h2>
              </div>
              <div className="cart-inner">
                <div className="empty-label hide">
                  <h3>您的购物车中还没有商品</h3>
                  <a className="link">现在选购</a>
                </div>
                <div>
                  <div className="cart-table-title">
                    <span className="name">商品信息</span>
                    <span className="operation">操作</span>
                    <span className="subtotal">小计</span>
                    <span className="num">数量</span>
                    <span className="price">单价</span>
                  </div>
                  <div className="cart-table">
                    <ul className="cart-group">
                      {this.props.CartList.map(i => (
                        <CartMsg {...this.props} data={i} key={i.id}></CartMsg>
                      ))}
                    </ul>
                  </div>
                  <Submit {...this.props}></Submit>
                </div>
              </div>
            </ListStyle>
          </div>
        </div>
      </div>
    );
  }
}
const mapToPropState = state => {
  return {
    CartList: state.CartList,
    isChecked: state.isChecked,
    CartNum: state.CartNum,
    SmtPrice: state.SmtPrice,
    SmtNum: state.SmtNum,
    six: state.CartList.some(item => item.iscommodity)
  };
};

const mapToPropDispatch = dispatch => {
  return {
    addNum(data) {
      const action = {
        type: "addNum",
        cardList: data
      };
      dispatch(action);
    },
    subNum(data) {
      const action = {
        type: "subNum",
        cardList: data
      };
      dispatch(action);
    },
    moveCommoDity(data) {
      const action = {
        type: "moveCommoDity",
        cardList: data
      };
      dispatch(action);
    },
    deleteShop(id) {
      const action = {
        type: "deleteShop",
        id: id
      };
      dispatch(action);
    },
    outChecke() {
      const action = {
        type: "outChecke"
      };
      dispatch(action);
    },
    clearComplete() {
      const action = {
        type: "clearComplete"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(ShopList);
