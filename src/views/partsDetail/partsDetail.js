import React, { Component } from "react";
import Head from "../head/head.js";
import { Detail, GalleryStyle, BannerStyle } from "./partsDetailStyle.js";
import DetailData from "../../api/partsDetailData.js";
import { connect } from "react-redux";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorNum: 0,
      commodNum: 1
    };
  }
  ChangeColor(num) {
    this.setState({
      colorNum: num
    });
  }
  minusNum() {
    if (this.state.commodNum === 1) {
      return;
    }
    this.setState({
      commodNum: this.state.commodNum - 1
    });
  }
  addNum() {
    if (this.state.commodNum >= this.props.dataList.limit_num) {
      return;
    }
    this.setState({
      commodNum: this.state.commodNum + 1
    });
  }
  render() {
    return (
      <BannerStyle>
        <div className="sku-custom-title">
          <div className="params-price">
            <span>
              <em>¥</em>
              <i>{this.props.dataList.price.toFixed(2)}</i>
            </span>
          </div>
          <div className="params-info">
            <h4>{this.props.dataList.title}</h4>
            <h6>{this.props.dataList.sub_title}</h6>
          </div>
        </div>
        <div className="sku-dynamic-params-panel">
          <div className="sku-dynamic-params clear">
            <span className="params-name">颜色</span>
            <ul className="params-colors">
              {this.props.dataList.sku_list.map((color, cindex) => (
                <li
                  className={cindex === this.state.colorNum ? "cur" : ""}
                  onClick={() => this.ChangeColor(cindex)}
                  key={cindex}
                >
                  <a>
                    <i>
                      <img
                        src={`http://img01.smartisanos.cn/${this.props.dataList.sku_list[cindex].image}/20X20.jpg`}
                      ></img>
                    </i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sku-dynamic-params clear">
            <div className="params-name">数量</div>
            <div className="params-detail clear">
              <div className="item-num js-select-quantity">
                <span
                  className={
                    this.state.commodNum === 1 ? "down-disabled down" : "down"
                  }
                  onClick={this.minusNum.bind(this)}
                >
                  -
                </span>
                <span className="num">{this.state.commodNum}</span>
                <span
                  className={
                    this.state.commodNum === this.props.dataList.limit_num
                      ? "up-disabled up"
                      : "up"
                  }
                  onClick={this.addNum.bind(this)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="sku-status">
          <div className="cart-operation-wrapper clearfix">
            <span
              onClick={() =>
                this.props.addShop(this.props.dataList, this.state.commodNum)
              }
              className="blue-title-btn js-add-cart"
            >
              <a>加入购物车</a>
            </span>
            <span className="gray-title-btn">
              <a>现在购买</a>
            </span>
          </div>
        </div>
      </BannerStyle>
    );
  }
}

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  ChangeImg(index) {
    this.setState({
      num: index
    });
  }
  render() {
    return (
      <GalleryStyle>
        <div className="gallery">
          <div className="thumbnail">
            <ul>
              {this.props.dataList.ali_images.map((col, colIndex) => (
                <li
                  onClick={() => this.ChangeImg(colIndex)}
                  className={colIndex === this.state.num ? "on onTow" : "on"}
                  key={colIndex}
                >
                  <img
                    src={`${col}?x-oss-process=image/resize,w_54/quality,Q_90/format,webp`}
                  ></img>
                </li>
              ))}
            </ul>
          </div>
          <div className="thumb">
            <ul>
              <li className="on">
                <img
                  src={`${
                    this.props.dataList.ali_images[this.state.num]
                  }?x-oss-process=image/resize,w_440/quality,Q_90/format,webp`}
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </GalleryStyle>
    );
  }
}

class PartsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: "",
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    const newData = DetailData.filter(
      item => item.sku_id === Number(this.props.match.params.id)
    )[0];
    this.setState(
      {
        dataList: newData
      },
      () => {
        console.log(this.state.dataList);
      }
    );
  }
  render() {
    return (
      <div>
        <Head></Head>
        <Detail>
          <div className="store-content item">
            <div className="item-box">
              {this.state.dataList ? (
                <Gallery {...this.state} className="gallery-wrapper"></Gallery>
              ) : null}
              {this.state.dataList ? (
                <Banner
                  addShop={this.props.addCart.bind(this)}
                  {...this.state}
                  className="banner"
                ></Banner>
              ) : null}
            </div>
          </div>
        </Detail>
      </div>
    );
  }
}
const mapToPropState = state => {
  return {};
};

const mapToPropDispatch = dispatch => {
  return {
    addCart(data, num) {
      const action = {
        type: "addCart",
        cardList: data,
        n: num
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapToPropState,
  mapToPropDispatch
)(PartsDetail);
