import './styles/normalize.css';
import './styles/style.css';
import home from './functions/UI/home.js';
import { projects, Project, createProject, addTaskToProject } from './functions/functionalities/projectController.js';
import addProjectUI from './functions/UI/addProjectUI.js';
import Task from './functions/functionalities/tasksController.js';
import addTaskUI from './functions/UI/addTaskUI.js';
import showAllTasks from './functions/UI/showAllTasks.js';

home();
createProject("General Project");
const buttonAddProject = document.querySelector('#buttonAddProject');
buttonAddProject.addEventListener("click",()=>{
    addProjectUI();
})

const buttonAddTask = document.querySelector('#buttonAddTask');
buttonAddTask.addEventListener("click",()=>addTaskUI());

const buttonAll = document.querySelector('#buttonAll');
buttonAll.addEventListener("click", ()=> showAllTasks());