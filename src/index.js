// Import Third party
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global CSS

function App() {
  return(
    <div className="app">
      <form className="form">
        <h2>Register form</h2>
        <input />
        <input />
        <input />
        <button>Submit</button>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
