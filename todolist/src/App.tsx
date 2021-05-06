import React, { FC } from "react";
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <div className="InputContainer">
          <input type="text" placeholder=""></input>
          <input type="number" placeholder="DeadLine"></input>
        </div>
        <button>추가하기</button>
      </div>
      <div className="todolist"></div>
    </div>
  );
};

export default App;
