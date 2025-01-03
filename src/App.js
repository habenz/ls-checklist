import styles from "./App.module.css";
import tasks from "./data/tasks.json";
import Task from "./Task";

function App() {
  return (
    <div className={styles.centered}>
      <h1 className={styles.content}>Checklist</h1>
      <Task task={{ ...tasks.opening[1], expanded: true }} />
    </div>
  );
}

export default App;
