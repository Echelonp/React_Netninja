import React, { Component } from "react";

class Addninja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addNinja(this.state);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            className="input"
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={this.handleChange}
            className="input"
          ></input>
          <label htmlFor="belt">Belt</label>
          <input
            type="text"
            id="belt"
            onChange={this.handleChange}
            className="input"
          ></input>

          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
export default Addninja;
