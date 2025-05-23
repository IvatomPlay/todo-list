"use client";

import styles from "./page.module.css";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState([]);

  // function adding new task to the list
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // function set co,plete or not complete status to the tasks
  function taskComplete(id) {
    setTasks(tasks.map(tasks.id === id ? {...tasks, completed: !tasks.completed} : tasks));
  };
  
  // function to delete the task from the list 
  function deleteTask(id) {
    setTasks(tasks.filter(tasks => tasks.id !== id));
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>My Task list</h1>
      </header>
      <TaskInput 
        onAdd={addTask}
      />
      <TaskList 
        tasks={tasks} 
        onToggle={taskComplete} 
        onDelete={deleteTask}
      />
    </div>
  );
}
