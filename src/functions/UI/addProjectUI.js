import { projects, Project, createProject, addTaskToProject } from './../functionalities/addProjectFunctionality.js';

const projectForm = function(){
    const sidebarDiv = document.querySelector('.sidebarDiv');
    const addProjectDialog = document.createElement('dialog')
    const addProjectForm = document.createElement('form');
    const inputNameProject = document.createElement('input');
    const projectAddButtonFinal = document.createElement('button');
    const cancelProjectAdditionButton = document.createElement('button');
    const addTaskButton = document.querySelector('#buttonAddTask');  

    console.log(addTaskButton);
    console.log(addProjectDialog);

    addProjectDialog.id = "dialogAddProject"
    
    addProjectDialog.appendChild(addProjectForm);

    addProjectForm.id = "addProjectForm";
    addProjectForm.action = "/addProject";
    addProjectForm.method = "post";

    inputNameProject.type = "text";
    inputNameProject.id = "inputNameProject";
    inputNameProject.placeholder = "Project title";

    addProjectForm.appendChild(inputNameProject);

    projectAddButtonFinal.type = "submit";
    projectAddButtonFinal.textContent = "Add";

    cancelProjectAdditionButton.type = "button";
    cancelProjectAdditionButton.textContent = "Cancel";

    addProjectForm.appendChild(projectAddButtonFinal);
    addProjectForm.appendChild(cancelProjectAdditionButton);
    
    sidebarDiv.insertBefore(addProjectDialog, addTaskButton);
    addProjectDialog.showModal();

    cancelProjectAdditionButton.addEventListener('click',() => {
        addProjectDialog.close();
    })

    projectAddButtonFinal.addEventListener('click', (e)=>{
        e.preventDefault();
        createProject(inputNameProject.value);


        const buttonProject = document.createElement('button');
        buttonProject.textContent = inputNameProject.value;
        sidebarDiv.appendChild(buttonProject);
        
        addProjectForm.reset();
        addProjectDialog.close();
    }

    )
}

export default projectForm;