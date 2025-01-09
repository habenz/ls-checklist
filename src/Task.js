import SubtaskList from "./SubtaskList";

function Task({
  task: { id, title, expanded, complete, subtasks },
  toggleExpansion,
  toggleCompletion,
}) {
  return (
    <div
      className={`max-w-2xl w-4/5 border-solid rounded-t-lg bg-gray-100 mb-2`}
    >
      <div className="flex items-center gap-2 px-2 py-1">
        <input
          type="checkbox"
          className="m-0 p-1"
          checked={complete}
          aria-label={`Mark ${title} as ${
            complete ? "incomplete" : "complete"
          }`}
          onChange={() => toggleCompletion(id)}
        />
        <h3 className={complete ? "line-through" : ""}>{title}</h3>
        {subtasks?.length > 0 && (
          <button className="ml-auto" onClick={toggleExpansion}>
            {expanded ? "^" : "v"}
          </button>
        )}
      </div>
      {/* really just because I don't trust myself to hand write json */}
      {subtasks?.length > 0 && expanded && (
        <SubtaskList
          subtasks={subtasks}
          taskComplete={complete}
          toggleCompletion={toggleCompletion}
        />
      )}
    </div>
  );
}

export default Task;
