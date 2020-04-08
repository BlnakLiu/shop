import React, { Component } from "react";
import Head from "../head/head.js";
import PartsList from "../partsList/partsList.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Head></Head>
        <PartsList></PartsList>
      </div>
    );
  }
}

export default Home;
