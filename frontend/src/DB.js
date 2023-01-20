import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import InputValue from "./Reusable/InputValue";
import CheckBox from "./Reusable/CheckBox";
import axios from "axios"; // npm install axios
import ViewTable from "./Reusable/ViewTable";
import Button from "./Reusable/Button";
import SearchView from "./Reusable/SearchView";

function Db() {
  const [viewSearch, setViewSearch] = useState(false);
  const [searchTP, setSearchTP] = useState([]);
  const [message, setMessage] = useState([]);
  const [table, setTable] = useState([]);
  const [searchTable, setSearchTable] = useState([]);
  const [hello, setHello] = useState("");
  const [InputV, setInputV] = useState("");
  const [sendCheckList,setSendCheckList] = useState([]);
  const [obj, setObj] = useState({});
  const dataLists = [
  "Fname","Minit","Lname",
  "Bdate","Address","Sex","Salary","Super_ssn","Dno",]
  const parentFunction = (x) => {   // child인 checkbox에서 부모인 DB로 props를 보내기 위한 함수정의
    setSendCheckList(x);
  };
  const parentUpdateFunction = (tempMap) => {   // child인 viewtable에서 부모인 DB로 props를 보내기 위한 함수정의
    const updateKey = [...tempMap.keys()];  // key값들 저장
    updateKey.map((key) => {
      const temp = Math.floor(key / 12); 
      const tempSsn = temp * 12 + 3;
      const result = `${key},${table[tempSsn]}`;
      setObj((current) =>{
        return {...current,
          [result]: tempMap.get(key)
          // table의 인덱스에 따른 ssn도 object에 추가하기
        }})
      })
  };
  const onClickSendUp = async () => {
    await axios
      .post("/api/update", obj)
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
    
  }

  const onChangeValue = (event) => {
    setInputV(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (InputV === "") {
      return;
    }
    const Ssnlist = [...sendCheckList, "Ssn"]; 
    const tempList = [...Ssnlist, InputV];   // check한 리스트와 이름 값 추가해서 보냄
    await axios
      .post("/api/search", tempList)
      .then((response) => {
        axios
          .get("/api/search/value")
          .then((response) => {
            console.log("success");
            setViewSearch(true);
            setSearchTP(sendCheckList);
            setSearchTable(response.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
    setInputV("");
  };

  useEffect(() => {
    fetch("/table")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTable(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <CheckBox name="Employee Table columns"
        values={dataLists}
        parentFunction={parentFunction}/>
        <br></br>
        <InputValue
          value={InputV}
          onChange={onChangeValue}
          onSubmit={onSubmit}
        ></InputValue>
        <br></br>
        <br></br>
        <p>{hello}</p>

        <ul className="table">
          {message.map((v, idx) => (
            <p key={`${idx}-${v}`}>{v} </p>
          ))}
          {viewSearch & sendCheckList ===  searchTP? <SearchView table={searchTable} parentUpdateFunction={parentUpdateFunction} columns={sendCheckList}></SearchView> : null}
          <Button text="수정 내역 반영" onClick={onClickSendUp}></Button>
          <ViewTable table={table} parentUpdateFunction={parentUpdateFunction}></ViewTable>
        </ul>
      </header>
    </div>
  );
}

export default Db;
