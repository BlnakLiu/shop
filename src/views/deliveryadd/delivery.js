import React, { Component } from "react";
import { DeliveryStyle } from "./deliveryStyle.js";
import { connect } from "react-redux";
import Address from "../../api/Location";

class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: Address.data,
      cityList: [],
      areaList: [],
      fromData: {
        userName: "",
        tel: "",
        id: this.props.num,
        province: "",
        city: "",
        area: "",
        address: "",
        default: false
      },
      switch: false
    };
  }
  setName(e) {
    this.setState({
      fromData: { ...this.state.fromData, userName: e.target.value }
    });
  }
  setTel(e) {
    this.setState({
      fromData: { ...this.state.fromData, tel: e.target.value }
    });
  }
  getCity(e) {
    let cityData = [];
    this.state.position.forEach(res => {
      if (res.name === e.target.value) {
        cityData = res._child;
      }
    });
    this.setState({
      fromData: { ...this.state.fromData, province: e.target.value },
      cityList: cityData,
      areaList: []
    });
  }
  getArea(e) {
    let areaData = [];
    this.state.cityList.forEach(res => {
      if (res.name === e.target.value) {
        areaData = res._child;
      }
    });
    this.setState({
      fromData: { ...this.state.fromData, city: e.target.value },
      areaList: areaData
    });
  }
  setArea(e) {
    this.setState({
      fromData: { ...this.state.fromData, area: e.target.value }
    });
  }
  setAddress(e) {
    this.setState({
      fromData: { ...this.state.fromData, address: e.target.value }
    });
  }
  isDefault() {
    this.setState({
      fromData: {
        ...this.state.fromData,
        default: !this.state.fromData.default
      }
    });
  }
  subAddress() {
    this.setState({
      switch: true
    });
    let data = this.state.fromData;
    if (
      data.userName === "" ||
      data.tel === "" ||
      data.province === "" ||
      data.city === "" ||
      data.area === "" ||
      data.address === ""
    ) {
      return;
    }
    this.props.addAddress(this.state.fromData);
    this.props.outDelivery();
    if (this.state.fromData.default) {
      this.props.clickDefault(this.state.fromData.id);
    }
    let fromDataTow = {
      userName: "",
      id: this.props.num + 1,
      tel: "",
      province: "",
      city: "",
      area: "",
      address: "",
      default: false
    };

    this.setState({
      fromData: { ...fromDataTow },
      switch: false
    });
    const inputData = [...document.getElementsByClassName("js-verify")];
    inputData.forEach(res => {
      res.value = "";
    });
  }
  render() {
    return (
      <DeliveryStyle
        style={
          this.props.showDelivery ? { display: "block" } : { display: "none" }
        }
      >
        <div className="module-dialog-layer" style={{ display: "block" }}></div>
        <div className="module-dialog clear module-dialog-address module-dialog-show">
          <div className="dialog-panel">
            <div className="dialog-tit clear">
              <h4 className="js-dialog-title">管理收货地址</h4>
            </div>
            <span
              className="dialog-close"
              onClick={this.props.outDelivery.bind(this)}
            >
              x
            </span>
            <div className="dialog-con js-dialog-container">
              <div className="animate-layer">
                <div className="dialog-inner js-address-add">
                  <div className="save-address-box">
                    <div className="address-form">
                      <div className="module-form-row">
                        <div className="form-item-v3">
                          <i
                            style={
                              this.state.fromData.userName
                                ? { display: "none" }
                                : { display: "block" }
                            }
                          >
                            收货人姓名
                          </i>
                          <input
                            type="text"
                            className="js-verify"
                            onChange={this.setName.bind(this)}
                          />
                          <div className="verify-error"></div>
                          <p
                            style={
                              this.state.fromData.userName === "" &&
                              this.state.switch
                                ? { display: "block" }
                                : { display: "none" }
                            }
                          >
                            请填写收货人姓名
                          </p>
                        </div>
                      </div>
                      <div className="module-form-row">
                        <div className="form-item-v3">
                          <i
                            style={
                              this.state.fromData.tel
                                ? { display: "none" }
                                : { display: "block" }
                            }
                          >
                            手机号
                          </i>
                          <input
                            type="text"
                            className="js-verify"
                            onChange={this.setTel.bind(this)}
                          />
                          <div className="verify-error"></div>
                          <p
                            style={
                              this.state.fromData.tel === "" &&
                              this.state.switch
                                ? { display: "block" }
                                : { display: "none" }
                            }
                          >
                            请填写手机号
                          </p>
                        </div>
                      </div>
                      <div className="module-form-row clear">
                        <div className="form-item-v3 select-item province-wrapper">
                          <select
                            name="province_code"
                            className="province select-province js-form-province js-verify"
                            onChange={this.getCity.bind(this)}
                          >
                            <option value="">请选择省份</option>
                            {this.state.position.map(res => (
                              <option key={res.id} value={res.name}>
                                {res.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="module-form-row clear">
                        <div className="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                          <select
                            className="city select-city js-form-city js-verify"
                            onChange={this.getArea.bind(this)}
                          >
                            <option value="">请选择城市</option>
                            {this.state.cityList.map(res => (
                              <option key={res.id} value={res.name}>
                                {res.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                          <select
                            className="city select-city js-form-city js-verify"
                            onChange={this.setArea.bind(this)}
                          >
                            <option value="">请选择区县</option>
                            {this.state.areaList.map(res => (
                              <option key={res.id} value={res.name}>
                                {res.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <p
                          style={
                            (this.state.fromData.province === "" ||
                              this.state.fromData.city === "" ||
                              this.state.fromData.area === "") &&
                            this.state.switch
                              ? { display: "block", color: "red" }
                              : { display: "none", color: "red" }
                          }
                        >
                          请填写城市
                        </p>
                      </div>
                      <div className="module-form-row">
                        <div className="form-item-v3">
                          <i
                            style={
                              this.state.fromData.address
                                ? { display: "none" }
                                : { display: "block" }
                            }
                          >
                            详细地址，如街道名称，楼层，门牌号码等
                          </i>
                          <input
                            type="text"
                            className="js-verify"
                            onChange={this.setAddress.bind(this)}
                          />
                          <div className="verify-error"></div>
                          <p
                            style={
                              this.state.fromData.address === "" &&
                              this.state.switch
                                ? { display: "block" }
                                : { display: "none" }
                            }
                          >
                            请填写详细地址
                          </p>
                        </div>
                      </div>
                      <div className="module-form-row fn-clear">
                        <input type="checkbox" className="hide" />
                        <span
                          onClick={this.isDefault.bind(this)}
                          className={
                            this.state.fromData.default
                              ? "blue-checkbox-onTow"
                              : "blue-checkbox-on"
                          }
                        ></span>
                        设为默认
                      </div>
                      <div className="dialog-blue-btn big-main-btn disabled-btn js-verify-address">
                        <a onClick={this.subAddress.bind(this)}>保存</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DeliveryStyle>
    );
  }
}

const mapToPropState = state => {
  return {
    showDelivery: state.showDelivery,
    num: Number(state.addressList.length) + 1
  };
};

const mapToPropDispatch = dispatch => {
  return {
    outDelivery() {
      const action = {
        type: "outDelivery"
      };
      dispatch(action);
    },
    addAddress(Data) {
      const action = {
        type: "addAddress",
        data: Data
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
)(Delivery);
