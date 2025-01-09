import styles from "./App.module.css";
import tasks from "./data/tasks.json";
import Task from "./Task";
import { initializeChecklist } from "./initializeFromJson";

const closingChecklist = initializeChecklist(tasks.Closing);

function App() {
  return (
    <div className={styles.centered}>
      <h1 className={styles.content}>Checklist</h1>
      {closingChecklist.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
