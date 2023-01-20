import React, { useState, useEffect } from "react";
import Button from "./Reusable/Button";
import InputNewEmployee from "./Reusable/InputNewEmployee";
import axios from "axios"; // npm install axios

function NewEmployee() {
    const [InputV, setInputV] = useState({
      Fname : '',
      Minit : '',
      Lname : '',
      Ssn : '',
      Bdate : '',
      Address : '',
      Sex : '',
      Salary : '',
      Super_ssn : '',
      Dno : '',
    });
    const [sendList,setSendList] = useState([]);
    const [searchTable, setSearchTable] = useState([]);

    const onChangeValue = (event) => {
        setInputV((current) => {
          return {...current,   // 기존에 저장되어 있는 값을 불러오고 저장할 것
          [event.target.name]: event.target.value}
        });
      };

    const onSubmit = async (event) => {
      event.preventDefault();
      if (InputV.Fname === "" ||
      InputV.Minit === "" ||
      InputV.Lname === "" ||
      InputV.Ssn === "" ||
      InputV.Sex === "" ||
      InputV.Super_ssn === "" ||
      InputV.Dno === ""||
      InputV.Bdate === "" ||
      InputV.Address === "" ||
      InputV.Salary === "") {
          return;
      }
      await axios
          .post("/api/insert", InputV)
          .then((response) => {
          console.log("success");
        console.log(InputV);
          });
      setInputV({
        Fname : '',
        Minit : '',
        Lname : '',
        Ssn : '',
        Bdate : '',
        Address : '',
        Sex : '',
        Salary : '',
        Super_ssn : '',
        Dno : '',
      });
    };
  return (
    <div className="App">
        <InputNewEmployee value={InputV}
          onChange={onChangeValue}
          onSubmit={onSubmit}/>
    </div>
  );
}

export default NewEmployee;
