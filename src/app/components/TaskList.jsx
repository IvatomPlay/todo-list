"use client";

import styles from "./taskList.module.css"

export default function toDoList({tasks, onToggle, onDelete}) {
  return(
    <div className={styles.taskList}>
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id} className={styles.list_item}>
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span className={`${styles.tasks_text} ${task.completed ? styles.completed : ''}`}>{task.text}</span>
            <button
              className={styles.btn}
              onClick={() => onDelete(task.id)}
            >Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};