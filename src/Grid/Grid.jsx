import React, { useState } from "react";
import "./grid2.css"

const Grid = () => {
  const size = 3; // 3x3 grid
  const initialGrid = Array(size * size).fill(false);
  const [lights, setLights] = useState(initialGrid);

  const toggleLight = (index) => {
    const updated = [...lights];
    updated[index] = !updated[index];
    setLights(updated);
  };

  return (
    <div className="grid">
      {lights.map((on, i) => (
        <div
          key={i}
          className={`cell ${on ? "on" : "off"}`}
          onClick={() => toggleLight(i)}
          />
      ))}
    </div>
  );
};

export default Grid;