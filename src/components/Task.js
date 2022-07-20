import React from "react";

function Task({category, text, tasks, setTask, deleteTask}) {
  function handleTaskDeletion(){
    const filteredTasks = tasks.filter(task=>{
      return task.text !== deleteTask;
    })
    setTask(filteredTasks);
    
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick ={handleTaskDeletion} className="delete">X</button>
    </div>
  );
}

export default Task;
