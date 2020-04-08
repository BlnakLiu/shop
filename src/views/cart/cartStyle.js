import styled from "styled-components";
import account from "../../assets/img/account-icon.png";
import cartImg from "../../assets/img/cart-empty.png";

export const CartStyle = styled.div`
  position: absolute;
  right: 0;
  padding-top: 18px;
  top: 0px;
  z-index: 30;
  width: 360px;
  :before {
    position: absolute;
    content: " ";
    background: url(${account}) no-repeat -49px -43px;
    -webkit-background-size: 240px 107px;
    background-size: 240px 107px;
    width: 20px;
    height: 8px;
    right: 34px;
    top: 10px;
    z-index: 11;
  }
  .nav-cart-list {
    position: relative;
    z-index: 10;
    background: #fff;
    border: 0 solid rgba(255, 255, 255, 0.01);
    border-radius: 8px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 20px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    .empty {
      overflow: hidden;
      height: 134px;
      padding-top: 180px;
      background: url(${cartImg}) center 90px no-repeat;
      background-size: auto 62px;
      text-align: center;
      h3 {
        font-size: 18px;
        color: #333;
        margin-bottom: 7px;
      }
      p {
        font-size: 12px;
        color: #bcbcbc;
      }
    }
  }
  .nav-cart-list .full {
    border-radius: 8px;
    overflow: hidden;
  }

  .nav-cart-list .nav-cart-items {
    max-height: 665px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .nav-cart-list .cart-item {
    height: 120px;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid #f0f0f0;
  }

  .nav-cart-list .cart-item:first-child {
    border-top: none;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }

  .nav-cart-list .cart-item-inner {
    height: 80px;
    padding: 20px;
    position: relative;
  }

  .nav-cart-list .item-thumb {
    position: relative;
    float: left;
    width: 80px;
    height: 80px;
    border-radius: 3px;
  }

  .nav-cart-list .item-thumb:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    border: 1px solid #f0f0f0;
    border: 0 solid transparent;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
  }

  .nav-cart-list .item-thumb img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 3px;
    overflow: hidden;
  }

  .nav-cart-list .item-desc {
    margin-left: 98px;
    display: table;
    width: 205px;
    height: 80px;
  }

  .nav-cart-list .cart-cell {
    display: table-cell;
    vertical-align: middle;
  }

  .nav-cart-list .item-desc h4,
  .nav-cart-list .item-desc h4 a {
    color: #000;
  }

  .nav-cart-list .item-desc h4 {
    width: 185px;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
  }

  .nav-cart-list .item-desc .attrs {
    font-size: 0;
  }

  .nav-cart-list .item-desc .attrs span {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    font-size: 14px;
    line-height: 14px;
    color: #999;
  }

  .nav-cart-list .item-desc .attrs span:last-child {
    margin-right: 0;
  }

  .nav-cart-list .item-desc h6 {
    color: #cacaca;
    font-size: 12px;
    line-height: 14px;
    margin-top: 20px;
  }

  .nav-cart-list .del-btn {
    cursor: pointer;
    display: none;
    overflow: hidden;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -11px;
    background: url(${account}) -50px -60px no-repeat;
    background-size: 240px 107px;
    text-indent: -9999em;
  }

  .nav-cart-list .cart-item:hover .del-btn {
    display: block;
  }

  .nav-cart-list .del-btn:hover {
    background-position: -75px -60px;
  }

  .nav-cart-list .nav-cart-total {
    position: relative;
    padding: 20px;
    height: 40px;
    background: #fafafa;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 8px 8px;
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5),
      0 -3px 8px rgba(0, 0, 0, 0.04);
    background: linear-gradient(#fafafa, #f5f5f5);
  }

  .nav-cart-list .nav-cart-total p {
    margin-bottom: 4px;
    line-height: 16px;
    font-size: 12px;
    color: #c1c1c1;
  }

  .nav-cart-list .nav-cart-total h5 {
    line-height: 20px;
    font-size: 14px;
    color: #6f6f6f;
  }

  .nav-cart-list .nav-cart-total h5 span {
    font-size: 18px;
    color: #de4037;
    display: inline-block;
    font-weight: 700;
  }

  .nav-cart-list .nav-cart-total h5 span:first-child {
    font-size: 12px;
    margin-right: 5px;
  }

  .nav-cart-list .nav-cart-total h5 span {
    font-size: 18px;
    color: #de4037;
    display: inline-block;
    font-weight: 700;
  }

  .nav-cart-list .nav-cart-total h6 {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 108px;
  }

  .nav-cart-btn {
    display: block;
    height: 38px;
    background: #688fe8;
    background: linear-gradient(#688fe8, #5079e1);
    border: 1px solid #5c81e3;
    border-radius: 6px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 1px 3px rgba(0, 0, 0, 0.2);
    line-height: 38px;
    text-align: center;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
  }
`;
