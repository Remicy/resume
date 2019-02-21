import React, { Component } from "react";
import "./style.css";
import Menu from "./menu";

export default class resume extends Component {
  render() {
    return (
      <div className="resume">
        <span id="contactPage" />
        <div>
          <Menu />
        </div>
      </div>
    );
  }
}
