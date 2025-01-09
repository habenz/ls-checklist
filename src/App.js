import styles from "./App.module.css";
import tasks from "./data/tasks.json";
import { initializeChecklist } from "./initializeFromJson";
import Checklist from "./Checklist";

const closingChecklist = initializeChecklist(tasks.Closing);

function App() {
  return (
    <div className={styles.centered}>
      <h1 className={styles.content}>Closing Checklist</h1>
      <Checklist initialChecklist={closingChecklist} />
    </div>
  );
}

export default App;
