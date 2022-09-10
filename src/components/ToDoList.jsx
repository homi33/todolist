import React, { useState } from "react";
import ListItemDelete from "./ListItemDelete";

const ToDoList = () => {
  const [inputList, setInputList] = useState(" ");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = (items) => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> 📓 ToDo List 📓 </h1>
        <br />
        <input
          type="text"
          placeholder="Add a Note"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}> + </button>
        <ol>
          {items.map((itemValue, index) => {
            return (
              <ListItemDelete
                id={index}
                key={index}
                text={itemValue}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
