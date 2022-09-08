import React, { useEffect } from "react";
import "./todoinput.css";
import { useGlobalcontext } from "./Context";

export default function TodoInput() {
  const { dealWithItems, inputValue, changeInputvalue, isEdit } =
    useGlobalcontext();
  const changeHandler = (e) => {
    changeInputvalue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dealWithItems();
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fa-solid fa-book"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control mx-3 text-capitalize "
            placeholder="add a todo item"
            value={inputValue}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className={` add-items btn btn-block text-white my-3  ${
            isEdit ? "btn-success" : "btn-primary"
          }`}
        >
          {isEdit ? "edit item" : "add item"}
        </button>
      </form>
    </div>
  );
}
