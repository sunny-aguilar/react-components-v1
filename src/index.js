// Import the React and ReactDom Libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      {/* JSX components are treated as tags */}
      <CommentDetail author={faker.name.firstName()} />
      <CommentDetail author={faker.name.firstName()} />
      <CommentDetail author={faker.name.firstName()} />
    </div>
  );
};
// {faker.name.firstName()}
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
