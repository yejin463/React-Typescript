import React, { ChangeEvent, FC, useState } from "react";
import './App.css';
import {ITask} from './interface'

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const hadleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.name);
    if (event.target.name === "taskName"){
      console.log(event.target.value)
      setTask(event.target.value);
    } else {
      console.log(event.target.value);
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="InputContainer">
          <input type="text" placeholder="" onChange={hadleChange } name="taskName"></input>
          <input type="number" placeholder="DeadLine" onChange={hadleChange}></input>
        </div>
        <button onClick={addTask}>추가하기</button>
      </div>
      <div className="todolist"></div>
    </div>
  );
};

export default App;
