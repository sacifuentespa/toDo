import { editProject } from '../functionalities/projectController.js';


const editProjectForm = function (project) {
    const sidebarDiv = document.querySelector('.sidebarDiv');
    const editProjectDialog = document.createElement('dialog')
    const editProjectForm = document.createElement('form');
    const inputNameProject = document.createElement('input');
    const projectEditButtonFinal = document.createElement('button');
    const cancelProjectEditionButton = document.createElement('button');
    const addTaskButton = document.querySelector('#buttonAddTask');


    editProjectDialog.id = "dialogEditProject"

    editProjectDialog.appendChild(editProjectForm);

    editProjectForm.id = "editProjectForm";
    editProjectForm.action = "/editProject";
    editProjectForm.method = "post";

    inputNameProject.type = "text";
    inputNameProject.id = "inputNameProject";
    inputNameProject.placeholder = "Project title";
    inputNameProject.maxLength = "25";
    inputNameProject.value = project.name;
    inputNameProject.setAttribute("required", "");

    editProjectForm.appendChild(inputNameProject);

    projectEditButtonFinal.type = "submit";
    projectEditButtonFinal.textContent = "Accept";

    cancelProjectEditionButton.type = "button";
    cancelProjectEditionButton.textContent = "Cancel";

    editProjectForm.appendChild(projectEditButtonFinal);
    editProjectForm.appendChild(cancelProjectEditionButton);

    sidebarDiv.insertBefore(editProjectDialog, addTaskButton);
    editProjectDialog.showModal();

    cancelProjectEditionButton.addEventListener('click', () => {
        editProjectDialog.close();
    })

    editProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const oldProjectName = document.querySelector('h2');
        
        editProject(oldProjectName.textContent, inputNameProject.value);
        const buttonProject = document.querySelector(`#${oldProjectName.textContent}`)
        buttonProject.id = inputNameProject.value;
        buttonProject.textContent = inputNameProject.value;
        oldProjectName.textContent = inputNameProject.value;

        editProjectForm.reset();
        editProjectDialog.close();
    }

    )
}

export default editProjectForm;