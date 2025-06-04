"use client";

import styles from "./page.module.css";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import ThemeToggle from "@/components/ThemeToggle";
import useTasks from "@/hooks/useTasks";
// import { useEffect, useState, useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useTasks([]);

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
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };
  
  // function to delete the task from the list 
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>My Task list</h1>
        <ThemeToggle />
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
