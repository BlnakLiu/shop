import React, { Component } from "react";
import Head from "../head/head.js";
import { connect } from "react-redux";
import { SucStyle, BoxStyle, DeatilStyle, TableStyle } from "./succeedStyle.js";

const GoodsTable = function(props) {
  return (
    <TableStyle>
      <ul className="cart-group js-cart-group">
        {props.SubList.map(i => (
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
    </TableStyle>
  );
};

const Detail = function(props) {
  return (
    <DeatilStyle>
      <li className="confirm-detail">
        <div className="info-title">订单编号</div>
        <p className="info-detail">170620718648448</p>
      </li>
      <li className="confirm-detail">
        <div className="info-title">收货信息</div>
        <p className="info-detail">姓名：{props.addressData[0].userName}</p>
        <p className="info-detail">联系电话：{props.addressData[0].tel}</p>
        <p className="info-detail">
          详细地址：{props.addressData[0].province}
          {props.addressData[0].city}
          {props.addressData[0].area}
          {props.addressData[0].address}
        </p>
      </li>
      <li className="confirm-detail">
        <div className="info-title">发票信息</div>
        <p className="info-detail">发票类型：电子发票</p>
        <p className="info-detail">
          发票抬头：{props.isInvoice ? "个人" : "单位"}
        </p>
        <p className="info-detail">抬头内容：{props.value}</p>
      </li>
      <li className="confirm-table-title clear">
        <span className="name fn-left">商品信息</span>
        <span className="subtotal fn-right">小计</span>
        <span className="num fn-right">数量</span>
        <span className="price fn-right">单价</span>
      </li>
    </DeatilStyle>
  );
};

const Box = function(props) {
  return (
    <BoxStyle>
      <div className="title">
        <h2>支付订单</h2>
      </div>
      <div className="box-inner order-info">
        <h3>提交订单成功</h3>
        <p className="payment-detail">
          请在
          <span>24 小时内</span>完成支付，超时订单将自动取消。
        </p>
        <p className="payment-detail">我们将在您完成支付后的 72 小时内发货</p>
      </div>
      <div className="box-inner payment-checkout-panel clear">
        <span className="jianguo-blue-main-btn big-main-btn js-payment-order">
          <a>现在支付</a>
        </span>
        <span className="prices">
          应付金额：
          <em>
            <span>¥</span>
            {props.SmtPrice}
          </em>
        </span>
      </div>
    </BoxStyle>
  );
};

class Succeed extends Component {
  componentDidMount() {
    console.log(this.props.addressData);
  }
  render() {
    return (
      <div>
        <Head></Head>
        <SucStyle id="main">
          <div className="content page-order-payment">
            <Box {...this.props} />
            <Detail {...this.props} />
            <GoodsTable {...this.props} />
            <div className="order-discount-line">
              <p>
                商品总计：
                <span>¥{this.props.SmtPrice}</span>
              </p>
              <p>
                运费：
                <span>+ ¥ 0.00</span>
              </p>
            </div>
          </div>
        </SucStyle>
      </div>
    );
  }
}
const mapToPropState = state => {
  return {
    SubList: state.CartList.filter(item => item.iscommodity),
    addressData: state.addressList.filter(item => item.default),
    SmtPrice: state.SmtPrice,
    value: state.value,
    isInvoice: state.isInvoice
  };
};

const mapToPropDispatch = dispatch => {
  return {};
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(Succeed);
