import React from "react";

//Functional Component
// receives a function from app and runs on click and takes the task id with it
const Overview = function (props) {
  return (
    <ul>
      {props.tasks.map((task, index) => {
        return (
          <li key={task.id}>
            Task {task.tasknumber}: {task.text};
            <button onClick={() => props.deleteTaskPlease(task.id)}>
              Delete
            </button>
            <button onclick={() => props.editTask(task.id)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
