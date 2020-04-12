import React from "react";

const Ninja = ({ ninjas }) => (
  <div className="ninja-list">
    {/* <div>{console.log()}</div> */}
    {ninjas.map((ninja) => (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    ))}
  </div>
);

export default Ninja;
