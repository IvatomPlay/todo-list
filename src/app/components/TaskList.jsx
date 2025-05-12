"use client";

import styles from "./taskList.module.css"

export default function toDoList({tasks, onToggle, onDelete}) {
  return(
    <div className={styles.taskList}>
      <ul className={styles.list}>
        {tasks.map(tasks => (
          <li key={tasks.id} className={styles.list_item}>
            <input 
              type="checkbox"
              checked={tasks.completed}
              onChange={() => onToggle(tasks.id)}
            />
            <span className={`${styles.tasks_text} ${tasks.completed ? styles.completed : ''}`}>{tasks.text}</span>
            <button
              className={styles.btn}
              onClick={() => onDelete(tasks.id)}
            >Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};