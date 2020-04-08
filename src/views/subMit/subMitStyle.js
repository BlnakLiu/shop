import styled from "styled-components";

export const CmdListStyle = styled.div`
  .gray-sub-title {
    height: 38px;
    padding: 0 24px;
    background: #eee;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    line-height: 38px;
    font-size: 12px;
    color: #666;
  }
  .ui-goods-cart .cart-table-title {
    padding: 0 0 0 29px;
    border-top: none;
    font-size: 12px;
  }
  .ui-goods-cart .cart-table-title span {
    float: right;
    text-align: center;
  }
  .ui-goods-cart .cart-table-title .name {
    float: left;
    text-align: left;
  }
  .ui-goods-cart .cart-table-title .num,
  .ui-goods-cart .cart-table-title .operation,
  .ui-goods-cart .cart-table-title .price,
  .ui-goods-cart .cart-table-title .subtotal {
    width: 130px;
    padding-right: 29px;
    text-align: right;
  }
  .ui-goods-cart .cart-table-title .num {
    width: 132px;
  }
  .ui-goods-cart .cart-table-title .price {
    width: 120px;
  }
  .ui-goods-cart .cart-group,
  .ui-goods-cart .cart-items {
    border-top: 1px solid #ebebeb;
  }
  .ui-goods-cart .cart-items {
    position: relative;
    height: 110px;
    padding-left: 29px;
    color: #666;
  }
  .ui-goods-cart .cart-group:first-child,
  .ui-goods-cart .cart-items:first-child {
    border-top: none;
  }
  .ui-goods-cart .cart-items .items-choose,
  .ui-goods-cart .cart-items .items-thumb,
  .ui-goods-cart .cart-items .name {
    float: left;
  }
  .ui-goods-cart .cart-items .items-thumb,
  .ui-goods-cart .cart-items .items-thumb img {
    width: 78px;
    height: 78px;
    border-radius: 4px;
  }
  .ui-goods-cart .cart-items .items-thumb {
    margin-top: 15px;
    border: 1px solid #ebebeb;
  }
  .ui-goods-cart .cart-items .name {
    display: table;
    width: 420px;
    height: 100%;
    margin-left: 30px;
    line-height: 24px;
  }
  .ui-goods-cart .cart-items .name-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .ui-goods-cart .cart-items .name a {
    color: #333;
  }
  .ui-goods-cart .cart-items .subtotal {
    float: right;
    display: table;
    width: 129px;
    height: 100%;
    padding-right: 29px;
    text-align: right;
    line-height: 24px;
    color: #333;
  }
  .ui-goods-cart .cart-items .subtotal-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .ui-goods-cart .cart-items .goods-num,
  .ui-goods-cart .cart-items .operation,
  .ui-goods-cart .cart-items .price,
  .ui-goods-cart .cart-items .select {
    overflow: hidden;
    float: right;
    width: 129px;
    padding-right: 29px;
    line-height: 110px;
    text-align: right;
    color: #333;
  }
  .ui-goods-cart .cart-items .goods-num {
    width: 64px;
    padding: 0 9px 0 90px;
    text-align: center;
  }
  .ui-goods-cart .cart-items .price {
    width: 120px;
  }
`;

