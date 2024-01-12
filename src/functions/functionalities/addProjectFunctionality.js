let projects = []

class Project {
    constructor(name) {
        this.name = name;
        this.projectTasks = [];
    }
}

function createProject(name) {
    const project = new Project(name);
    projects.push(project);
}

function addTaskToProject(project, task) {
    project.projectTasks.push(task);
}


module.exports = {projects, Project, createProject, addTaskToProject}