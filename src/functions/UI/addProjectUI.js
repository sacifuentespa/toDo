import { createProject } from '../functionalities/projectController.js';
import showProject from './showProject.js';

const projectForm = function () {
    const sidebarDiv = document.querySelector('.sidebarDiv');
    const addProjectDialog = document.createElement('dialog')
    const addProjectForm = document.createElement('form');
    const inputNameProject = document.createElement('input');
    const projectAddButtonFinal = document.createElement('button');
    const cancelProjectAdditionButton = document.createElement('button');
    const addTaskButton = document.querySelector('#buttonAddTask');


    addProjectDialog.id = "dialogAddProject"

    addProjectDialog.appendChild(addProjectForm);

    addProjectForm.id = "addProjectForm";
    addProjectForm.action = "/addProject";
    addProjectForm.method = "post";

    inputNameProject.type = "text";
    inputNameProject.id = "inputNameProject";
    inputNameProject.placeholder = "Project title";
    inputNameProject.maxLength = "25";
    inputNameProject.setAttribute("required", "");

    addProjectForm.appendChild(inputNameProject);

    projectAddButtonFinal.type = "submit";
    projectAddButtonFinal.textContent = "Add";

    cancelProjectAdditionButton.type = "button";
    cancelProjectAdditionButton.textContent = "Cancel";

    addProjectForm.appendChild(projectAddButtonFinal);
    addProjectForm.appendChild(cancelProjectAdditionButton);

    sidebarDiv.insertBefore(addProjectDialog, addTaskButton);
    addProjectDialog.showModal();

    cancelProjectAdditionButton.addEventListener('click', () => {
        addProjectDialog.close();
    })

    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createProject(inputNameProject.value);


        const buttonProject = document.createElement('button');
        buttonProject.textContent = inputNameProject.value;
        buttonProject.id = inputNameProject.value;

        sidebarDiv.appendChild(buttonProject);
        buttonProject.addEventListener('click', () => showProject(buttonProject.id));

        addProjectForm.reset();
        addProjectDialog.close();
    }

    )
}

export default projectForm;