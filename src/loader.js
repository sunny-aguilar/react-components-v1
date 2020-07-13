// Import the React and ReactDom Libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const Loader = (props) => {
  return (
    <div class="ui segment">
      <p></p>
      <div class="ui active dimmer">
        <div class="ui large text loader">Loading form</div>
      </div>
    </div>
  );
};

// return component
export default Loader;
