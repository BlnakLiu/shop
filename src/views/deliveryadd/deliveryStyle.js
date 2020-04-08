import styled from "styled-components";
import checkboxImg from "../../assets/img/checkbox-bg.png";

export const DeliveryStyle = styled.div`
  .module-dialog-layer {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
  }
  .module-dialog .dialog-panel,
  .module-dialog:after {
    display: inline-block;
    vertical-align: middle;
  }
  .module-dialog {
    position: fixed;
    top: 200px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
    text-align: center;
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }
  .module-dialog-show {
    opacity: 1;
  }
  .module-dialog .dialog-panel {
    position: relative;
    width: 450px;
    min-width: 200px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 1px 0 3px rgba(0, 0, 0, 0.1);
    text-align: left;
    height: 592px;
  }
  .module-dialog .topbar {
    overflow: hidden;
    width: 100%;
    height: 60px;
    background: linear-gradient(#fff, #f5f5f5);
    border-bottom: 1px solid #dcdcdc;
    border-radius: 10px 10px 0 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  .module-dialog-address .topbar {
    position: relative;
    z-index: 10;
  }
  .module-dialog .dialog-tit {
    height: 60px;
    padding: 0 15px;
    line-height: 60px;
  }
  .module-dialog .dialog-tit h4 {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #666;
  }
  .module-dialog .dialog-close {
    overflow: hidden;
    display: block;
    position: absolute;
    right: 10px;
    top: 15px;
    z-index: 20;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    color: #000;
    opacity: 0.2;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .module-dialog .dialog-close:hover {
    opacity: 0.3;
  }
  .module-dialog .animate-layer {
    position: relative;
  }
  .module-dialog-address .save-address-box {
    width: 450px;
    padding-top: 29px;
  }
  .address-form {
    width: 370px;
    margin: 0 auto;
  }
  .account-address .address-form {
    padding: 30px;
    margin: 0;
  }
  .module-form-row {
    position: relative;
    padding-bottom: 10px;
    margin: 0 auto;
  }
  .address-form .module-form-row {
    padding-bottom: 20px;
  }
  .module-form-row .form-item-v3 {
    position: relative;
    height: 46px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
      -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
    line-height: 46px;
    font-size: 18px;
    opacity: 0.618;
    transition: opacity 0.3s ease;
  }
  .module-form-row .form-item-v3 i {
    position: absolute;
    left: 15px;
    top: 0;
    font-style: normal;
    z-index: -1;
    font-size: 16px;
    color: #bebebe;
  }
  .module-form-row .form-item-v3 input {
    padding: 0 15px;
    background-color: transparent;
    border: none;
    font-size: 16px;
  }
  .address-form .form-item-v3 input {
    width: 330px;
  }
  .address-form .area-code-w {
    width: 118px;
  }
  .address-form .telephone-w {
    width: 238px;
  }
  .module-form-row div.select-item {
    width: auto;
    height: auto;
    margin: 0;
    background: 0 0;
    border: none;
    box-shadow: none;
    opacity: 1;
  }
  .module-form-row .form-item-v3 select {
    margin: 0 0 0 15px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #333;
  }
  .module-form-row .form-item-v3 p {
    font-size: 14px;
    vertical-align: top;
    color: red;
    margin-top: -14px;
  }
  .address-form .select-province {
    width: 370px;
  }
  .form-focus-item {
    z-index: 1;
    opacity: 1;
    border: 1px solid #6b93f2;
  }
  .module-form-row div.select-item {
    width: auto;
    height: auto;
    margin: 0;
    background: 0 0;
    border: none;
    box-shadow: none;
    opacity: 1;
  }
  .module-form-row .form-item-v3 select {
    height: 48px;
    padding: 0 15px;
    margin: 0;
    background: -webkit-linear-gradient(top, #fafafa, #f5f5f5);
    background: linear-gradient(#fafafa, #f5f5f5);
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 2px 0 0 rgba(255, 255, 255, 0.4) inset,
      1px 0 0 rgba(255, 255, 255, 0.3);
    line-height: 48px;
    text-indent: 0;
    outline: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  .address-form .select-city,
  .address-form .select-district {
    width: 180px;
  }
  .blue-checkbox,
  .blue-checkbox-disable,
  .blue-checkbox-on {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    background: url(${checkboxImg}) no-repeat;
    cursor: pointer;
  }
  .blue-checkbox,
  .blue-checkbox-disable,
  .blue-checkbox-onTow {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    background: url(${checkboxImg}) 0px -20px no-repeat;
    cursor: pointer;
  }
  .address-form .blue-checkbox {
    top: 0;
    float: left;
    margin-right: 5px;
  }
  .dialog-blue-btn {
    padding: 1px;
    background: #6383c6;
    background: linear-gradient(#6383c6, #4262af);
    border-radius: 6px;
    text-align: center;
    color: #fff;
  }

  .disabled-btn,
  .disabled-btn a {
    cursor: not-allowed;
    -webkit-transition: none;
    transition: none;
    cursor: pointer;
  }
  .dialog-blue-btn a {
    display: block;
    padding: 2px 0;
    background: #5f7ed7;
    background: linear-gradient(#6f97e5, #527ed9);
    border-radius: 5px;
    box-shadow: inset 0 1px 2px #7ea1e8;
    text-shadow: 0 -1px 0 #4f70b3;
    color: #fff;
  }
  .big-main-btn a {
    height: 42px;
    line-height: 42px;
    font-size: 18px;
  }
  .module-form-row .form-invalid-item {
    opacity: 1;
    border: 1px solid #d16d62;
  }
  .module-form-row .form-invalid-item:after {
    visibility: visible;
    opacity: 1;
  }
`;
