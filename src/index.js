import './styles/normalize.css';
import './styles/style.css';
import home from './functions/UI/home.js';
import { projects, Project, createProject, addTaskToProject } from './functions/functionalities/projectController.js';
import addProjectUI from './functions/UI/addProjectUI.js';

home();


const buttonAddProject = document.querySelector('#buttonAddProject');
buttonAddProject.addEventListener("click",()=>{
    addProjectUI();
})

const buttonAddTask = document.querySelector('#buttonAddTask');
buttonAddTask.addEventListener("click",()=>console.log(projects));
