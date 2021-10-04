import React from "react";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edittask: {
        text: "",
        //  text: this.props.task.test,
      },
    };
    this.handlerOfChange = this.handlerOfChange.bind(this);
  }

  handlerOfChange = function (event) {
    this.setState({
      edittask: {
        text: event.target.value,
      },
    });
  };

  // acho que tem de ser com hooks
  render() {
    const { edittask } = this.state;
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          const editStatus = task.edit;
          if (editStatus) {
            return (
              <li key={task.id}>
                <input
                  type="text"
                  value={edittask.text}
                  onChange={this.handlerOfChange}
                />
                <button onClick={() => this.props.deleteTaskPlease(task.id)}>
                  Delete
                </button>
                <button onClick={() => this.props.editTask(task)}>Save</button>
              </li>
            );
          } else {
            return (
              <li key={task.id}>
                Task {task.tasknumber}: {task.text}
                <button onClick={() => this.props.deleteTaskPlease(task.id)}>
                  Delete
                </button>
                <button onClick={() => this.props.editTask(task)}>Edit</button>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

//Functional Component
// receives a function from app and runs on click and takes the task id with it

// const Overview = function (props) {
//   const handlerOfChange = function (event) {
//     console.log(event.target);
//   };

//   return (
//     <ul>
//       {props.tasks.map((task, index) => {
//         const editStatus = task.edit;
//         if (editStatus) {
//           return (
//             <li key={task.id}>
//               <input
//                 type="text"
//                 value={task.text}

//               />
//               <button onClick={() => props.deleteTaskPlease(task.id)}>
//                 Delete
//               </button>
//               <button onClick={() => props.editTask(task)}>Save</button>
//             </li>
//           );
//         } else {
//           return (
//             <li key={task.id}>
//               Task {task.tasknumber}: {task.text}
//               <button onClick={() => props.deleteTaskPlease(task.id)}>
//                 Delete
//               </button>
//               <button onClick={() => props.editTask(task)}>Edit</button>
//             </li>
//           );
//         }
//       })}
//     </ul>
//   );
// };

// return (
//   <ul>
//     {props.tasks.map((task, index) => {
//       const editstatus = task.edit;
//       return (
//         <li key={task.id}>
//           {editstatus? "Task" {task.tasknumber}: {task.text}} : {kkk} };
//           <button onClick={() => props.deleteTaskPlease(task.id)}>
//             Delete
//           </button>
//           <button onClick={() => prop.editTask(task)}>Edit</button>
//         </li>
//     );
//                     })}
//   </ul>
// );

export default Overview;
