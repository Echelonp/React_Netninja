import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "Ryu",
    age: 30,
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
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="app-content">
        <h1>Hello, Para</h1>
        <p>My name is {this.state.name}</p>
        <button className="button" onClick={this.handelClick}>
          Click Me
        </button>
        <button onMouseOver={this.handelMouseOver}>Hover, Me!</button>

        <form className="form" onClick={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
