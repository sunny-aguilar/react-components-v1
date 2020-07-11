// Import the React and ReactDom Libraries
import React from "react";
import faker from "faker";

// Create a react component
const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">
            Today at {faker.random.number() % 12}:{faker.random.number() % 10}
            {faker.random.number() % 10}PM
          </span>
        </div>
        <div className="text">{faker.lorem.sentence()}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
