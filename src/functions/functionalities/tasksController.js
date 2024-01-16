import { projects, addTaskToProject } from "./projectController";

class Task {
    constructor(title, description, priority, dueDate = 'no date') {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = dueDate;
    }
}



export {Task};