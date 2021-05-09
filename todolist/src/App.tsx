import React, { ChangeEvent, FC, useState } from "react";
import './App.css';
import TodoTask from "./Components/TodoTask";
import {ITask} from './interface'

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const hadleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "taskName"){
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete
      })
    );
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="InputContainer">
          <input 
            type="text" 
            placeholder="Task..." 
            value={task}
            onChange={hadleChange} 
            name="taskName"/>
          <input 
            type="number" 
            placeholder="DeadLine" 
            value={deadline}
            onChange={hadleChange}
            />
        </div>
        <button onClick={addTask}>추가하기</button>
      </div>
      <div className="todolist">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  );
};

export default App;
