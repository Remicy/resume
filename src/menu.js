import React, { Component } from "react";
import "./style.css";
import Summary from "./summary";
import Skills from "./skills";
import Exp from "./exp";
import Game from "./game";

export default class menu extends Component {
  render() {
    return (
      <div className="menu">
        <img src="img/btn1.png" />
        <Summary />
        <img src="img/btn2.png" />
        <Skills />
        <img src="img/btn4.png" />
        <Game />
        <img src="img/btn3.png" />
        <Exp />
      </div>
    );
  }
}
