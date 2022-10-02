import React from "react";

import "./input.css";

const Input = ({name="username",placeholder="Type in your username..",type="text"}) => {
  return (
    <div className="input-container">
      <label className="input_label" for={name}>
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        autocomplete="off"
        className="input_box"
        required
      />
    </div>
  );
};

export default Input;
