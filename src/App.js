import styles from "./App.module.css";
import tasks from "./data/tasks.json";
import Task from "./Task";
import { initializeChecklist } from "./initializeFromJson";
import { useState } from "react";

const closingChecklist = initializeChecklist(tasks.Closing);

function App() {
  const [checklist, setChecklist] = useState(closingChecklist);

  const toggleExpansion = (taskId) => {
    setChecklist(
      checklist.map((task) =>
        task.id != taskId ? task : { ...task, expanded: !task.expanded }
      )
    );
  };

  return (
    <div className={styles.centered}>
      <h1 className={styles.content}>Checklist</h1>
      {checklist.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleExpansion={() => toggleExpansion(task.id)}
        />
      ))}
    </div>
  );
}

export default App;
