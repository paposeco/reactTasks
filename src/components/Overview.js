import React from "react";

class Overview extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li>{this.props.taskdescription}</li>
        </ul>
      </div>
    );
  }
}

export default Overview;
