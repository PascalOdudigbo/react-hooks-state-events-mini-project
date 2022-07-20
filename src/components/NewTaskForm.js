import React, {useState} from "react";
import {nanoid} from 'nanoid';

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState("");
  const [newTaskCategory, setNewTaskCAtegory] = useState("");
  const displayCategories = categories.map(category => <option key={nanoid()} value={category}>{category}</option>);
  function handleOnChange(event){
    if(event.target.name === "text"){
      setNewTask(event.target.value);
    }
    else{
      setNewTaskCAtegory(event.target.value);
    }
    
  }
  function handleOnSubmit(event){
    event.preventDefault();
    //console.log(event);
    onTaskFormSubmit({
      text: newTask,
      category: newTaskCategory,
    });

  }
  return (
    <form className="new-task-form" onSubmit={handleOnSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleOnChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleOnChange}>
          {/* render <option> elements for each category here */}
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
