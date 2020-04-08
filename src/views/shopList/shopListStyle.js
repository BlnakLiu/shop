import styled from "styled-components";
import checkboxImg from "../../assets/img/checkbox-new.png";
import deleteImg from "../../assets/img/delete-btn-icon.jpg";
import cartImg from "../../assets/img/cart-updown.jpg";

export const SubmitStyle = styled.div`
  border-radius: 0 0 8px 8px;
  height: 90px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  background-position: center;
  background: #fdfdfd;
  background: linear-gradient(#fdfdfd, #f9f9f9);
  border-top: 1px solid #e9e9e9;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.04);
  .cart-bar-operation {
    float: left;
    padding: 35px 26px;
    font-size: 12px;
  }
  .choose-all,
  .delete-choose-goods,
  .selected-count {
    float: left;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    position: relative;
  }
  .blue-checkbox-new {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    background: url(${checkboxImg}) no-repeat 0 -20px;
    cursor: pointer;
    vertical-align: middle;
  }
  .checkbox-on {
    background: url(${checkboxImg}) no-repeat 0 0;
  }
  .delete-choose-goods {
    position: relative;
    margin-left: 21px;
    color: #bbb;
  }
  .delete-choose-goods-disabled {
    cursor: not-allowed;
  }
  .shipping {
    display: inline-block;
    float: right;
    padding: 20px 30px;
  }
  .shipping-box {
    display: inline-block;
    padding-top: 1px;
    margin-right: 10px;
  }
  .shipping-total {
    display: inline-block;
    border-left: 1px solid #e1e1e1;
    padding: 0 20px;
  }
  .shipping-total:first-child {
    border: none;
  }
  .shipping-total.shipping-num {
    text-align: right;
  }
  .shipping-total h4 {
    color: #323232;
  }
  .shipping-total h4 i {
    font-size: 18px;
    font-weight: 700;
  }
  .shipping-total.shipping-num i {
    width: 28px;
    display: inline-block;
    text-align: center;
  }
  .shipping-total h4.highlight i,
  .shipping-total h4.highlight span {
    color: #d44d44;
  }
  .shipping-total h5 {
    color: #959595;
  }
  .shipping-total h5 i {
    width: 28px;
    display: inline-block;
    text-align: center;
  }
  .shipping-total {
    display: inline-block;
    border-left: 1px solid #e1e1e1;
    padding: 0 20px;
  }
  .shipping-total.shipping-price {
    width: 155px;
    padding-right: 0;
  }
  .blue-main-btn,
  .gray-main-btn,
  .jianguo-blue-main-btn {
    display: block;
    padding: 1px;
    margin: 0 auto;
    border-radius: 9px;
    background: #015e94;
    background: linear-gradient(#5598c9, #2a6da2);
    text-align: center;
    text-shadow: rgba(255, 255, 255, 0.496094) 0 1px 0;
    cursor: pointer;
    user-select: none;
  }
  .jianguo-blue-main-btn {
    background: #567ce6;
    background: linear-gradient(#799cea, #567ce6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
      inset 0 -1px 2px rgba(0, 0, 0, 0.2);
  }
  .big-main-btn {
    height: 48px;
  }
  .big-main-btn {
    float: right;
    background: #5d86e5;
    background: -webkit-linear-gradient(#688fe8, #5079e1);
    background: linear-gradient(#688fe8, #5079e1);
  }
  .big-main-btn.jianguo-blue-main-btn.disabled-btn {
    background: #a9a9a9;
    background: linear-gradient(#bfbfbf, #999);
    box-shadow: none;
  }
  .blue-main-btn a,
  .gray-main-btn a,
  .jianguo-blue-main-btn a {
    display: block;
    padding: 2px 0;
    border-radius: 9px;
    background: #5f7ed7;
    background: linear-gradient(#739fe1, #5f7ed7);
    box-shadow: inset 0 1px 3px #92b6ec, inset 0 0 2px #627dca,
      inset 0 -2px 3px #4c69b8;
    text-shadow: #4f70b3 0 -1px 0;
    cursor: pointer;
    color: #fff;
    transition: all 0.3s ease;
  }
  .jianguo-blue-main-btn a {
    background: #6c94f3;
    background: linear-gradient(#7ea3f5, #5a82f0);
    box-shadow: none;
    text-shadow: none;
    color: #fff;
    transition: all 0.3s ease;
  }
  .big-main-btn a {
    height: 44px;
    line-height: 45px;
    font-size: 18px;
  }
  .big-main-btn a {
    padding: 2px 32px;
    font-size: 16px;
  }
  .jianguo-blue-main-btn.disabled-btn a,
  .jianguo-blue-main-btn.disabled-btn:active a,
  .jianguo-blue-main-btn.disabled-btn:hover a {
    background: #b7b7b7;
    background: linear-gradient(#c3c3c3, #abaaaa);
    box-shadow: inset 0 1px 3px #ccc;
  }
  .disabled-btn,
  .disabled-btn a {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const CartMsgStyle = styled.li`
  :first-child .cart-items {
    border-top: none;
  }
  .cart-items {
    border-top: 1px dashed #eee;
    position: relative;
    height: 140px;
    margin-left: 74px;
    .items-choose,
    .items-thumb,
    .name {
      float: left;
    }
    .items-choose {
      position: absolute;
      left: -74px;
      top: 0;
      width: 74px;
      height: 20px;
      padding: 60px 0 0 31px;
      font-size: 12px;
      color: #999;
    }
    .blue-checkbox-new {
      display: inline-block;
      position: relative;
      width: 20px;
      height: 20px;
      background: url(${checkboxImg}) no-repeat 0 -20px;
      cursor: pointer;
      vertical-align: middle;
    }
    .checkbox-on {
      background: url(${checkboxImg}) no-repeat 0 0;
    }
    .items-thumb {
      position: relative;
      margin-top: 30px;
      overflow: hidden;
      img {
        width: 80px;
        height: 80px;
      }
      > a,
      > i {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 3px;
        border: 0 solid rgba(255, 255, 255, 0.1);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
      }
    }
    .name {
      width: 380px;
      margin-left: 20px;
      color: #323232;
      display: table;
      .name-table {
        display: table-cell;
        vertical-align: middle;
        height: 140px;
      }
      a {
        color: #333;
        font-size: 16px;
      }
      .attribute {
        color: #999;
        font-size: 12px;
        padding-top: 4px;
        line-height: 17px;
        li {
          float: left;
          padding: 0 10px;
          position: relative;
        }
        li:first-child {
          padding-left: 0;
        }
      }
    }
    .hide-row {
      overflow: hidden;
      word-break: keep-all;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-cols-num,
    .operation,
    .price,
    .subtotal {
      overflow: hidden;
      float: right;
      width: 137px;
      text-align: center;
      color: #666;
      line-height: 140px;
    }
    .operation {
      padding: 58px 0 0;
      font-size: 12px;
      line-height: 24px;
      .items-delete-btn {
        display: block;
        width: 24px;
        height: 24px;
        margin: 0 auto;
        color: #c2c2c2;
        background: url(${deleteImg});
        background-size: 100% auto;
        transition: none;
        :hover {
          background-position: 0 -36px;
        }
      }
    }
    .subtotal {
      font-weight: 700;
      text-align: right;
    }
    .item-cols-num {
      padding-top: 50px;
      line-height: 40px;
      .select {
        width: 112px;
        height: 40px;
        padding-top: 4px;
        margin: 0 auto;
        line-height: 40px;
        .down,
        .up {
          overflow: hidden;
          float: left;
          display: inline-block;
          width: 34px;
          height: 37px;
          margin-right: 5px;
          background: url(${cartImg}) no-repeat;
          background-image: url(${cartImg});
          background-size: 100% auto;
          line-height: 40px;
          text-indent: -9999em;
          cursor: pointer;
          user-select: none;
        }
        .down {
          background-position: 0 -60px;
        }
        .down:hover {
          background-position: 0 -180px;
        }
        .down-disabled,
        .down-disabled:hover {
          background-position: 0 -300px;
          cursor: not-allowed;
        }
        .num {
          position: relative;
          overflow: hidden;
          float: left;
          display: inline-block;
          width: 36px;
          height: 18px;
          margin: 7px 0 0;
          border: none;
          border-radius: 3px;
          line-height: 18px;
          text-align: center;
          font-size: 14px;
        }
        input {
          width: 36px;
          height: 18px;
          background-color: transparent;
          border: none;
          border-radius: 3px;
          text-align: center;
          line-height: 18px;
          font-size: 14px;
          padding: 0;
          display: "inline-block";
        }
        .up {
          float: right;
          margin: 0;
          background-position: 0 0;
        }
        .up:hover {
          background-position: 0 -120px;
        }
        .up.up-disabled,
        .up.up-disabled:hover {
          background-position: 0 -240px;
          cursor: not-allowed;
        }
      }
    }
  }
`;

export const ListStyle = styled.div`
  position: relative;
  margin-top: 40px;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  .title {
    position: relative;
    z-index: 10;
    height: 60px;
    padding: 0 10px 0 30px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: rgba(0, 0, 0, 0.06) 0 1px 7px;
    background: #f3f3f3;
    background: linear-gradient(#fbfbfb, #ececec);
    line-height: 60px;
    font-size: 18px;
    color: #333;
  }
  .cart-inner {
    padding-bottom: 91px;
  }
  .empty-label {
    height: 49px;
    padding: 385px 0 0 0;
    background: url(../img/cart-box-empty.png) no-repeat center 50px;
    text-align: center;
  }
  .empty-label h3 {
    font-size: 14px;
    line-height: 1.5;
    color: #8d8d8d;
    margin-bottom: 17px;
  }
  .empty-label > a.link {
    width: 151px;
    line-height: 38px;
    height: 38px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    display: inline-block;
    color: #999;
    font-size: 12px;
    background: #f9f9f9;
    background: -webkit-linear-gradient(#fff, #f0f0f0);
    background: linear-gradient(#fff, #f0f0f0);
  }
  .cart-table-title {
    position: relative;
    z-index: 1;
    line-height: 38px;
    height: 38px;
    padding: 0 0 0 30px;
    font-size: 12px;
    background: #eee;
    border-bottom: 1px solid #dbdbdb;
    border-bottom-color: rgba(0, 0, 0, 0.08);
  }
  .cart-table-title span {
    float: right;
    text-align: center;
  }
  .cart-table-title .name {
    float: left;
    text-align: left;
  }
  .cart-table-title .operation,
  .cart-table-title .num,
  .cart-table-title .price,
  .cart-table-title .subtotal {
    width: 137px;
  }
  .cart-table-title .subtotal {
    text-align: right;
  }
  .cart-group {
    position: relative;
  }
`;
