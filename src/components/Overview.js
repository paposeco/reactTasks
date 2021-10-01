import React from "react";

const Overview = function (props) {
  // nao percebo {}
  const { tasks } = props;
  //  const {deleteTaskMaybe} =

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={task.id}>
            Task {task.tasknumber}: {task.text};
            <button
              id={"delBtn" + task.tasknumber}
              onClick={() => this.props.deleteTask(task.tasknumber)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;

//so estou a receber o array aqui. para receber o metodo tb tenho d eo meter no outro lado mas nao sei bem como
