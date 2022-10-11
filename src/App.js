import "./styles.css";
import React from "react";
import Clock from "react-live-clock";

function DebugTelemetry() {

  return (<div className="debug-telemetry">Debug</div>);
}

export default function App() {
  return (
    <div className="App">
      <DebugTelemetry/>
      <fieldset className="timing">
        <legend>Timer Display</legend>
        <Clock format="h:mm:ss" interval={1000} ticking={true} />
        <select>
          <option>
            {new window
              .Intl
              .DateTimeFormat()
              .resolvedOptions()
              .timeZone}
          </option>
        </select>
      </fieldset>
    </div>
  );
}
