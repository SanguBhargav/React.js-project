import { useState } from "react";

export default function HideOutput() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Output" : "Show Output"}
      </button>

      {show && (
        <div>
          <h2>Student Details</h2>
          <p>Name: Swami</p>
          <p>Course: CSE</p>
        </div>
      )}
    </div>
  );
}