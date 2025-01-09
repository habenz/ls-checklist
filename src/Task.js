import styles from "./Task.module.css";
import appStyles from "./App.module.css";

function Task({
  task: { id, title, expanded, complete, subtasks },
  toggleExpansion,
  toggleCompletion,
}) {
  return (
    <div className={`${styles.task} ${appStyles.content}`}>
      <div className={styles.title}>
        <input
          type="checkbox"
          checked={complete}
          aria-label={`Mark ${title} as ${
            complete ? "incomplete" : "complete"
          }`}
          onChange={() => toggleCompletion(id)}
        />
        <h3 className={complete ? styles.complete : ""}>{title}</h3>
        {subtasks?.length > 0 && (
          <button onClick={toggleExpansion}>{expanded ? "^" : "v"}</button>
        )}
      </div>
      {/* really just because I don't trust myself to hand write json */}
      {subtasks?.length > 0 && expanded && (
        <ul>
          {subtasks.map((st) => (
            <li key={st.id}>
              <input
                type="checkbox"
                id={`${st.title}`}
                onChange={() => toggleCompletion(st.id)}
              />
              <label
                htmlFor={`${st.title}`}
                className={st.complete ? styles.complete : ""}
              >
                {st.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task;
