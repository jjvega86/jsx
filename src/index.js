// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component

const getTime = () => {
    return (new Date().toLocaleTimeString())

}

const App = () => {
  const buttonText = { text: "Click me" };
  return (
    <div>
    <h3>Current Time: {getTime()}</h3>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
