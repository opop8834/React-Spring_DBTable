import React from "react";
import { useState, useCallback,useEffect } from "react";


function CheckBox({name, values, parentFunction}) {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {   // checklist가 업데이트 될때
    parentFunction(checkList);
  },[checkList]);

  const handleChange = e => {
    setCheckList((currentArray) => {
      if(currentArray.includes(e.target.value))
      {
        const uniqueArr = currentArray.filter((element) => element !== e.target.value);
        return uniqueArr;
      }
      else{
        const newArray = [...currentArray, e.target.value];
        return newArray;
      }
    }); //  ...을 써서 value를 currnt배열에 추가하는 함수를 만든다
  };
  const handleAllChange = e => {
    setCheckedAll((current)=> !current);
    setCheckList((currentArray) => {
      if(checkedAll)
      {
        const uniqueArr = [];
        return uniqueArr;
      }
      else{
        const idArray = [];
        values.forEach((el) => idArray.push(el));
        return idArray;
      }
    });
  };

  return (
    <div>
      {values?.map(value => (
        <span key={`${name}-${value}`}>
          <input
            type="checkbox"
            value={value}
            onChange={handleChange}
            checked={checkList.includes(value) ? true : false }
          />
          {" " + value + " "}
        </span>
      ))}
          <input
            type="checkbox"
            value="모두 선택"
            onChange={handleAllChange}
          />
          {checkedAll ? " 모두해제 " : " 모두선택 "}
    </div>
  );
}

export default CheckBox;