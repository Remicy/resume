import React, { Component } from "react";
import "./style.css";

export default class game extends Component {
  state = {
    urlArr: [
      "https://remicy.itch.io/44-room",
      "https://remicy.itch.io/abandoned-planet",
      "https://remicy.itch.io/lifenodes",
      "https://remicy.itch.io/legend-of-destiny",
      "https://remicy.itch.io/lab-493",
      "https://remicy.itch.io/shift-heroes"
    ]
  };
  openURL = e => {
    window.open(this.state.urlArr[parseInt(e.target.id) - 1], "_blank");
  };
  render() {
    return (
      <div className="games">
        <img className="img" src="img/gamed.png" />
        <br />
        <br />
        <img src="img/44.png" id="1" className="game" onClick={this.openURL} />
        <img src="img/ap.jpg" id="2" className="game" onClick={this.openURL} />
        <img
          src="img/lifenodes.jpg"
          id="3"
          className="game"
          onClick={this.openURL}
        />
        <br />
        <img src="img/lod.png" id="4" className="game" onClick={this.openURL} />
        <img src="img/493.png" id="5" className="game" onClick={this.openURL} />
        <img src="img/sh.jpg" id="6" className="game" onClick={this.openURL} />
      </div>
    );
  }
}
