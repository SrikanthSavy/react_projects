import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

//Destructuring Obhject , sent from App.jsx
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const HandleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target; //Lets use Object Destructure

    // console.log(e.target);
    // console.log(name, value);

    // Now we need to set this new data(new obj) in current obj i.e. task or status
    // "prev" = contains the taskData previous object
    //As we need to only update the [name] to corresponding value . This can be done as [name]:value
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectTag = (tag) => {
    //2 conditions 1) if tag is already available
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag); // remove if tag is already present
      //now set this to setTaskData.tags
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      //2) if the tag is not availabe
      setTaskData((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        };
      });
    }
    //console.log(tag);
  };
  //console.log(taskData.tags);

  // To Add Styling effect to selected Tags
  //We check if the tag is available in the TaskData.tags array using some()
  //Then pass its value to each <TAG> element
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  //create a new function to handle form Submit
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    //console.log(taskData);

    setTasks((prev) => {
      return [...prev, taskData]; //Adding the new Task
    });

    //reseting thr form after submit
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  /*const [task, setTask]     = useState("");
  const [status, setStatus] = useState("todo");
  //function to handle Input Box onChange
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  //function to handle Select dropdown onChange
  const handleTagChange = (e) => {
    setStatus(e.target.value);
  };*/
  // console.log(`Task: ${task} && Status : ${status}`);
  return (
    <header className="app_header">
      <form onSubmit={HandleFormSubmit}>
        <input
          name="task"
          type="text"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          // onChange={handleTaskChange}
          onChange={HandleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            ></Tag>
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            ></Tag>
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            ></Tag>
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            ></Tag>
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={HandleChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
