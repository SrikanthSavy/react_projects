import React, { useState } from "react";

const CreateToDo = () => {
  //let tasks = 0;
  /*const countArr = useState(0);
  const count = countArr[0];
  const setCount = countArr[1];
*/
  //useState -hook with Array descrution assigning
  const [count, setCount] = useState(0);
  const [input, setinput] = useState(" ");
  //Handle click event
  const handleClick = () => {
    //tasks++;
    setCount(count + 1);
    //console.log("Add Task", count);
  };

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  //Showinf an Array using Map()
  const tasks = ["Task1", "Task2", "Task3"];

  return (
    <React.Fragment>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Task Add">
        Add Task
      </button>
      <h1>User ENtered : {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

/*const CreateToDo = () => {
  const styles = {
    backgroundColor: "red",
  };

  const tasks = 2;
  const isHide = false;
  const countTask = () => {
    return tasks == 0 ? "No Task Avilable" : `Total Tasks: ${tasks}`;
  };
  return (
    <>
      <h1>Total Tasks: {tasks}</h1>
      <h1 style={styles}> {countTask()}</h1>
      <button disabled={isHide} value="Task Add">
        Add Task
      </button>
    </>
  );
};*/
/*const CreateToDo = () => {
  return (
    <React.Fragment>
      <h1>Create new todo from here</h1>
      <button>Add Task</button>
    </React.Fragment>
  );
};
*/
export default CreateToDo;
