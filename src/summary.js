import React, { Component } from "react";
import "./style.css";

export default class summary extends Component {
  openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/1NKi1DBlItw_uiXlf404MyI_XxxyrreB3m-a9NtsVY4U/",
      "_blank"
    );
  };
  render() {
    return (
      <div>
        <div className="summary">
          <img className="img" src="img/portrait.png" />
          <img className="name" src="img/name.png" />
          <img
            className="contact"
            onClick={this.toggleContact}
            src="img/contact.png"
            onClick={this.openForm}
          />
        </div>
      </div>
    );
  }
}
