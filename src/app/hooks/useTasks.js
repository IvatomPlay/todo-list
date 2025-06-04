import { useState, useEffect } from 'react';

export default function useTasks() {

  const [tasks, setTasks] = useState([]);

  //loading from localStorage
    useEffect(() => {
      const storageTasks = localStorage.getItem('tasks');
      if (storageTasks) {
        setTasks(JSON.parse(storageTasks));
      }
    }, []);
  
    //upload changes in localStorage
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    return [tasks, setTasks];
}