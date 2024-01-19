import {loadDataFromLocalStorage, removeProject} from '../functionalities/projectController.js';
import editProjectForm from './editProjectUI.js';
import showTaskCard from './showTaskCard.js';

const showProject = function(name){
    let projects = loadDataFromLocalStorage();
    const mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = '';

    const projectContentDiv = document.createElement('div');
    projectContentDiv.classList.add('projectContentDiv');
    mainContent.appendChild(projectContentDiv);
    
    
    const projectIndex = projects.findIndex(project => project.name === name);
    let projectToShow = projects[projectIndex];

    const h2 = document.createElement('h2');
    h2.textContent = projectToShow.name
    projectContentDiv.appendChild(h2);

    const editProjectButton = document.createElement('button');
    editProjectButton.classList.add('editProjectButton')
    editProjectButton.textContent = "Edit project";
    projectContentDiv.appendChild(editProjectButton);
    editProjectButton.addEventListener('click', ()=>{
        editProjectForm(projectToShow);
        projects = loadDataFromLocalStorage();
        projectToShow = projects[projectIndex];
    })

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('deleteProjectButton')
    deleteProjectButton.textContent = "Delete project";
    projectContentDiv.appendChild(deleteProjectButton);
    deleteProjectButton.addEventListener('click', () => {
        const buttonProjectDeleted = document.querySelector(`#${projectToShow.name}`);
        buttonProjectDeleted.remove();
        removeProject(projectToShow.name);
        mainContent.innerHTML = '';
    })




    if(projectToShow.projectTasks.length > 0){
        projectToShow.projectTasks.forEach((task) => {
            const taskCard = showTaskCard(task);
            projectContentDiv.appendChild(taskCard);
        });
        
    };
}

export default showProject;