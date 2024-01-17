import {loadDataFromLocalStorage} from '../functionalities/projectController.js';
import taskCard from './showTaskCard.js';
import showTaskCard from './showTaskCard.js';

const showProject = function(name){
    const projects = loadDataFromLocalStorage();
    const mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = '';

    const projectContentDiv = document.createElement('div');
    projectContentDiv.classList.add('projectContentDiv');
    mainContent.appendChild(projectContentDiv);
    
    const projectToShow = projects.find(project => project.name === name);
    const h2 = document.createElement('h2');
    h2.textContent = projectToShow.name
    projectContentDiv.appendChild(h2);

    if(projectToShow.projectTasks.length > 0){
        projectToShow.projectTasks.forEach((task) => {
            const taskCard = showTaskCard(task);
            projectContentDiv.appendChild(taskCard);
        });
        
    };
}

export default showProject;