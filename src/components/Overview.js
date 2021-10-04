import React from "react";

const Overview = function (props) {
  //  nao percebo {}
  return (
    <ul>
      {props.tasks.map((task, index) => {
        return (
          <li key={task.id}>
            Task {task.tasknumber}: {task.text};
            <button
              id={"delBtn" + task.tasknumber}
              onClick={() => props.deleteTaskPlease(task.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// const NewFunctionalComponent = (props) => {
//   return (
//     <div>
//       <button onClick={() => props.noClickMe()}>No, Click Me!</button>
//     </div>
//   );
// };
// class Overview extends React.Component {
//   render() {
//     const { tasks } = this.props;
//     return (
//       <ul>
//         {tasks.map((task, index) => {
//           console.log(task, index);
//           <li key={task.id}>
//             Task {task.tasknumber}: {task.text};
//             <button
//               id={"delBtn" + task.tasknumber}
//               onClick={() => this.props.deleteTaskPlease(task)}
//             >
//               Delete
//             </button>
//           </li>;
//         })}
//       </ul>
//     );
//   }
// }

export default Overview;

//so estou a receber o array aqui. para receber o metodo tb tenho d eo meter no outro lado mas nao sei bem como
