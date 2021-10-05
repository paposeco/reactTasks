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
        tasknumber: 1,
        savedtasknumber: 0,
        edit: 0,
        saveindex: -1,
      },
      arrayoftasks: [],
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.editTask = this.editTask.bind(this);
  }
  handlerOfChange = function (event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
        tasknumber: this.state.task.tasknumber,
        edit: this.state.task.edit,
        savedtasknumber: this.state.task.savedtasknumber,
        saveindex: this.state.task.saveindex,
      },
    });
  };

  handlerOfSubmit = function (event) {
    event.preventDefault();

    if (this.state.task.edit === 0) {
      this.setState({
        arrayoftasks: this.state.arrayoftasks.concat(this.state.task),
      });
    } else {
      const arrayOfExistingTasks = this.state.arrayoftasks;
      let startingIndex;
      if (this.state.task.saveindex !== -1) {
        startingIndex = this.state.task.saveindex;
      } else {
        startingIndex = this.state.task.tasknumber;
      }
      arrayOfExistingTasks.splice(startingIndex, 0, this.state.task);
      this.setState({
        arrayoftasks: arrayOfExistingTasks,
      });
    }

    if (this.state.task.savedtasknumber > this.state.task.tasknumber) {
      this.setState({
        task: {
          text: "",
          edit: 0,
          id: uniqid(),
          tasknumber: this.state.task.savedtasknumber,
          savedtasknumber: this.state.task.savedtasknumber,
          saveindex: -1,
        },
      });
    } else {
      this.setState({
        task: {
          text: "",
          edit: 0,
          id: uniqid(),
          tasknumber: this.state.task.tasknumber + 1,
          savedtasknumber: this.state.task.savedtasknumber,
          saveindex: -1,
        },
      });
    }
  };

  editTask = function (atask) {
    const currentarrayoftasks = this.state.arrayoftasks;
    const locationoftask = currentarrayoftasks.findIndex(
      (element) => element === atask
    );
    this.setState({
      task: {
        text: atask.text,
        id: atask.id,
        savedtasknumber: this.state.task.tasknumber,
        tasknumber: atask.tasknumber,
        edit: 1,
        saveindex: locationoftask,
      },
    });
    this.deleteTask(atask.id);
  };

  deleteTask = function (ataskid) {
    const currentarray = this.state.arrayoftasks;
    const newarray = currentarray.filter((task) => task.id !== ataskid);
    this.setState({
      arrayoftasks: newarray,
    });
  };

  render() {
    const { task, arrayoftasks } = this.state;
    if (task.edit === 1) {
      return (
        <div>
          <h1>Create a list of tasks</h1>
          <form onSubmit={this.handlerOfSubmit}>
            <label>
              Task:
              <input
                type="text"
                onChange={this.handlerOfChange}
                value={task.text}
              />
            </label>
            <input type="submit" value="Save" />
          </form>

          <Overview
            tasks={arrayoftasks}
            deleteTaskPlease={this.deleteTask}
            editTask={this.editTask}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Create a list of tasks</h1>
          <form onSubmit={this.handlerOfSubmit}>
            <label>
              Task:
              <input
                type="text"
                onChange={this.handlerOfChange}
                value={task.text}
                /* ao colocar isto aqui, quando se corre a funciona de submit, faz se clear ao text da task e limpa o input */
              />
            </label>
            <input type="submit" value="Add task" />
          </form>

          <Overview
            tasks={arrayoftasks}
            deleteTaskPlease={this.deleteTask}
            editTask={this.editTask}
          />
        </div>
      );
    }
  }
}

export default App;
