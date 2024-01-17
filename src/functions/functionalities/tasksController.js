import { projects, addTaskToProject } from "./projectController";

class Task {
    constructor(title, description, priority, dueDate = 'no date', parentProject = 'General Project') {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = dueDate;
        this.parentProject = parentProject;
    }
}



export {Task};