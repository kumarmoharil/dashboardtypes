import React, { Component } from "react";
import classNames from "classnames";
import Header from "./Components/Header.js";
import CardContainer from "./Components/Cards/CardContainer";
import './Components/Cards/animation.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardContainer />
      </div>
    );
  }
}
export default App;
