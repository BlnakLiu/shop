import styled from "styled-components";
import imgLogo from "../../assets/img/global-logo.png";
import account from "../../assets/img/account-icon.png";
import userImg from "../../assets/img/user-avatar.png";
export const Global = styled.div`
  height: 100px;
  background-color: #000;
  .container {
    height: 100%;
    width: 1220px;
    margin: 0 auto;
    .nav-logo {
      float: left;
      padding-top: 25px;
      a {
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url(${imgLogo}) no-repeat;
        background-size: cover;
      }
    }
  }
`;

export const NavList = styled.ul`
  float: right;
  line-height: 28px;
  margin: 36px 23px 0 0;
  > li {
    float: left;
    > a {
      color: #c8c8c8;
      display: inline-block;
      font-size: 14px;
      padding: 0 25px;
    }
    > a:hover {
      color: #fff;
    }
  }
`;

export const NavCart = styled.li`
  margin-left: 21px;
  width: 61px;
  > a {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  > a:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 30px;
    height: 20px;
    background: url(${account}) -150px -22px;
    background-size: 240px 107px;
  }
  :hover > a:before {
    background-position: 0 -22px;
  }
  .cart-empty-num {
    position: relative;
    margin-left: 31px;
    margin-top: -1px;
    min-width: 30px;
    text-indent: 0;
    line-height: 20px;
    > i {
      font-style: normal;
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 10px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background: #969696;
      background-image: linear-gradient(#a4a4a4, #909090);
      box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
    }
  }
  .nav-cart-wrapper {
    display: block;
    top: 18px;
    opacity: 1;
    visibility: visible;
  }
  .nav-cart-wrapperNone {
    display: none;
    top: 18px;
    opacity: 1;
    visibility: visible;
  }
  .cart-num {
    i {
      background: #eb746b;
      background-image: linear-gradient(#eb746b, #e25147);
      box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.15),
        0 1px 2px rgba(255, 255, 255, 0.15);
    }
  }
`;

export const NavAside = styled.ul`
  box-sizing: border-box;
  float: right;
  margin-top: 38px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  > li {
    position: relative;
    float: left;
    > a {
      font-size: 0;
    }
  }
  .nav-user {
    margin-left: 40px;
    width: 36px;
    > a:before {
      content: " ";
      position: absolute;
      left: 8px;
      width: 20px;
      top: 0;
      height: 20px;
      background: url(${account}) -155px 0;
      background-size: 240px 107px;
      transition: none;
    }
    .nav-user-wrapper {
      position: absolute;
      z-index: 30;
      padding-top: 18px;
      opacity: 0;
      visibility: hidden;
      top: -3000px;
      width: 168px;
      left: 50%;
      margin-left: -70px;
    }

    .nav-user-list {
      position: relative;
      width: 168px;
      padding-top: 20px;
      background: #fff;
      border: 1px solid #d6d6d6;
      border-color: rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .nav-user-list:before {
      position: absolute;
      content: " ";
      background: url(${account}) no-repeat -49px -43px;
      background-size: 240px 107px;
      width: 20px;
      height: 8px;
      left: 50%;
      top: -8px;
      margin-left: -25px;
    }
    .nav-user-avatar > dd {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 46px;
      height: 46px;
      margin-bottom: 8px;
    }

    .nav-user-avatar > dd:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
    }

    .nav-user-avatar span {
      border-radius: 50%;
      display: block;
      width: 100%;
      height: 100%;
      background: url(${userImg}) no-repeat;
      background-size: contain;
    }

    .nav-user-avatar dt {
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
      color: #757575;
    }
    .nav-user-list li a {
      position: relative;
      border-top: 1px solid #f5f5f5;
      display: block;
      padding-left: 54px;
      line-height: 44px;
      height: 44px;
      color: #616161;
      font-size: 12px;
    }

    .nav-user-list li a:hover {
      background-color: #fafafa;
    }
    .nav-user-list li a:before {
      background: url(${account}) no-repeat;
      background-size: 240px 107px;
      content: " ";
      display: block;
      position: absolute;
      left: 22px;
      top: 50%;
      width: 20px;
      height: 20px;
      margin-top: -8px;
    }

    .nav-user-list li.order a:before {
      background-position: 0 -44px;
    }

    .nav-user-list li.support a:before {
      background-position: -20px -44px;
    }

    .nav-user-list li.coupon a:before {
      background-position: -20px -84px;
    }

    .nav-user-list li.information a:before {
      background-position: 0 -64px;
    }

    .nav-user-list li.address a:before {
      background-position: -20px -64px;
    }

    .nav-user-list li.logout a:before {
      background-position: 0 -84px;
    }
  }
  .nav-user:hover > a:before {
    background-position: -5px 0;
  }
  .nav-user:hover > .nav-user-wrapper {
    top: 18px;
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s ease-out;
  }
`;
