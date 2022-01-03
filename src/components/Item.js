import React, {useState} from "react";



function Item({ name, category }) {

  const [className, setClassName] = useState(false)

  function handleClick(e){
    setClassName(!className)
  }

  return (
    <li className={className ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={(e) => handleClick(e)}className="add">{className ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
