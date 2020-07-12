// Import the React and ReactDom Libraries
import React from "react";

// Create a react component (access props here)
const ApprovalCard = () => {
  return (
    <div className="card">
      <div className="content">Are you sure?</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
