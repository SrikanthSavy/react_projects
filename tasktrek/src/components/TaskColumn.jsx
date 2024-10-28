import React from "react";
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

//const TaskColumn = (props) => {
const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  //const {title ,icon } = props  this will work : Obj descrturing

  return (
    <section>
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="To Do Icon" />
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
