function SubtaskList({ subtasks, toggleCompletion, taskComplete }) {
  return (
    <ul className="list-none ps-2">
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
            className={(st.complete || taskComplete) && "line-through"}
          >
            {st.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default SubtaskList;
