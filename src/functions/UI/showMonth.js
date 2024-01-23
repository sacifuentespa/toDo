import { loadDataFromLocalStorage } from '../functionalities/projectController.js';
import showTaskCard from './showTaskCard.js';


const showThisMonth = function () {

    const projects = loadDataFromLocalStorage();
    const mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = '';

    const projectContentDiv = document.createElement('div');
    projectContentDiv.classList.add('projectContentDiv');
    mainContent.appendChild(projectContentDiv);

    const h2 = document.createElement('h2');
    h2.textContent = "Due this month";
    projectContentDiv.appendChild(h2);

    projects.forEach(project => {
        if (project.projectTasks.length > 0) {
            project.projectTasks.forEach((task) => {
                if (task.date === "no date") {
                    return false
                }

                const today = new Date();
                const projectDueDate = new Date(task.date);

                if (
                    projectDueDate.getMonth() === today.getMonth() &&
                    projectDueDate.getFullYear() === today.getFullYear()
                ) {
                    const taskCard = showTaskCard(task);
                    projectContentDiv.appendChild(taskCard);
                }
            });
        }
    })

}

export default showThisMonth;