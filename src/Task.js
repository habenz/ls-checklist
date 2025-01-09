import styles from "./Task.module.css";
import appStyles from "./App.module.css";

function Task({
  task: { expanded, complete, title, subtasks },
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
        />
        <h3>{title}</h3>
        {subtasks?.length > 0 && (
          <button onClick={toggleCompletion}>{expanded ? "^" : "v"}</button>
        )}
      </div>
      {/* really just because I don't trust myself to hand write json */}
      {subtasks?.length > 0 && expanded && (
        <ul>
          {subtasks.map((st, i) => (
            <li key={st.id}>
              <input type="checkbox" id={`${st.title}`} />
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
