import React from "react";

const ListItemDelete = (props) => {
  return (
    <div className="todo_style">
      <li>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        {props.text}
      </li>
    </div>
  );
};

export default ListItemDelete;
