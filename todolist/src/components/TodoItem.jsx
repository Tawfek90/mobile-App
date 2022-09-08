import React from "react";
import { useGlobalcontext } from "./Context";
export default function TodoItem({ item }) {
  const { deleteItem, modifyInputValue } = useGlobalcontext();
  const { id, itemCategory } = item;
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between ">
      <h3>{itemCategory}</h3>
      <div className="todo-icon">
        <span
          className="mx-2 text-success"
          onClick={() => {
            modifyInputValue(itemCategory, id);
          }}
        >
          <i className="fas fa-pen" />
        </span>
        <span className="mx-2 text-danger">
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              deleteItem(id);
            }}
          ></i>
        </span>
      </div>
    </li>
  );
}
