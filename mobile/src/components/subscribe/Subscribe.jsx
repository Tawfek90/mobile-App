import React, { useEffect } from "react";
import "./subscribe.css";

export default function Subscribe() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="subscribe">
      <div className="subscribeContainer">
        <h3>subscribe our new sletter to be notified when it'll be alive</h3>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="email address" />
          <button type="submit">subscribe</button>
        </form>
      </div>
    </div>
  );
}
