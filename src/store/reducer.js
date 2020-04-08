import { ChangeData } from "./actionTypes";
let defaultData = {
  CartNum: 0, //购物车数量
  CartisDisplay: false,
  CartList: [], //购物车商品
  isId: 0,
  CartPrice: 0, //购物车总价格
  isChecked: false, //全选开关
  SmtPrice: 0,
  SmtNum: 0,
  six: 0,
  value: "",
  isInvoice: true,
  showPrompt: false,
  showDelivery: false,
  addressList: [
    {
      userName: "王某某",
      id: 1,
      tel: "13810000000",
      province: "北京市",
      city: "市辖区",
      area: "海淀区",
      address: "上地十街辉煌国际大商西6号楼319室",
      default: true
    }
  ]
};

const reducer = function(state = defaultData, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ChangeData.MOVEDISPLAY: //显示购物车
      newState.CartisDisplay = true;
      return newState;
    case ChangeData.OUTDISPLAY: //隐藏购物车
      newState.CartisDisplay = false;
      return newState;
    case ChangeData.ADDCART: //添加购物车
      const res = newState.CartList.find(
        a => a.sku_id === action.cardList.sku_id
      );
      if (res) {
        //如果是购物车有的
        newState.CartList = newState.CartList.map(item => {
          if (item.sku_id === action.cardList.sku_id) {
            //如果id相同
            if (item.n < item.limit_num) {
              //没有达到限量
              item.n = action.n ? action.n : (item.n += 1);
            } else {
              item.n = action.n ? action.n : item.n;
              if (item.n >= item.limit_num) {
                newState.showPrompt = true;
              }
              //否则
              // state.showPrompt = true; //让弹层出现
            }
          }
          return item;
        });
      } else {
        //如果购物车没有
        action.cardList.n = action.n ? action.n : 1; //设置数组一个n自定义属性为1
        action.cardList.iscommodity = false;
        var idd = (newState.isId += 1);
        action.cardList.id = idd;
        newState.CartList.push(action.cardList); //把传过来的商品数值传进数组
      }

      newState.CartNum = newState.CartList.reduce(
        (sum, item) => (sum += item.n),
        0
      );
      newState.CartPrice = newState.CartList.reduce(
        (sum, item) => (sum += item.n * item.price),
        0
      );
      if (
        newState.CartList.every(item => item.iscommodity) &&
        newState.CartList.length
      ) {
        newState.isChecked = true;
      } else {
        newState.isChecked = false;
      }
      newState.CartisDisplay = true;
      return newState;
    case ChangeData.SUBNUM:
      const subRes = newState.CartList.find(
        a => a.sku_id === action.cardList.sku_id
      );
      if (subRes) {
        newState.CartList = newState.CartList.map(item => {
          if (item.sku_id === action.cardList.sku_id) {
            //如果id相同
            if (item.n === 1) {
              //没有达到限量
              item.n = 1;
            } else {
              item.n -= 1;
            }
          }
          return item;
        });
      }
      newState.CartNum = newState.CartList.reduce(
        (sum, item) => (sum += item.n),
        0
      );
      newState.CartPrice = newState.CartList.reduce(
        (sum, item) => (sum += item.n * item.price),
        0
      );
      newState.SmtPrice = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n * item.price;
        }
        return num;
      }, 0);
      newState.SmtNum = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n;
        }
        return num;
      }, 0);
      return newState;
    case ChangeData.ADDNUM:
      const addRes = newState.CartList.find(
        a => a.sku_id === action.cardList.sku_id
      );
      if (addRes) {
        newState.CartList = newState.CartList.map(item => {
          if (item.sku_id === action.cardList.sku_id) {
            //如果id相同
            if (item.n < item.limit_num) {
              //没有达到限量
              item.n += 1; //就让n+1
            } else {
              //否则
              newState.showPrompt = true;
            }
          }
          return item;
        });
      }
      newState.CartNum = newState.CartList.reduce(
        (sum, item) => (sum += item.n),
        0
      );
      newState.CartPrice = newState.CartList.reduce(
        (sum, item) => (sum += item.n * item.price),
        0
      );
      newState.SmtPrice = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n * item.price;
        }
        return num;
      }, 0);
      newState.SmtNum = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n;
        }
        return num;
      }, 0);
      return newState;
    case ChangeData.MOVECOMMODITY:
      const moveRes = newState.CartList.find(
        a => a.sku_id === action.cardList.sku_id
      );
      if (moveRes) {
        newState.CartList = newState.CartList.map(item => {
          if (item.sku_id === action.cardList.sku_id) {
            item.iscommodity = !item.iscommodity;
          }
          return item;
        });
      }
      if (
        newState.CartList.every(item => item.iscommodity) &&
        newState.CartList.length
      ) {
        newState.isChecked = true;
      } else {
        newState.isChecked = false;
      }
      newState.SmtPrice = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n * item.price;
        }
        return num;
      }, 0);
      newState.SmtNum = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n;
        }
        return num;
      }, 0);
      return newState;
    case ChangeData.DRLETESHOP:
      var deletIndex = newState.CartList.findIndex(
        item => item.id === action.id
      );
      newState.CartList.splice(deletIndex, 1);
      if (!newState.CartList.length) {
        newState.isChecked = false;
      }
      if (
        newState.CartList.every(item => item.iscommodity) &&
        newState.CartList.length
      ) {
        newState.isChecked = true;
      } else {
        newState.isChecked = false;
      }
      newState.SmtPrice = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n * item.price;
        }
        return num;
      }, 0);
      newState.SmtNum = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n;
        }
        return num;
      }, 0);
      newState.CartPrice = newState.CartList.reduce(
        (sum, item) => (sum += item.n * item.price),
        0
      );
      newState.CartNum = newState.CartList.reduce(
        (sum, item) => (sum += item.n),
        0
      );
      return newState;
    case ChangeData.OUTCHECKE:
      newState.isChecked = newState.CartList.length
        ? !newState.isChecked
        : false;
      newState.CartList = newState.CartList.map(item => {
        item.iscommodity = newState.isChecked;
        return item;
      });
      newState.SmtPrice = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n * item.price;
        }
        return num;
      }, 0);
      newState.SmtNum = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n;
        }
        return num;
      }, 0);
      return newState;
    case ChangeData.CLEARCOMPLETE:
      newState.CartList = newState.CartList.filter(item => !item.iscommodity);
      newState.isChecked = false;
      newState.CartNum = newState.CartList.reduce(
        (sum, item) => (sum += item.n),
        0
      );
      newState.CartPrice = newState.CartList.reduce(
        (sum, item) => (sum += item.n * item.price),
        0
      );
      newState.SmtPrice = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n * item.price;
        }
        return num;
      }, 0);
      newState.SmtNum = newState.CartList.reduce((num, item) => {
        if (item.iscommodity) {
          num += item.n;
        }
        return num;
      }, 0);
      return newState;
    case ChangeData.SETVLUE:
      newState.value = action.value;
      return newState;
    case ChangeData.OPISINVOICE:
      newState.isInvoice = action.boolean;
      return newState;
    case ChangeData.OUTPROMPT:
      newState.showPrompt = false;
      return newState;
    case ChangeData.MOVEDELIVERY:
      newState.showDelivery = true;
      return newState;
    case ChangeData.OUTDELIVERY:
      newState.showDelivery = false;
      return newState;
    case ChangeData.ADDADDRESS:
      newState.addressList.push(action.data);
      return newState;
    case ChangeData.CLICKDEFAULT:
      newState.addressList.map(res => {
        res.default = false;
        if (res.id === action.id) {
          res.default = true;
        }
      });
      return newState;
  }
  return state;
};

export default reducer;
