import { loadDataFromLocalStorage } from '../functionalities/projectController.js';
import showTaskCard from './showTaskCard.js';


const showThisWeek = function () {

    const projects = loadDataFromLocalStorage();
    const mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = '';

    const projectContentDiv = document.createElement('div');
    projectContentDiv.classList.add('projectContentDiv');
    mainContent.appendChild(projectContentDiv);

    const h2 = document.createElement('h2');
    h2.textContent = "Due this Week";
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
                    getWeekNumber(today) === getWeekNumber(projectDueDate)
                ) {
                    const taskCard = showTaskCard(task);
                    projectContentDiv.appendChild(taskCard);
                }
            });
        }
    })

}

function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  
    return weekNumber;
  }

export default showThisWeek;