export const InvoiceStyle = styled.div`
  .invoice-box {
    padding: 22px 29px 29px 28px;
  }
  .invoice-box .invoice-detail {
    position: relative;
    height: 36px;
    line-height: 36px;
    color: #666;
  }
  .invoice-box .radio-box {
    position: absolute;
    left: 65px;
    top: 0;
    padding: 0;
    margin: 0;
  }
  .invoice-box .radio-box > label {
    margin-right: 5px;
  }
  .blue-radio {
    overflow: hidden;
    display: inline-block;
    position: relative;
    top: 2px;
    width: 10px;
    height: 10px;
    padding: 4px;
    background: #f9f9f9;
    background: linear-gradient(#f5f6f6, #fdfdfd);
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) inset;
    cursor: pointer;
  }
  .invoice-box .blue-radio {
    top: 4px;
    margin: 0 3px 0 6px;
  }
  .blue-radio-on a,
  .choose-radio-on .blue-radio a {
    overflow: hidden;
    display: block;
    width: 8px;
    height: 8px;
    background: #6c94f3;
    background: linear-gradient(#749af4, #668ef2);
    border: 1px solid #5d81d9;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  .module-form-row .small-item {
    width: 180px;
    height: 36px;
    border-radius: 4px;
    line-height: 36px;
    font-size: 14px;
  }
  .invoice-box .module-form-row {
    position: absolute;
    left: 215px;
    top: -1px;
    padding: 0;
    margin: 0;
  }
  .module-form-item-wrapper i {
    position: absolute;
    left: 15px;
    top: 0;
    font-style: normal;
    font-size: 16px;
    color: #bebebe;
  }
  .module-form-row .small-item i {
    font-size: 14px;
  }
  .invoice-box .module-form-item-wrapper {
    width: 338px;
    height: 34px;
    line-height: 34px;
  }
  .module-form-item-wrapper {
    display: block;
    position: relative;
    width: 372px;
    height: 46px;
    background-color: #fff;
    box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
      -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
    border: 1px solid #ccc;
    border-radius: 6px;
    line-height: 46px;
    font-size: 16px;
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
  .invoice-box .module-form-item-wrapper i {
    left: 11px;
  }
  .module-form-item-wrapper input {
    position: relative;
    z-index: 3;
    width: 290px;
    padding: 0 13px 0 15px;
    background: 0 0;
    border: none;
    font-size: 16px;
    color: #333;
  }
  .module-form-row .small-item input {
    padding-left: 15px;
    margin-top: 8px;
    width: 137px;
    font-size: 14px;
  }
  .invoice-box .module-form-item-wrapper input {
    width: 310px;
    padding-left: 11px;
  }
  .invoice-box .invoice-label {
    position: relative;
    padding-top: 25px;
    margin-top: 11px;
    border-top: 1px solid #e5e5e5;
    line-height: 12px;
    text-indent: 10px;
    font-size: 12px;
    color: #999;
  }
`;

export const SiteStyle = styled.div`
  .address-common-table .address-item-list {
    padding: 30px 13px 0;
  }
  .address-common-table .address-item-list li {
    position: relative;
    overflow: hidden;
    float: left;
    width: 276px;
    height: 158px;
    margin: 0 0 30px 16px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    background: #fafafa;
    line-height: 14px;
    text-align: left;
    word-wrap: break-word;
    word-break: normal;
    color: #626262;
    cursor: pointer;
    user-select: none;
  }
  .address-common-table .address-item-list li.selected-address-item {
    background: #fff;
    border-color: #6a8fe5;
  }
  .address-common-table .address-item-list .address-item {
    padding: 19px 14px 0 19px;
  }
  .address-common-table .name-section {
    height: 16px;
    padding-right: 20px;
    line-height: 16px;
    font-size: 16px;
    color: #666;
  }
  .address-common-table .mobile-section {
    height: 14px;
    padding-top: 17px;
    line-height: 14px;
    color: #999;
  }
  .address-common-table .detail-section {
    padding-top: 6px;
    line-height: 24px;
    color: #999;
  }
  .address-common-table .address-item-list li.selected-address-item:after {
    content: "√";
    display: block;
    position: absolute;
    right: 17px;
    top: 19px;
    font-size: 24px;
    color: #6a8fe5;
  }
  .address-common-table .add-address-item::before {
    content: "+";
    display: block;
    position: absolute;
    left: 50%;
    top: 54px;
    height: 24px;
    margin-left: -10px;
    line-height: 24px;
    text-align: center;
    font-size: 24px;
    color: #626262;
  }
  .address-common-table .add-address-item p {
    height: 14px;
    padding-top: 85px;
    line-height: 14px;
    text-align: center;
    color: #999;
  }
  .address-common-table .address-item-list li:hover {
    background: #f2f2f2;
  }
`;

