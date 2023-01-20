
import React, { useState, useEffect} from "react";
import { Link } from "react-scroll";
import Button from "./Button";

function SearchView({table, columns}) {
    const [sortList, setSortList] = useState([]);
    const dataLists = [
        "Fname","Minit","Lname",
        "Bdate","Address","Sex","Salary","Super_ssn","Dno",]
    useEffect(() => {
            setSortList([]);
            columns.map((v)=> {
                    const index = dataLists.indexOf(v);
                    setSortList((currentArray) => {
                        if(currentArray.includes(v))
                        {
                          const uniqueArr = currentArray.filter((element) => element !== index);
                          return uniqueArr;
                        }
                        else{
                          const newArray = [...currentArray, index];
                          return newArray;
                        }
                      });
            })
            setSortList((current)=> current.sort());
        },[columns]);    
  return (
    <div>
    <table>
        <thead>
        {table.length === 0 ? <tr><th>데이터가 없습니다.</th></tr> : 
            <tr>
                {sortList?.map((v, idx) => (
                <th key={`${idx}-${v}`}>
                    {dataLists[v]}
                </th>
                ))}
                <th>Ssn</th>
                <th>찾아가기</th>
            </tr>}
        </thead>
        <tbody>
            <tr>
                {table?.map((v, idx) => (
                    <td key={`${idx}-${v}`} >
                        <div>{table[idx]}</div>
                    </td>
                    )) }
                    <td>
                        <Link to = {table[table.length-1]|| '/'} spy={true} smooth={true}>
                            {table.length === 0 ? null : <span className="likeButton">클릭</span> }
                        </Link>
                    </td>
            </tr>
        </tbody>
    </table>
    </div>
    );
}

export default SearchView;
