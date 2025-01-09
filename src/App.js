import styles from "./App.module.css";
import tasks from "./data/tasks.json";
import Task from "./Task";
import { initializeChecklist } from "./initializeFromJson";
import { useState } from "react";

const closingChecklist = initializeChecklist(tasks.Closing);

function App() {
  const [checklist, setChecklist] = useState(closingChecklist);

  const toggleExpansion = (taskId) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((task) =>
        task.id !== taskId ? task : { ...task, expanded: !task.expanded }
      )
    );
  };

  const compareByCompletionAndId = (taskA, taskB) => {
    // Sorts tasks first by completed state then by original order in list
    if (taskA.complete !== taskB.complete) {
      return taskA.complete - taskB.complete;
    }
    // TODO: make more robust idex extraction function
    return Number(taskA.id.split("_")[1]) - Number(taskB.id.split("_")[1]);
  };

  const toggleCompletion = (taskId) => {
    setChecklist((prevChecklist) =>
      prevChecklist
        .map((task) => {
          if (task.id === taskId) {
            return { ...task, complete: !task.complete };
          }
          // should we look in the subtasks?
          if (!task.subtasks) {
            return task;
          }
          if (task.subtasks.some((st) => st.id === taskId)) {
            return {
              ...task,
              subtasks: task.subtasks
                .map((st) =>
                  st.id === taskId ? { ...st, complete: !st.complete } : st
                )
                .sort(compareByCompletionAndId),
            };
          } else {
            return task;
          }
        })
        .sort(compareByCompletionAndId)
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
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
}

export default App;
