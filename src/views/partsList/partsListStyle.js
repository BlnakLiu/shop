import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  .sort-option {
    border-top: 1px solid #d8d8d8;
    color: #999;
  }
  .sort-option ul {
    height: 60px;
    line-height: 60px;
  }
  .sort-option li {
    position: relative;
    float: left;
    padding-left: 42px;
  }
  .sort-option li:first-child {
    padding-left: 9px;
  }
  .sort-option li:before {
    content: " ";
    display: block;
    position: absolute;
    left: 20px;
    top: 50%;
    width: 2px;
    height: 2px;
    margin-top: -1px;
    background: #c7c7c7;
  }
  .sort-option li:first-child:before {
    display: none;
  }
  .sort-option a {
    display: block;
    font-size: 12px;
    color: #999;
  }
  .sort-option a.active,
  .sort-option a:hover {
    color: #5683ea;
  }
  .gray-box {
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .item-box {
    clear: both;
    overflow: hidden;
    margin: 0 -1px -1px -1px;
  }
  .item {
    position: relative;
    float: left;
    border-right: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    width: 25%;
    height: 429px;
    background: #fff;
    box-sizing: border-box;
  }
  .item:hover {
    box-shadow: 0 0 38px rgba(0, 0, 0, 0.08) inset;
    transition: all 0.15s ease;
  }
  .item .item-img img {
    display: block;
    width: 206px;
    height: 206px;
    margin: 50px auto 10px;
  }
  .item h3,
  .item h6 {
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item h6 {
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
    margin: 0 auto;
    padding: 0 14px;
  }
  .item h3 {
    line-height: 1.2;
    font-size: 12px;
    color: #d0d0d0;
    margin: 8px auto 14px;
  }
  .item .params-colors {
    margin-top: 23px;
    text-align: center;
  }
  .item .colors-list {
    display: inline-block;
    overflow: hidden;
  }
  .item .colors-list li {
    float: left;
    margin: 0 5px;
  }
  .item .colors-list > li a {
    width: 8px;
    height: 8px;
    border: 1px solid #e5e5e5;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    padding: 2px;
    display: block;
  }
  .item .colors-list > li a.active {
    box-shadow: inset 0 0 0 1px #b2b2b2;
    border-color: #b2b2b2;
  }
  .item .colors-list > li img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    display: block;
  }
  .item .item-btns {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 29px;
    text-align: center;
    opacity: 0;
    z-index: 10;
  }
  .item:hover .item-btns {
    opacity: 1;
    transition: all 0.2s ease-in;
  }
  .item .item-btns .item-blue-btn,
  .item .item-btns .item-disabled-btn,
  .item .item-btns .item-gray-btn,
  .item .item-btns .item-green-btn {
    display: inline-block;
    box-sizing: border-box;
    width: 100px;
    height: 30px;
    font-size: 12px;
    line-height: 28px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 200;
    transition: all 0.1s ease;
  }
  .item .item-btns .item-gray-btn {
    border: 1px solid #d5d5d5;
    color: #646464;
  }
  .item .item-btns .item-gray-btn a {
    display: block;
    color: #a1a1a1;
  }
  .item .item-btns .item-gray-btn:hover {
    background-image: linear-gradient(#f6f6f6, #ededed);
  }
  .item .item-btns .item-blue-btn {
    background-color: #5c85e5;
    background-image: linear-gradient(#779ae9, #5078df);
    border: 1px solid #5c81e3;
    color: #fff;
    margin-left: 10px;
  }
  .item .item-btns .item-blue-btn:hover {
    border: 1px solid #5374c8;
    background-color: #5074db;
    background-image: linear-gradient(#6e8ed5, #4769c2);
  }
  .item .item-btns .item-blue-btn:active {
    border: 1px solid #3e61d7;
    background-color: #5c85e5;
    background-image: linear-gradient(#4d72de, #6189e6);
  }
  .item .item-price {
    font-family: Arial;
    color: #c30a18;
    margin-top: 24px;
    text-align: center;
    opacity: 1;
  }
  .item .item-price i {
    font-size: 16px;
  }
  .item .item-price span {
    font-size: 18px;
    padding-left: 4px;
  }
  .item:hover .item-price {
    opacity: 0;
    transition: all 0.1s ease-out;
  }
  .item .discount-icon {
    display: none;
  }
  .item .item-cover a {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 310px;
  }
`;
