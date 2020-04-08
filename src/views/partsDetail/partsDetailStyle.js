import styled from "styled-components";
import updownImg from "../../assets/img/cart-updown-item.png";

export const Detail = styled.div`
  .item-box {
    width: 1098px;
    padding: 60px;
    margin-bottom: 20px;
    display: table;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .banner,
  .gallery-wrapper {
    display: table-cell;
  }
  .gallery-wrapper {
    vertical-align: top;
  }
`;

export const GalleryStyle = styled.div`
  display: table-cell;
  .gallery {
    float: left;
    width: 540px;
    display: table-cell;
  }
  .thumb,
  .thumbnail {
    display: table-cell;
    vertical-align: middle;
  }
  .thumbnail li {
    width: 54px;
    height: 54px;
    margin-top: 10px;
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    cursor: pointer;
  }
  .thumbnail li:first-child {
    margin-top: 0;
  }
  .thumbnail li.on {
    padding: 10px;
    border: 3px solid #ccc;
    border: 3px solid rgba(0, 0, 0, 0.2);
  }
  .thumbnail li.onTow {
    border: 3px solid #d1504d;
  }
  .item-box img {
    max-width: 100%;
    height: auto;
  }
  .thumb > ul {
    margin-left: 20px;
    width: 440px;
    height: 440px;
    position: relative;
  }
  .thumb li {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    opacity: 0;
    text-align: center;
    user-select: none;
  }
  .thumb li.on {
    animation: thumb-change 0.35s ease-out 1;
    position: relative;
    display: block;
    z-index: 1;
    opacity: 1;
  }
`;

export const BannerStyle = styled.div`
         display: table-cell;
         vertical-align: middle;
         width: 450px;
         margin-left: 10px;
         .sku-custom-title {
           overflow: hidden;
           padding: 8px 8px 18px 10px;
           position: relative;
         }
         .params-price {
           position: absolute;
           right: 8px;
           bottom: 19px;
         }
         .params-price span {
           display: block;
           color: #de4037;
           font-weight: 700;
           font-size: 16px;
           line-height: 20px;
           text-align: right;
         }
         .params-price span i {
           padding-left: 2px;
           font-size: 24px;
         }
         .sku-custom-title .params-info {
           width: 360px;
         }
         .sku-custom-title h4 {
           font-size: 24px;
           line-height: 1.25;
           color: #000;
           margin-bottom: 13px;
         }
         .sku-custom-title h6 {
           font-size: 14px;
           line-height: 1.5;
           color: #bdbdbd;
         }
         .sku-dynamic-params-panel {
           padding: 29px 0 8px 10px;
           border-top: 1px solid #ebebeb;
         }
         .sku-dynamic-params {
           margin-bottom: 19px;
         }
         .params-name {
           float: left;
           padding-right: 20px;
           font-size: 14px;
           color: #8d8d8d;
           line-height: 36px;
         }
         .sku-dynamic-params .params-colors {
           float: left;
           line-height: 36px;
           margin: -10px 0 0 -10px;
           width: 402px;
         }
         .sku-dynamic-params .params-colors > li {
           float: left;
           margin: 10px 0 0 10px;
         }
         .sku-dynamic-params .params-colors > li a {
           display: block;
           width: 26px;
           height: 26px;
           border: 2px solid #e5e5e5;
           padding: 3px;
           text-align: center;
           color: #757575;
           border-radius: 50%;
         }
         .sku-dynamic-params .params-colors > li.cur a {
           border-color: #b2b2b2;
           box-shadow: inset 0 0 0 1px #b2b2b2;
         }
         .sku-dynamic-params .params-colors > li i,
         .sku-dynamic-params .params-colors > li img {
           position: relative;
           display: block;
           width: 100%;
           border-radius: 50%;
         }
         .sku-dynamic-params {
           margin-bottom: 19px;
         }
         .params-detail {
           line-height: 36px;
           float: left;
           width: 392px;
         }
         .item-num {
           float: left;
           width: 128px;
         }
         .item-num .down:before,
         .item-num .up:before {
           content: "";
           position: absolute;
           left: -4px;
           right: -4px;
           top: 0;
           height: 45px;
           background: url(${updownImg}) no-repeat;
           background-size: 100% auto;
         }
         .item-num .down:before {
           content: " ";
           background-position: 0 -60px;
         }
         .item-num .down:hover:before {
           content: " ";
           background-position: 0 -180px;
         }
         .item-num .down.down-disabled:before,
         .item-num .down.down-disabled:hover:before {
           content: " ";
           background-position: 0 -300px;
         }
         .item-num .down,
         .item-num .up {
           position: relative;
           float: left;
           display: inline-block;
           width: 36px;
           height: 36px;
           line-height: 40px;
           text-indent: -9999em;
           cursor: pointer;
           user-select: none;
         }
         .item-num .down.down-disabled,
         .item-num .up.up-disabled {
           cursor: not-allowed;
         }
         .item-num .up:before {
           background-position: 0 0;
         }
         .item-num .up:hover:before {
           background-position: 0 -120px;
         }
         .item-num .up.up-disabled:before,
         .item-num .up.up-disabled:hover:before {
           content: " ";
           background-position: 0 -240px;
         }
         .item-num .num {
           position: relative;
           overflow: hidden;
           float: left;
           display: inline-block;
           width: 56px;
           height: 18px;
           margin: 7px 0 0;
           border: none;
           border-radius: 3px;
           line-height: 18px;
           text-align: center;
           font-size: 14px;
         }
         .item-num input {
           width: 56px;
           height: 18px;
           background-color: transparent;
           border: none;
           border-radius: 3px;
           text-align: center;
           font-size: 14px;
           line-height: 18px;
           padding: 0;
         }
         .item-num ul {
           /*display: none;*/
           position: absolute;
           left: 0;
           top: 0;
           width: 56px;
         }
         .item-num ul li {
           width: 56px;
           height: 18px;
         }
         .sku-status {
           position: relative;
           border-top: 1px solid #ebebeb;
           padding: 30px 0 0 10px;
         }
         .blue-title-btn {
           float: left;
           display: inline-block;
           width: 143px;
           height: 48px;
           line-height: 48px;
           text-align: center;
           border-radius: 7px;
           border: 1px solid #5c81e3;
           background-color: #5c85e5;
           background-image: linear-gradient(#779ae9, #5078df);
           color: #fff;
           cursor: pointer;
         }
         .blue-title-btn:hover {
           transition: all 0.15s ease-out;
           box-shadow: inset 0 1px 1px #7696de, inset 0 0 2px #627dca,
             inset 0 -2px 3px #5a77c7, inset 0 0 100px rgba(48, 77, 147, 0.4);
         }
         .blue-title-btn a,
         .green-title-btn a {
           color: #fff;
         }
         .cart-operation-wrapper .gray-title-btn {
           margin-left: 20px;
         }
         .gray-title-btn {
           display: inline-block;
           width: 143px;
           height: 48px;
           line-height: 48px;
           text-align: center;
           background: linear-gradient(#fff, #fafafa);
           border: 1px solid #e0e0e0;
           border-radius: 7px;
           color: #8c8c8c;
           cursor: pointer;
         }
         .gray-title-btn:hover {
           transition: all 0.15s ease-out;
           background: linear-gradient(#f6f6f6, #ededed);
         }
       `;
