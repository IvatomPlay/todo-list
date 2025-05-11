"use client";

import styles from "./addTask.module.css";
import { useState } from "react";

export default function addTask({onAdd}) {

  const [text, setText] = useState('');

  function handleSubmit(element) {
    element.preventDefault();
    if(!text.trim()) return;
    onAdd(text);
    setText('');
  }

  return(
    <form 
      className={styles.form} 
      onSubmit={handleSubmit}
      >
      <input 
        className={styles.textField} 
        type="text" 
        value={text}
        onChange={(element) => setText(element.target.value)}
        placeholder="Type the task please" 
        required
      />
      <button 
        className={styles.btn}
        type="submit"
      >
        Add Task
      </button>
    </form> 
  );
};