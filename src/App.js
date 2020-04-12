import React, { Component } from "react";
import "./App.css";
import Ninja from "./Ninja";
import Addninja from "./Addninja.js";

class App extends Component {
  state = {
    ninjas: [
      { name: "Para", age: "20", belt: "white", id: 1 },
      { name: "Chuda", age: "22", belt: "Black", id: 2 },
      { name: "Sek", age: "15", belt: "Yellow", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    // console.log(this.state.ninjas);
    // console.log(ninjas);
    this.setState({
      ninjas: ninjas,
    });
  };
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
    // console.log(ninjas);
  };

  render() {
    return (
      <div className="app-content">
        <Ninja
          ninjas={this.state.ninjas}
          deleteNinja={this.deleteNinja}
        ></Ninja>
        <Addninja addNinja={this.addNinja}></Addninja>
      </div>
    );
  }
}

export default App;
