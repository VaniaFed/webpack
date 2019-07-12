import React from "react";

export const FormCreateMenuItem = ({ onClick, changeInputValue }) => (
  <div>
    <input
      type="text"
      onChange={e => {
        changeInputValue(e.target.value);
      }}
    />
    <button onClick={onClick}>Create</button>
  </div>
);
