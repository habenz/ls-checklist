import tasks from "./data/tasks.json";
import { initializeChecklist } from "./initializeFromJson";
import Checklist from "./Checklist";
import { appContentWidth } from "./reusedStyles";

const closingChecklist = initializeChecklist(tasks.Closing);

function App() {
  return (
    <div
      className="flex flex-col items-center 
                bg-gradient-to-br from-blue-100 to-purple-100 w-screen
                font-inter"
    >
      <h1
        className={`${appContentWidth} mb-2 text-xl sm:text-2xl font-semibold`}
      >
        Closing Checklist
      </h1>
      <Checklist initialChecklist={closingChecklist} />
    </div>
  );
}

export default App;
