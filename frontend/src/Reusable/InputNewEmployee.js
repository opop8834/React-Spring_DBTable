import React from "react";
function InputNewEmployee({ value, onSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value.Fname}
          onChange={onChange}
          type="text"
          placeholder="Fname..."
          name="Fname"
        />
        <input
          value={value.Minit||""}
          onChange={onChange}
          type="text"
          placeholder="Minit..."
          name="Minit"
        />
        <input
          value={value.Lname||""}
          onChange={onChange}
          type="text"
          placeholder="Lname..."
          name="Lname"
        />
        <br></br>
        <input
          value={value.Ssn||""}
          onChange={onChange}
          type="number"
          placeholder="Ssn..."
          min='100000000' max='999999999'
          name="Ssn"
        />
        <input
          value={value.Bdate||""}
          onChange={onChange}
          type="date"
          placeholder="Bdate..."
          name="Bdate"
        />
        <input
          value={value.Address||""}
          onChange={onChange}
          type="text"
          placeholder="Address..."
          name="Address"
        />
        <br></br>
        <input
          value={"M"||""}
          onChange={onChange}
          id = "male"
          type="radio"
          placeholder="Sex..."
          name="Sex"
        />
          <label htmlFor="male">Male</label>
        <input
          value={"F"||""}
          onChange={onChange}
          type="radio"
          id = "female"
          placeholder="Sex..."
          name="Sex"
        />
          <label htmlFor="female">Female</label><br></br>
        <input
          value={value.Salary||""}
          onChange={onChange}
          type="text"
          placeholder="Salary..."
          name="Salary"
        />
        <input
          value={value.Super_ssn||""}
          onChange={onChange}
          type="text"
          placeholder="Super_ssn..."
          name="Super_ssn"
        />
        <input
          value={value.Dno||""}
          onChange={onChange}
          type="text"
          placeholder="Dno..."
          name="Dno"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default InputNewEmployee;
