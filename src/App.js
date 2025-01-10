import tasks from "./data/tasks.json";
import { initializeChecklist } from "./initializeFromJson";
import Checklist from "./Checklist";

const closingChecklist = initializeChecklist(tasks.Closing);

function App() {
  return (
    <div className="flex flex-col items-center bg-blue-200 w-screen">
      <h1 className="max-w-2xl w-4/5 px-1 text-xl sm:text-2xl font-bold">
        Closing Checklist
      </h1>
      <Checklist initialChecklist={closingChecklist} />
    </div>
  );
}

export default App;
