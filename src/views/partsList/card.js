import React, { Component } from "react";
import PartsData from "../../api/partsData.js";
import { connect } from "react-redux";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: props.data,
      now: 0
    };
  }
  changeNow(index) {
    this.setState({
      now: index
    });
  }
  render() {
    return (
      <li className="item">
        <div>
          <div className="item-img">
            <img
              src={`${this.state.itemData.sku_info[this.state.now].ali_image}?x-oss-process=image/resize,w_206/quality,Q_80/format,webp`}
            ></img>
          </div>
          <h6>{this.state.itemData.name}</h6>
          <h3>{this.state.itemData.name_title}</h3>
          <div className="params-colors">
            <ul className="colors-list">
              {this.state.itemData.sku_info.map((s, sindex) => (
                <li key={sindex}>
                  {sindex + 1}
                  <a
                    onClick={() => this.changeNow(sindex)}
                    className={sindex === this.state.now ? "active" : ""}
                  >
                    <img
                      src={`http://img01.smartisanos.cn/${s.spec_json.image}20X20.jpg`}
                    ></img>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="item-btns clearfix">
            <span className="item-gray-btn">
              <a
                href={`#/partdetail/${this.state.itemData.sku_info[this.state.now].sku_id}`}
              >
                查看详情
              </a>
            </span>
            <span
              className="item-blue-btn"
              onClick={() =>
                this.props.addShop(this.state.itemData.sku_info[this.state.now])
              }
            >
              加入购物车{" "}
            </span>
          </div>
          <div className="item-price clearfix">
            <i>¥</i>
            <span>
              {this.state.itemData.sku_info[this.state.now].price.toFixed(2)}
            </span>
          </div>
          <div className="discount-icon">false</div>
          <div className="item-cover">
            <a target="_blank"></a>
          </div>
        </div>
      </li>
    );
  }
}
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: PartsData
    };
  }
  render() {
    return (
      <div className="gray-box">
        <ul className="item-box">
          {this.state.cardList.map((i, index) => (
            <Item
              key={index}
              data={i}
              addShop={this.props.addCart.bind(this)}
            ></Item>
          ))}
        </ul>
      </div>
    );
  }
}
const mapToPropState = state => {
  return {};
};

const mapToPropDispatch = dispatch => {
  return {
    addCart(data) {
      const action = {
        type: "addCart",
        cardList: data
      };
      dispatch(action);
    },
    moveDisplay() {
      const action = {
        type: "moveDisplay"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(Card);
