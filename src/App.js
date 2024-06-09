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

  function handleReset() {
    setCurrentvalue(0);
    setRange(1);
  }

  function handleChange(value) {
    setCurrentvalue(value !== "" ? value : 0);
  }

  return (
    <main>
      <div className="scroller">
        <input
          className="scroll"
          type="range"
          min={1}
          max={10}
          onChange={(e) => setRange(Number(e.target.value))}
          defaultValue={1}
        />
        <label>{range}</label>
      </div>
      <div className="value-box">
        <button
          onClick={() =>
            range >= 1 ? setCurrentvalue(currentValue - range) : currentValue
          }
        >
          -
        </button>
        <input
          className="count-box"
          value={currentValue}
          type="text"
          onChange={(e) => handleChange(Number(e.target.value))}
          defaultValue={0}
        />
        <button
          onClick={() =>
            range >= 1 ? setCurrentvalue(currentValue + range) : currentValue
          }
        >
          +
        </button>
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
      {currentValue !== 0 ? (
        <div className="reset">
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
    </main>
  );
}
