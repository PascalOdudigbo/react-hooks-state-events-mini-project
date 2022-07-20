import React from "react";
import Task from "./Task";
import { nanoid } from 'nanoid' 

function TaskList({tasks, setTask}) {
  //console.log(tasks)
  
  
  const displayTasks = tasks.map(task=>{
    const taskId = nanoid();
    const text = task.text
    return <Task 
    key={taskId} 
    category={task.category} 
    text={text}
    tasks={tasks}
    setTask={setTask}
    deleteTask={text} 
   />
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
