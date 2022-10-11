import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import Clock from "react-live-clock";
import Debug from 'debug';

const debug = Debug(__filename);

function DebugTelemetry() {
  const windowSize = monitorWindowSize();

  return (<div className="debug-telemetry">Debug
   <div>{`${windowSize.w}, ${windowSize.h}`}</div>
   </div>);
}

function monitorWindowSize() {
  const [windowSize, setWindowSize] = useState({ w: undefined, h: undefined });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      debug('tracking window size');
      // Set window width/height to state
      setWindowSize({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function App() {
  const [tasks, addTask] = useState([]);

  function startTask() {
    const taskName = window.prompt("Enter Task Name");
    debug(`task name "${taskName}"`);
    addTask(function() {
      return [...tasks, {name: taskName, ctm: new Date()}];
    })
  }

  return (
    <div className="App">
      <DebugTelemetry />
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
      <div className="currentTasks">
              <button onClick={startTask}>Start a task</button>
              <p>There are {tasks.length} tasks</p>
      </div>
      <ul>
        {tasks.map((task, index)=><li key={`${task.name}-${index}`}>{task.name}</li>)}
      </ul>
    </div>
  );
}
