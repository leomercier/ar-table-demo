import React, { Component } from "react";
import { render } from "react-dom";

import image from "./assets/images/table.png";
import table from "./assets/images/WoodenTabletexture.usdz";

import "./index.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "React/Parcel Starter"
    };
  }
  render() {
    return (
      <div className="App">
        <a href="https://www.crowdform.co.uk/" className="crowdform">
          Crowdform
        </a>
        <p>Circular Side Table AR Demo</p>
        <a href={table}>
          <img src={image} alt="wooden table" />
          {/* https://www.theinvisiblecollection.com/wp-content/uploads/2019/04/TheInvisibleCollection_ETEL_Gregori_Warchavchik_CircularTable-485x485.jpg */}
        </a>

        <p>
          Tap the 3D model below on a device running iOS 12 or later to view the
          object and place it in AR. Or click a model on Mac to download the
          USDZ file.
        </p>
        <a href="mailto:hello@crowdform.co.uk">hello@crowdform.co.uk</a>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
