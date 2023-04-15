import React from "react";



const TodoList = (props) => {
const renderedTasks =  props.taskList.map((task) => {
    return (
        <div className="task" key = {task.id}>
        <span className="taskName" >{task.name}</span>
        <div className="btn-group">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    )
})

  return (
    <div className="tasks">
      { renderedTasks}
    </div>
  );
};

export default TodoList;
