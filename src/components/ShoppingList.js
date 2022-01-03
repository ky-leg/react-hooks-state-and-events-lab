import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [filterBy, setFilterBy] = useState("All")
const displayItems = items.filter((food) => {
  if (filterBy === "All"){
    return true
  }
  else {
    return food.category === filterBy
  }
})

 
 

  // const itemList = displayItems.filter((food) => {
  //   if (food.category === filterBy){
  //     return true
  //   }
  // })
  console.log(filterBy)
  function handleChange(e){
    setFilterBy(e.target.value)
    console.log(filterBy)
    
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => handleChange(e)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
  
}

export default ShoppingList;
