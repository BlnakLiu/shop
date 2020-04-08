import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home/home.js";
import PartsDetail from "./views/partsDetail/partsDetail.js";
import ShopList from "./views/shopList/shopList.js";
import SubMit from "./views/subMit/subMit.js";
import Succeed from "./views/succeed/succeed.js";
import Prompt from "./views/prompt/prompt.js";
import Delivery from "./views/deliveryadd/delivery.js";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Prompt />
        <Delivery />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/partdetail/:id" component={PartsDetail} />
          <Route exact path="/shoplist" component={ShopList} />
          <Route exact path="/submit" component={SubMit} />
          <Route exact path="/succeed" component={Succeed} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
