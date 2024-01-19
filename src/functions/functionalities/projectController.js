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
    saveDataToLocalStorage();
}


function editProject(originalName, finalName) {
    const projectToEdit = projects.find(project => project.name === originalName);
    projectToEdit.name = finalName;
    /*if (projectToEdit.projectTasks.length > 0) {
        for (let i = 0; i < projectToEdit.projectTasks.length; i++) {
            projectToEdit.projectTasks[i].aprentProject = finalName;
        }
    }*/
    saveDataToLocalStorage();
}

function addTaskToProject(projectToAddTask = "General Project", task) {
    const projectToAdd = projects.find(project => project.name === projectToAddTask);
    projectToAdd.projectTasks.push(task);
    saveDataToLocalStorage();
}

function removeTaskFromProject(projectTitle, taskTitle) {
    const parentProjectRemovedTask = projects.find(project => project.name === projectTitle);
    parentProjectRemovedTask.projectTasks = parentProjectRemovedTask.projectTasks.filter((task) => task.title !== taskTitle);
    saveDataToLocalStorage();
}

function removeProject(projectTitle) {
    const projectIndex = projects.findIndex(project => project.name === projectTitle);
    projects.splice(projectIndex, 1);
    saveDataToLocalStorage();
};


//From localStorage documentation MDN
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

//localStorage functions

function saveDataToLocalStorage() {
    if (storageAvailable("localStorage")) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}

// Function to retrieve data from localStorage
function loadDataFromLocalStorage() {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
        projects = JSON.parse(savedProjects);
    }
    return projects;
}


module.exports = { projects, Project, createProject, addTaskToProject, saveDataToLocalStorage, loadDataFromLocalStorage, removeTaskFromProject, removeProject, editProject }