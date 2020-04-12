import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "Ryu",
    age: 30,
    belt: null,
  };

  handelClick = (e) => {
    console.log(e.target);
    this.setState({
      name: "Paradorn",
    });
  };
  handelMouseOver = (e) => {
    console.log(e.pageX);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submited");
    console.log(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="app-content">
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange}></input>

          <label htmlFor="name">Age: </label>
          <input type="number" id="age" onChange={this.handleChange}></input>

          <label htmlFor="name">Belt: </label>
          <input type="text" id="belt" onChange={this.handleChange}></input>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
