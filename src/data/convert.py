tasks_json = {}
with open("text_task_list.txt") as f:
    for line in f:
        line = line.strip()
        if not line or "Missing" in line:
            continue
        if "**" in line:
            curr_list = []
            list_name = line.strip("**").strip()
            tasks_json[list_name] = curr_list
        # This flow assumes that a top level task has subtasks or a description
        # but not both
        elif line[0] == "*":
            curr_task = {}
            curr_task["title"] = line.strip("*").strip()
            curr_list.append(curr_task)
            curr_subtask = None
        elif line[0] == "-":
            curr_subtask = {}
            curr_subtask["title"] = line.strip("-").strip()
            if "subtasks" not in curr_task:
                curr_task["subtasks"] = []
            curr_task["subtasks"].append(curr_subtask)
        elif line[:12] == "description:":
            line = line.strip("description:").strip()
            if "subtasks" in curr_task:
                curr_subtask["description"] = line
            else:
                curr_task["description"] = line
import json

with open("tasks.json", "w") as file:
    json.dump(tasks_json, file, indent=2)
