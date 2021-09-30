import React from "react";
import Overview from "./components/Overview.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newtask: "" };
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
  }
  handlerOfChange = function (event) {
    this.setState({ newtask: event.target.value });
  };

  handlerOfSubmit = function (event) {
    event.preventDefault();
    // isto esta mal
    <Overview taskdescription="oi" />;
    //    <Overview taskdescription={this.state.newtask} />;
  };

  //value={this.state.value} no input text according to react mas afinal nao é preciso

  render() {
    return (
      <div>
        <h1>Create a list of tasks</h1>
        <form onSubmit={this.handlerOfSubmit}>
          <label>
            Task:
            <input type="text" onChange={this.handlerOfChange} />
          </label>
          <input type="submit" value="Add task" />
        </form>
      </div>
    );
  }
}

export default App;
