import React, { Component } from "react";
import Head from "../head/head.js";
import { connect } from "react-redux";
import {
  MainStyle,
  SiteStyle,
  InvoiceStyle,
  CmdListStyle
} from "./subMitStyle.js";
class CmdList extends Component {
  render() {
    return (
      <CmdListStyle className="gray-box">
        <div className="title pre-title">
          <h2>购物清单</h2>
        </div>
        <div className="box-inner ui-goods-cart">
          <div className="gray-sub-title cart-table-title">
            <span className="name">商品名称</span>
            <span className="subtotal">小计</span>
            <span className="num">数量</span>
            <span className="price">单价</span>
          </div>
          <div className="cart-table">
            <ul className="cart-group js-cart-group">
              {this.props.SubList.map(i => (
                <li key={i.id} className="cart-items">
                  <div className="items-thumb">
                    <a target="_blank">
                      <img src={i.ali_image} />
                    </a>
                  </div>
                  <div className="name hide-row">
                    <div className="name-cell">
                      <a target="_blank">
                        {i.title}(后壳用)（{i.spec_json.show_name}）
                      </a>
                    </div>
                  </div>
                  <div className="subtotal">
                    <div className="subtotal-cell">¥ {i.n * i.price}</div>
                  </div>
                  <div className="goods-num">{i.n}</div>
                  <div className="price">¥ {i.price}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CmdListStyle>
    );
  }
}

class Invoice extends Component {
  render() {
    return (
      <InvoiceStyle className="gray-box">
        <div className="title">
          <h2>发票信息</h2>
        </div>
        <div className="box-inner invoice-box js-invoice-box">
          <p className="invoice-detail">发票类型：电子发票</p>
          <div className="invoice-detail">
            发票抬头：
            <div className="radio-box">
              <label>
                <input type="radio" className="hide" />
                <span
                  onClick={() => this.props.oPisInvoice(false)}
                  className={
                    this.props.isInvoice
                      ? "blue-radio"
                      : "blue-radio blue-radio-on"
                  }
                >
                  <a></a>
                </span>{" "}
                个人
              </label>
              <label>
                <input type="radio" className="hide" />
                <span
                  onClick={() => this.props.oPisInvoice(true)}
                  className={
                    this.props.isInvoice
                      ? "blue-radio  blue-radio-on"
                      : "blue-radio "
                  }
                >
                  <a></a>
                </span>{" "}
                单位
              </label>
            </div>
            <div className="module-form-row form-item fn-hide js-invoice-title">
              <div className="module-form-item-wrapper no-icon small-item">
                {this.props.value.length > 0 ? "" : <i>请填写公司发票抬头</i>}
                <input
                  type="text"
                  onChange={this.props.setVlue.bind(this)}
                  className="js-verify"
                />
              </div>
            </div>
          </div>
          <p className="invoice-detail">发票内容：购买商品明细</p>
          <p className="invoice-label">
            电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。
          </p>
        </div>
      </InvoiceStyle>
    );
  }
}

class Stie extends Component {
  render() {
    return (
      <SiteStyle>
        <div className="gray-box clear">
          <div className="title columns-title pre-title">
            <h2>收货信息</h2>
          </div>
          <div className="box-inner js-checkout-address-panel">
            <div className="address-common-table js-multiple-address-panel">
              <ul className="address-item-list clear js-address-item-list">
                {this.props.addressList.map(res => (
                  <li
                    key={res.id}
                    className={
                      res.default
                        ? "js-choose-address selected-address-item"
                        : ""
                    }
                    onClick={() => this.props.clickDefault(res.id)}
                  >
                    <div className="address-item">
                      <div className="name-section">{res.userName}</div>
                      <div className="mobile-section">{res.tel}</div>
                      <div className="detail-section">
                        {res.province}
                        {res.city}
                        {res.area}
                        <br />
                        {res.address}
                      </div>
                    </div>
                  </li>
                ))}
                <li
                  onClick={() => this.props.moveDelivery()}
                  className="add-address-item js-add-address"
                  style={
                    this.props.addressList.length >= 3
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  <p>使用新地址</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SiteStyle>
    );
  }
}

class SubMit extends Component {
  render() {
    return (
      <div>
        <Head></Head>
        <MainStyle id="main">
          <div className="content page-order-checkout checkout">
            <Stie {...this.props}></Stie>
            <Invoice {...this.props}></Invoice>
            <CmdList {...this.props}></CmdList>
            <div className="box-inner">
              <div className="order-discount-line">
                <p>
                  商品总计：
                  <span>¥ {this.props.SmtPrice}</span>
                </p>
                <p>
                  运费：
                  <span>+ ¥ 0.00</span>
                </p>
                <p className="discount-line js-discount-cash">
                  <em>现金券</em>：<span>- 0</span>
                </p>
              </div>
            </div>
            <div className="box-inner">
              <div className="last-payment clear">
                <span className="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout">
                  <a href={"#/succeed"}>提交订单</a>
                </span>
                <span className="prices fn-right">
                  应付金额：
                  <em>¥ {this.props.SmtPrice}</em>
                </span>
              </div>
            </div>
          </div>
        </MainStyle>
      </div>
    );
  }
}

const mapToPropState = state => {
  return {
    SubList: state.CartList.filter(item => item.iscommodity),
    SmtPrice: state.SmtPrice,
    value: state.value,
    isInvoice: state.isInvoice,
    addressList: state.addressList
  };
};

const mapToPropDispatch = dispatch => {
  return {
    setVlue(e) {
      const action = {
        type: "setVlue",
        value: e.target.value
      };
      dispatch(action);
    },
    oPisInvoice(bool) {
      const action = {
        type: "oPisInvoice",
        boolean: bool
      };
      dispatch(action);
    },
    moveDelivery() {
      const action = {
        type: "moveDelivery"
      };
      dispatch(action);
    },
    clickDefault(ID) {
      const action = {
        type: "clickDefault",
        id: ID
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(SubMit);
