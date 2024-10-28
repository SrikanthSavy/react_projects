# Geeks for Geeks react

https://www.geeksforgeeks.org/reactjs-lists/?ref=next_article

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Props

-> Props is a way to pass data from parent component to the child component. In props we can pass any type of data like string, number, boolean, array, object or even functions.
-> So for passing the props, in component we add attribute with any name then we can pass our value in it.
-> Now for getting the props value, we can pass props as parameter in the child component function. Remember this props is object. So we have to write props.tagName

# Handling multiple inputs with single function

Previously we have seen, how we have to create state variable and onChange function for each input field.

Here we have shortcut trick to do that.

import React, { useState } from "react";
import Tag from "./Tag";

import "./TaskForm.css";

const TaskForm = () => {
const [taskData, setTaskData] = useState({
task: "",
status: "todo",
});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
    };

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='task'
                    className='task_input'
                    placeholder='Enter your task'
                    onChange={handleChange}
                />

                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName='HTML' />
    					            <Tag tagName='CSS' />
    					            <Tag tagName='JavaScript' />
    						          <Tag tagName='React' />
                    </div>

                    <div>
                        <select
                            name='status'
                            className='task_status'
                            onChange={handleChange}>
                            <option value='todo'>To Do</option>
                            <option value='doing'>Doing</option>
                            <option value='done'>Done</option>
                        </select>
                        <button type='submit' className='task_submit'>
                            + Add Task
                        </button>
                    </div>
                </div>
            </form>
        </header>
    );

};

export default TaskForm;

# React StrictMode

React StrictMode is a tool provided by React that helps developers write better quality code by highlighting potential problems during development.

In react18 StrictMode is by default turned on and React renders each component twice but in production it will only render one time.

# Local Storage

Local Storage is like a browser database for storing some details for web applications. This local storage is different for every user.

So we can store here our tasks in local storage using localStorage.setItem() but make sure you store that array using JSON.stringify() because if we don’t convert our array in JSON string, then later we cann’t access it as array.

Now for getting item from local storage, we use localStorage.getItem() and then we have to convert that string in array using JSON.parse()

# Adding Fonts

There are two popular ways to add fonts in React:

Offline font file from our system

Font by CDN link (My favorite)

Here are some websites for use fonts for FREE:

google fonts

font squirrel
