import React, { Component } from "react";
import { Box } from "./partsListStyle.js";
import Card from "./card.js";
class PartsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineList: [
        {
          name: "综合排序",
          class: "active"
        },
        {
          name: "销量排序",
          class: ""
        },
        {
          name: "价格低到高",
          class: ""
        },
        {
          name: "价格高到低",
          class: ""
        }
      ]
    };
  }
  render() {
    return (
      <Box className="store-content">
        <div className="sort-option">
          <ul className="line clear">
            {this.state.lineList.map((i, index) => (
              <li key={index}>
                <a className={i.class}>{i.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <Card></Card>
      </Box>
    );
  }
}

export default PartsList;
