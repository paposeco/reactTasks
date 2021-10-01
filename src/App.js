import React from "react";
import Overview from "./components/Overview.js";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        text: "",
        id: uniqid(),
        //o tasknumber começa a 0 e so adiciono um no submit pq o set change do input corre de cada vez que se escreve uma letra, e estava sempre a adicionar +1
        tasknumber: 0,
      },
      arrayoftasks: [],
      deleteTask: this.deleteTask.bind(this),
    };
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
  }
  handlerOfChange = function (event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
        tasknumber: this.state.task.tasknumber,
      },
    });
  };

  handlerOfSubmit = function (event) {
    event.preventDefault();
    this.setState({
      arrayoftasks: this.state.arrayoftasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
        tasknumber: this.state.task.tasknumber + 1,
      },
    });
  };

  deleteTask = function (atask) {
    this.setState({
      arrayoftasks: this.state.arrayoftasks.splice(atask, 1),
    });
  };

  render() {
    // nao percebo bem estas cosntantes antes do return
    const { task, arrayoftasks } = this.state;

    return (
      <div>
        <h1>Create a list of tasks</h1>
        <form onSubmit={this.handlerOfSubmit}>
          <label>
            Task:
            <input
              type="text"
              onChange={this.handlerOfChange}
              value={
                task.text
              } /* ao colocar isto aqui, quando se corre a funciona de submit, faz se clear ao text da task e limpa o input*/
            />
          </label>
          <input type="submit" value="Add task" />
        </form>
        <Overview tasks={arrayoftasks} deleteTaskMaybe={deleteTask} />
      </div>
    );
  }
}

export default App;
