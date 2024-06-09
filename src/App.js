import { useState } from "react";
import "./app.css";

export default function App() {
  return (
    <div className="container">
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [range, setRange] = useState(1);
  const [currentValue, setCurrentvalue] = useState(0);

  const date = new Date("June 9 2024");
  date.setDate(date.getDate() + currentValue);

  function handleScroll(event) {
    setRange(parseFloat(event.target.value));
  }

  function handleClick(v) {
    if (range >= 1) {
      v
        ? setCurrentvalue(currentValue + range)
        : setCurrentvalue(currentValue - range);
    }
  }

  function handleChange(event) {
    setCurrentvalue(
      parseFloat(event.target.value !== "" ? event.target.value : 0)
    );
  }
  return (
    <main>
      <div className="scroller">
        <input
          className="scroll"
          type="range"
          min={1}
          max={10}
          onChange={handleScroll}
          defaultValue={1}
        />
        <label>{range}</label>
      </div>
      <div className="value-box">
        <button onClick={() => handleClick()}>-</button>
        <input
          className="count-box"
          value={currentValue}
          type="text"
          onChange={handleChange}
          defaultValue={0}
        />
        <button onClick={() => handleClick(true)}>+</button>
      </div>
      <div className="date-box">
        <p>
          {currentValue === 0
            ? "Today"
            : currentValue > 0
            ? `${currentValue} days from`
            : `${Math.abs(currentValue)} days ago was `}{" "}
          {date.toDateString()}
        </p>
      </div>
      <div className="reset">
        <button className="reset-button" onClick={() => setCurrentvalue(0)}>
          Reset
        </button>
      </div>
    </main>
  );
}
