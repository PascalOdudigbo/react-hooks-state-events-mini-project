import React, {useState} from "react";
import {nanoid} from 'nanoid';

function CategoryFilter({categories, filterTask}) {
  const [buttonClass, setButtonClass] = useState("");

  function handleButtonClick(event){
    if(event.target.className === ""){
      //setButtonClass(()=>"")
      event.target.className = "selected"
      filterTask(event.target.value);
    }

  }
  
  const displayCategories = categories.map(category => {
    const btnID = nanoid();
    return <button key={btnID} className ={buttonClass} onClick={handleButtonClick} value={category}>{category}</button>
  
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
