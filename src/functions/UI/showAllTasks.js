import { loadDataFromLocalStorage } from '../functionalities/projectController.js';
import showTaskCard from './showTaskCard.js';

const showAllTasks = function () {

    const projects = loadDataFromLocalStorage();
    const mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = '';

    const projectContentDiv = document.createElement('div');
    projectContentDiv.classList.add('projectContentDiv');
    mainContent.appendChild(projectContentDiv);

    const h2 = document.createElement('h2');
    h2.textContent = "All tasks";
    projectContentDiv.appendChild(h2);

    projects.forEach(project => {
        if (project.projectTasks.length > 0) {
            project.projectTasks.forEach((task) => {
                const taskCard = showTaskCard(task);
                projectContentDiv.appendChild(taskCard);
            });
        }
    })
    /*if(projectToShow.projectTasks.length > 0){
        projectToShow.projectTasks.forEach((task) => {
            const taskCard = showTaskCard(task);
            projectContentDiv.appendChild(taskCard);
        });
    };*/
}

export default showAllTasks;