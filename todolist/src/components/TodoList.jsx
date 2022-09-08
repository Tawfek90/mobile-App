import React from "react";
import TodoItem from "./TodoItem";
import { useGlobalcontext } from "./Context";
export default function TodoList() {
  const { list, clearItems } = useGlobalcontext();

  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todolist</h3>
      {list.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
      {list.length > 0 && (
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={() => clearItems()}
        >
          clear list
        </button>
      )}
    </ul>
  );
}
