// src/TodoApp.js

import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoApp.css';
import './animations.css';  // Create and import a CSS file for animations

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TransitionGroup component="ul">
        {tasks.map((task, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="fade"
          >
            <li>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoApp;
