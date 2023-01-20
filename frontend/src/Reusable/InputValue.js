import React from "react";
function InputValue({ value, onSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Write Fname..."
        />
      </form>
    </div>
  );
}

export default InputValue;