export const MainStyle = styled.div`
  .content {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
  }
  .gray-box {
    overflow: hidden;
    border: 1px solid #d1d1d1;
    border-color: rgba(0, 0, 0, 0.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .checkout .gray-box,
  .gray-btn-menu-on:hover {
    background: #fff;
  }
  .checkout .gray-box {
    margin-bottom: 30px;
  }
  .checkout .gray-box .title {
    height: 60px;
    padding: 0 10px 0 28px;
    background: #f5f5f5;
    background: linear-gradient(#fff, #f5f5f5);
    border-bottom: 1px solid #dcdcdc;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
    line-height: 60px;
    color: #646464;
  }
  .checkout .gray-box .pre-title {
    position: relative;
    z-index: 2;
  }
  .checkout .gray-box .title h2 {
    font-size: 18px;
    font-weight: 400;
    color: #626262;
  }
  .checkout .gray-box .columns-title h2 {
    float: left;
  }
  .page-order-checkout .order-discount-line {
    padding: 21px 30px;
    border-top: 1px solid #ebebeb;
    line-height: 30px;
    text-align: right;
  }
  .page-order-checkout .order-discount-line span {
    float: right;
    width: 157px;
  }
  .page-order-checkout .last-payment {
    padding: 22px 29px 19px 30px;
    background: linear-gradient(#fcfcfc, #f5f5f5);
    border-top: 1px solid #dadada;
    box-shadow: -3px 0 8px rgba(0, 0, 0, 0.04);
  }
  .blue-main-btn,
  .gray-main-btn,
  .jianguo-blue-main-btn {
    display: block;
    padding: 1px;
    margin: 0 auto;
    border-radius: 6px;
    background: #015e94;
    background: linear-gradient(#5598c9, #2a6da2);
    text-align: center;
    text-shadow: rgba(255, 255, 255, 0.496094) 0 1px 0;
    font-family: "Microsoft Yahei", "微软雅黑", "PingFang SC", sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  .jianguo-blue-main-btn {
    background: #6383c6;
    background: linear-gradient(#6383c6, #4262af);
    box-shadow: none;
  }
  .checkout .big-main-btn {
    height: 46px;
  }
  .page-order-checkout .payment-blue-bt,
  .page-order-checkout .payment-blue-bt a {
    width: 136px;
    font-size: 16px;
  }
  .blue-main-btn a,
  .gray-main-btn a,
  .jianguo-blue-main-btn a {
    display: block;
    padding: 2px 0;
    border-radius: 6px;
  }
  .jianguo-blue-main-btn a {
    background: linear-gradient(#6f97e5, #527ed9);
    box-shadow: inset 0 1px 2px #7ea1e8;
    text-shadow: 0 -1px 0 #4f70b3;
    color: #fff;
    transition: all 0.3s ease;
  }
  .checkout .big-main-btn a {
    height: 42px;
    line-height: 42px;
    width: 136px;
    font-size: 16px;
  }
  .jianguo-blue-main-btn:hover a {
    box-shadow: inset 0 1px 1px #7696de, inset 0 0 2px #627dca,
      inset 0 -2px 3px #5a77c7, inset 0 0 100px rgba(48, 77, 147, 0.4);
  }
  .page-order-checkout .last-payment .prices {
    padding: 0 40px;
    line-height: 50px;
    font-size: 14px;
  }
  .page-order-checkout .last-payment .prices em {
    display: inline-block;
    position: relative;
    top: 3px;
    margin-top: -4px;
    font-size: 24px;
    color: #d44d44;
  }
  .verify-error {
    display: block;
    position: absolute;
    right: 6px;
    top: 4px;
    z-index: 5;
    padding: 0 9px;
    border-radius: 5px;
    line-height: 26px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    background: #e66157;
    opacity: 1;
  }
`;
