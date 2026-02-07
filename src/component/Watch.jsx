import React, { useEffect, useState } from "react";


export default function Watch() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setSec(0);
  };

  return (
    <div className="watchBox">
      <h2 className="title">Watch</h2>
      <h2 className="timer">Timer: {sec}s</h2>

      <div className="btnRow">
        <button className="btn start" onClick={handleStart}>
          Start
        </button>
        <button className="btn stop" onClick={handleStop}>
          Stop
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
