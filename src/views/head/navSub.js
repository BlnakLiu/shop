import React from "react";
import { Sub } from "./navSubStyle.js";
const NavSub = function(props) {
  return (
    <Sub>
      <div className="nav-sub-wrapper">
        <div className="container">
          <ul className="nav-list">
            {props.subList.map((i, index) => (
              <li key={index} className={i.class}>
                <a>{i.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sub>
  );
};

export default NavSub;
