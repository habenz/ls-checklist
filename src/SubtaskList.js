import Checkbox from "./Checkbox";

function SubtaskList({ subtasks, toggleCompletion, taskComplete }) {
  return (
    <ul
      className="list-none ps-8 
                border rounded-b-lg border-gray-200 
                bg-white bg-opacity-50"
    >
      {subtasks.map((st) => (
        <li key={st.id} className="flex items-center gap-1 py-0.5">
          <Checkbox
            id={`${st.title}`}
            checked={st.complete || taskComplete}
            onChange={() => toggleCompletion(st.id)}
            disabled={taskComplete}
            size="small"
          />
          <label
            htmlFor={`${st.title}`}
            className={st.complete || taskComplete ? "line-through" : ""}
          >
            {st.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default SubtaskList;
