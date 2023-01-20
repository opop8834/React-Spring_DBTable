
import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios"; // npm install axios

function ViewTable({table, parentUpdateFunction}) {
    const [isUpdate,setIsUpdate] = useState(false);
    const [updateMap, setUpdateMap] = useState(new Map());
    const onClick = async (idx, event) => {
    //   console.log(table[idx+3]);  // 삭제할 행의 PK인 Ssn을 보냄
      await axios
      .post("/api/delete", table[idx+3])
      .then((response) => {
        console.log("success");
        window.location.replace("/")
      })
      .catch((error) => {
        console.log(error);
      });
    };
    const handleInput = (idx, event) => 
    {
      setUpdateMap((prev) => new Map([...prev, [idx, event.target.innerText]]));
    }
    const onClickUp = () => {
      const tempMap = new Map(updateMap);
      if (tempMap.size > 0 && isUpdate)
      {
        parentUpdateFunction(tempMap);
      }
      setIsUpdate((current) =>  !current);
    };
  return (
    <div>
            <Button text={isUpdate ? "저장" : "수정하기"} onClick={onClickUp}></Button>
            <table>
        <thead>
            <tr>
                <th>Fname</th>
                <th>Minit</th>
                <th>Lname</th>
                <th>Ssn</th>
                <th>Bdate</th>
                <th>Address</th>
                <th>Sex</th>
                <th>Salary</th>
                <th>Super_ssn</th>
                <th>Dno</th>
                <th>Created</th>
                <th>Modified</th>
                <th>Remove</th>
            </tr>
        </thead>
            {table.map((v, idx) => (
            <tbody key={`${idx}-${v}`}>{idx % 12===0 ? 
                <tr><td onInput={(event)=>{handleInput(idx, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx]}</td>
                <td onInput={(event)=>{handleInput(idx+1, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+1]}</td>
                <td onInput={(event)=>{handleInput(idx+2, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+2]}</td>
                <td id={table[idx+3]}>{table[idx+3]}</td>
                <td onInput={(event)=>{handleInput(idx+4, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+4]}</td>
                <td onInput={(event)=>{handleInput(idx+5, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+5]}</td>
                <td onInput={(event)=>{handleInput(idx+6, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+6]}</td>
                <td onInput={(event)=>{handleInput(idx+7, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+7]}</td>
                <td onInput={(event)=>{handleInput(idx+8, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+8]}</td>
                <td onInput={(event)=>{handleInput(idx+9, event)}} contentEditable={isUpdate} suppressContentEditableWarning>{table[idx+9]}</td>
                <td>{table[idx+10]}</td>
                <td>{table[idx+11]}</td>
                <td><Button text="삭제" onClick={(event)=>{onClick(idx, event)}}/></td></tr> 
                : null}</tbody>
            ))}
    </table>
    </div>
    );
}

export default ViewTable;
