import './styles/normalize.css';
import './styles/style.css';
import home from './functions/UI/home.js';
import { projects, Project, createProject, addTaskToProject } from './functions/functionalities/projectController.js';
import addProjectUI from './functions/UI/addProjectUI.js';
import addTaskUI from './functions/UI/addTaskUI.js';
import showAllTasks from './functions/UI/showAllTasks.js';
import showToday from './functions/UI/showToday.js';
import showThisMonth from './functions/UI/showMonth.js';
import showThisWeek from './functions/UI/showWeek.js';

home();

const buttonAddProject = document.querySelector('#buttonAddProject');
buttonAddProject.addEventListener("click",()=>{
    addProjectUI();
})

const buttonAddTask = document.querySelector('#buttonAddTask');
buttonAddTask.addEventListener("click",()=>addTaskUI());

const buttonAll = document.querySelector('#buttonAll');
buttonAll.addEventListener("click", ()=> showAllTasks());

const buttonToday = document.querySelector('#buttonToday');
buttonToday.addEventListener("click", ()=> showToday());

const buttonMonth = document.querySelector('#buttonMonth');
buttonMonth.addEventListener("click", ()=> showThisMonth());

const buttonWeek = document.querySelector('#buttonWeek');
buttonWeek.addEventListener("click", ()=> showThisWeek());