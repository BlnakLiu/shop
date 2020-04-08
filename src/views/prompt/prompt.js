import React, { Component } from "react";
import { PromptStyle } from "./promptStyle.js";
import { connect } from "react-redux";
class Prompt extends Component {
  render() {
    return (
      <PromptStyle
        style={
          this.props.showPrompt ? { display: "block" } : { display: "none" }
        }
      >
        <div className="module-dialog-layer" style={{ display: "block" }}></div>
        <div
          className="clear module-dialog module-dialog-confirm module-dialog-show"
          style={{ display: "block", opacity: "1" }}
        >
          <div className="dialog-panel">
            <div className="topbar">
              <div className="dialog-tit clear">
                <h4 className="js-dialog-title">提示</h4>
              </div>
              <span
                className="dialog-close png"
                onClick={this.props.outPrompt.bind(this)}
              ></span>
            </div>
            <div className="dialog-con js-dialog-container">
              <div className="confirm-msg">
                商品已达到最大可购买数量，无法继续添加
              </div>
            </div>
            <div className="dialog-btn-wrap clear">
              <div className="blue-main-btn normal-main-btn js-dialog-done">
                <a onClick={this.props.outPrompt.bind(this)}>确定</a>
              </div>
            </div>
          </div>
        </div>
      </PromptStyle>
    );
  }
}
const mapToPropState = state => {
  return { showPrompt: state.showPrompt };
};

const mapToPropDispatch = dispatch => {
  return {
    outPrompt() {
      const action = {
        type: "outPrompt"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(Prompt);
