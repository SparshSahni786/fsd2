import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h1 className="mb-4">Counter</h1>

            <div className="display-1 fw-bold mb-4">
              {count}
            </div>

            <div className="d-flex justify-content-center gap-2 mb-3">
              <button
                className="btn btn-outline-danger px-4"
                onClick={() => setCount(count - 1)}
              >
                - Decrement
              </button>

              <button
                className="btn btn-primary px-4"
                onClick={() => setCount(count + 1)}
              >
                + Increment
              </button>
            </div>

            <button
              className="btn btn-link text-secondary"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}