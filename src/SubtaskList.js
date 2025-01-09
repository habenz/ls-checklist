import styles from "./Task.module.css";

function SubtaskList({ subtasks, toggleCompletion, taskComplete }) {
  return (
    <ul>
      {subtasks.map((st) => (
        <li key={st.id}>
          <input
            type="checkbox"
            id={`${st.title}`}
            checked={st.complete || taskComplete}
            onChange={() => toggleCompletion(st.id)}
          />
          <label
            htmlFor={`${st.title}`}
            className={st.complete || taskComplete ? styles.complete : ""}
          >
            {st.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default SubtaskList;
