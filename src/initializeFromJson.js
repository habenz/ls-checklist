const getTaskId = (task, initialTaskPosition) => {
  return task.title.slice(0, 10) + "_" + initialTaskPosition;
};

const initializeSubtasks = (subtasks) => {
  return subtasks.map((sTask, i) => {
    return {
      id: getTaskId(sTask, i),
      title: sTask.title,
      description: sTask.description || null,
      complete: false,
    };
  });
};

export const initializeChecklist = (checklist) => {
  return checklist.map((task, i) => {
    return {
      id: getTaskId(task, i),
      title: task.title,
      description: task.description || null,
      subtasks: task.subtasks ? initializeSubtasks(task.subtasks) : null,
      expanded: false,
      complete: false,
    };
  });
};
