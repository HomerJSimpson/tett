import "./styles.css";
import React from "react";
import Clock from "react-live-clock";

export default function App() {
  return (
    <div className="App">
      <Clock format="h:mm:ss" interval={1000} ticking={true} />
      <select>
        <option>
          {new window.Intl.DateTimeFormat().resolvedOptions().timeZone}{" "}
        </option>
      </select>
    </div>
  );
}
