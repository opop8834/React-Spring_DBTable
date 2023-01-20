import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Button from "./Reusable/Button";
import DB from "./DB";
import NewEmployee from "./NewEmployee";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((current) => !current);
  };
  return (
    <div className="App">
      <Home/>
      <Button text={showing ? "뒤로" : "새로운 직원 추가하기"} onClick={onClick}></Button>
      <br></br>
      <br></br>
      {!showing &&<DB/>}
      {showing && <NewEmployee/>}
    </div>
  );
}

export default App;
