import styled from "styled-components";

export const TableStyle = styled.div`
  .cart-group,
  .cart-items {
    border-top: 1px solid #ebebeb;
  }
  .cart-items {
    position: relative;
    height: 110px;
    padding-left: 29px;
    color: #666;
  }
  .cart-group:first-child,
  .cart-items:first-child {
    border-top: none;
  }
  .cart-items .items-choose,
  .cart-items .items-thumb,
  .cart-items .name {
    float: left;
  }
  .cart-items .items-thumb,
  .cart-items .items-thumb img {
    width: 78px;
    height: 78px;
    border-radius: 4px;
  }
  .cart-items .items-thumb {
    margin-top: 15px;
    border: 1px solid #ebebeb;
  }
  .cart-items .name {
    display: table;
    width: 420px;
    height: 100%;
    margin-left: 30px;
    line-height: 24px;
  }
  .cart-items .name-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .cart-items .name a {
    color: #333;
  }
  .cart-items .subtotal {
    float: right;
    display: table;
    width: 129px;
    height: 100%;
    padding-right: 29px;
    text-align: right;
    line-height: 24px;
    color: #333;
  }
  .cart-items .subtotal-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .cart-items .operation,
  .cart-items .select {
    overflow: hidden;
    float: right;
    width: 129px;
    padding-right: 29px;
    line-height: 110px;
    text-align: right;
    color: #333;
  }
  .cart-items .price,
  .cart-items .goods-num {
    overflow: hidden;
    float: right;
    width: 129px;
    padding-right: 25px;
    line-height: 110px;
    color: #333;
  }
  .cart-items .goods-num {
    width: 64px;
    padding: 0 60px 0 40px;
    text-align: center;
  }
  .cart-items .price {
    width: 120px;
  }
`;

export const DeatilStyle = styled.ul`
  .confirm-detail {
    padding: 0 30px 25px;
    border-top: 1px solid #d5d5d5;
  }
  .confirm-detail .info-title {
    height: 14px;
    padding: 30px 0 17px;
    line-height: 14px;
    font-weight: bolder;
    color: #333;
  }
  .confirm-detail .info-detail {
    line-height: 24px;
    color: #666;
  }
  .confirm-table-title {
    padding: 3px 0 0 30px;
    border-top: 1px solid #d5d5d5;
    line-height: 54px;
    font-weight: bolder;
    color: #000;
  }
  .confirm-table-title .num,
  .confirm-table-title .price,
  .confirm-table-title .subtotal {
    width: 175px;
    padding-right: 29px;
    text-align: right;
  }
`;

export const BoxStyle = styled.div`
  overflow: hidden;
  border: 1px solid #d1d1d1;
  border-color: rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 0 auto 60px;
  .title {
    height: 60px;
    padding: 0 10px 0 28px;
    background: linear-gradient(#fff, #f5f5f5);
    border-bottom: 1px solid #dcdcdc;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
    line-height: 60px;
    color: #646464;
    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #626262;
    }
  }
  .order-info {
    padding: 60px 0 55px;
    color: #333;
  }
  .order-info h3 {
    padding-bottom: 14px;
    line-height: 36px;
    text-align: center;
    font-size: 36px;
    color: #212121;
  }
  .order-info .payment-detail {
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #999;
  }
  .order-info .payment-detail span {
    font-weight: bolder;
    color: #de4037;
  }
  .order-info .payment-detail {
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #999;
  }
  .payment-checkout-panel {
    padding: 10px 10px 10px 0;
    line-height: 60px;
    background: #f9f9f9;
    border-top: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  .jianguo-blue-main-btn {
    background: linear-gradient(#6383c6, #4262af);
    box-shadow: none;
  }
  .blue-main-btn,
  .gray-main-btn,
  .jianguo-blue-main-btn {
    display: block;
    padding: 1px;
    margin: 0 auto;
    border-radius: 6px;
    background: linear-gradient(#5598c9, #2a6da2);
    text-align: center;
    text-shadow: rgba(255, 255, 255, 0.496094) 0 1px 0;
    font-family: "Microsoft Yahei", "微软雅黑", "PingFang SC", sans-serif;
    cursor: pointer;
    user-select: none;
  }
  .big-main-btn {
    float: right;
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin: 0 0 0 10px;
  }
  .jianguo-blue-main-btn a {
    display: block;
    border-radius: 6px;
    cursor: pointer;
    background: linear-gradient(#6f97e5, #527ed9);
    box-shadow: inset 0 1px 2px #7ea1e8;
    text-shadow: 0 -1px 0 #4f70b3;
    color: #fff;
    transition: all 0.3s ease;
  }
  .big-main-btn a {
    height: 40px;
    padding: 0;
    line-height: 40px;
    font-size: 16px;
  }
  .jianguo-blue-main-btn:hover a {
    box-shadow: inset 0 1px 1px #7696de, inset 0 0 2px #627dca,
      inset 0 -2px 3px #5a77c7, inset 0 0 100px rgba(48, 77, 147, 0.4);
  }
  .prices {
    float: right;
    line-height: 24px;
    padding: 6px 20px 6px 0;
    font-size: 14px;
  }
  .prices em {
    margin-left: 5px;
    font-size: 24px;
    color: #d44d44;
  }
`;

export const SucStyle = styled.div`
  .content {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
  }
  .page-order-payment {
    padding-top: 39px;
  }
  .page-order-payment .order-discount-line {
    padding: 22px 30px 53px;
    border-top: 1px solid #d5d5d5;
    line-height: 24px;
    text-align: right;
    font-size: 12px;
  }
  .page-order-payment .order-discount-line p:first-child {
    line-height: 32px;
    text-align: right;
    font-size: 14px;
    font-weight: bolder;
  }
  .is-pay {
    float: right;
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin: 0 0 0 10px;
    display: block;
    padding: 1px;
    text-align: center;
    font-size: 16px;
  }
`;
