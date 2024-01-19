import { projects, editTask, loadDataFromLocalStorage } from '../functionalities/projectController.js';
import { Task } from '../functionalities/tasksController.js';


const editTaskForm = function (task) {
    const sidebarDiv = document.querySelector('.sidebarDiv');
    const editTaskDialog = document.createElement('dialog')
    const editTaskForm = document.createElement('form');
    const inputTitleTask = document.createElement('input');
    const inputTaskDescription = document.createElement('input');
    const inputTaskPriority = document.createElement('select');
    const inputTaskDueDate = document.createElement('input');
    const taskEditButtonFinal = document.createElement('button');
    const cancelTaskEditionButton = document.createElement('button');
    const editTaskButton = document.querySelector('#buttonEditTask');

    projects = loadDataFromLocalStorage();

    let originalTask = task;

    editTaskDialog.id = "dialogEditTask"

    editTaskDialog.appendChild(editTaskForm);

    editTaskForm.id = "editTaskForm";
    editTaskForm.action = "/addTask";
    editTaskForm.method = "post";

    inputTitleTask.type = "text";
    inputTitleTask.id = "inputTitleTask";
    inputTitleTask.placeholder = "Task title";
    inputTitleTask.maxLength = "25"
    inputTitleTask.setAttribute("required", "");
    inputTitleTask.value = originalTask.title;

    editTaskForm.appendChild(inputTitleTask);

    inputTaskDescription.type = "text";
    inputTaskDescription.id = "inputTaskDescription";
    inputTaskDescription.placeholder = "Task description";
    inputTaskDescription.maxLength = "100"
    inputTaskDescription.value = originalTask.description;

    editTaskForm.appendChild(inputTaskDescription);

    const labelTaskPriority = document.createElement('label');
    editTaskForm.appendChild(labelTaskPriority);

    inputTaskPriority.id = "inputTaskPriority";
    labelTaskPriority.setAttribute('for', "inputTaskPriority");
    labelTaskPriority.textContent = "Edit Priority";

    const optionHigh = document.createElement('option');
    inputTaskPriority.appendChild(optionHigh);
    optionHigh.value = "High";
    optionHigh.textContent = "High";

    const optionMedium = document.createElement('option');
    inputTaskPriority.appendChild(optionMedium);
    optionMedium.value = "Medium";
    optionMedium.textContent = "Medium";

    const optionLow = document.createElement('option');
    inputTaskPriority.appendChild(optionLow);
    optionLow.value = "Low";
    optionLow.textContent = "Low";

    editTaskForm.appendChild(inputTaskPriority);
    inputTaskPriority.value = originalTask.priority;

    if (projects.length > 1) {

        const labelProjectOption = document.createElement('label');
        editTaskForm.appendChild(labelProjectOption);
        labelProjectOption.setAttribute('for', "projectOption");
        labelProjectOption.textContent = "Related Project";

        const projectSelect = document.createElement('select');
        projectSelect.id = "projectOption";

        for (let i = 1; i < projects.length; i++) {
            const optionProject = document.createElement('option');
            optionProject.value = projects[i].name;
            optionProject.textContent = projects[i].name;
            projectSelect.appendChild(optionProject);
        }

        // to add the general project to the options
        const optionProject = document.createElement('option');
        optionProject.value = projects[0].name;
        optionProject.textContent = "None";
        projectSelect.appendChild(optionProject);
        editTaskForm.appendChild(projectSelect);
    }

    inputTaskDueDate.type = "date";
    editTaskForm.appendChild(inputTaskDueDate)
    inputTaskDueDate.value = originalTask.date;

    taskEditButtonFinal.type = "submit";
    taskEditButtonFinal.textContent = "Edit";

    cancelTaskEditionButton.type = "button";
    cancelTaskEditionButton.textContent = "Cancel";

    editTaskForm.appendChild(taskEditButtonFinal);
    editTaskForm.appendChild(cancelTaskEditionButton);

    sidebarDiv.insertBefore(editTaskDialog, editTaskButton);
    editTaskDialog.showModal();

    

    cancelTaskEditionButton.addEventListener('click', () => {
        editTaskDialog.close();
    });

    editTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        projects = loadDataFromLocalStorage();
        // here comes the specific logic for tasks
        const projectSelect = editTaskForm.querySelector('#projectOption');
        

        let taskToEdit = '';

        if (inputTaskDueDate.value) {
            const dueDate = new Date(inputTaskDueDate.value + 'T00:00');
            taskToEdit = new Task(inputTitleTask.value, inputTaskDescription.value, inputTaskPriority.value, dueDate);
        } else {
            taskToEdit = new Task(inputTitleTask.value, inputTaskDescription.value, inputTaskPriority.value);
        }

        if(projectSelect){
            taskToEdit.parentProject = projectSelect.value;
        }

        editTask(originalTask.parentProject, originalTask.title, taskToEdit);
        alert("Click on your project or desired view button again to see the tasks refreshed")

        editTaskForm.reset();
        editTaskDialog.close();
    }

    )
}

export default editTaskForm;