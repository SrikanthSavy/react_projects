import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/Taskform";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  //Getting tasks array from localStorage
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  //const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState(JSON.parse(tasksFromLocalStorage) || []);
  console.log("Appjsx tasks:", tasks);

  //storing tasks on "local Storage" whenever there is a "task" change

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Handlling delete function
  const handleDelete = (taskIndex) => {
    const afterDeleteTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(afterDeleteTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks}> </TaskForm>
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          te
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
