// Import the React and ReactDom Libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard.js";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      {/* JSX comment */}
      {/* JSX components are treated as tags */}
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          img={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        img={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        img={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
    </div>
  );
};
// {faker.name.firstName()}
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
