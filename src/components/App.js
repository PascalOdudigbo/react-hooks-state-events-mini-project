import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log(TASKS);
console.log(CATEGORIES);

function App() {
  const [tasks, setTask] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  function handleFilterTask(category, tasks = TASKS){
    
    const filteredTasks = tasks.filter(task => {
      if (category === "All") return true;
      return task.category === category;
    });
    setTask(filteredTasks)
  }

  function handleAddTask(newTask){
    setTask([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filterTask={handleFilterTask}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={tasks} setTask={setTask}/>
    </div>
  );
}

export default App;
