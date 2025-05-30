import styles from "./taskList.module.css"

export default function switchTheme() {
  return(
    <button className={styles.btn}>Switch Theme</button>
  );
}