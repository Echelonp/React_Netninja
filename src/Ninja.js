import React from "react";

const Ninja = ({ ninjas, deleteNinja }) => (
  <div className="ninja-list">
    {/* <div>{console.log()}</div> */}
    {ninjas.map((ninja) => (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => deleteNinja(ninja.id)}>Delete Data</button>
      </div>
    ))}
  </div>
);

export default Ninja;
