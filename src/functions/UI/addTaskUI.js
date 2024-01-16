import { projects, addTaskToProject, loadDataFromLocalStorage } from '../functionalities/projectController.js';
import { Task } from '../functionalities/tasksController.js';



const taskForm = function () {
    const sidebarDiv = document.querySelector('.sidebarDiv');
    const addTaskDialog = document.createElement('dialog')
    const addTaskForm = document.createElement('form');
    const inputTitleTask = document.createElement('input');
    const inputTaskDescription = document.createElement('input');
    const inputTaskPriority = document.createElement('select');
    const inputTaskDueDate = document.createElement('input');
    const taskAddButtonFinal = document.createElement('button');
    const cancelTaskAdditionButton = document.createElement('button');
    const addTaskButton = document.querySelector('#buttonAddTask');



    addTaskDialog.id = "dialogAddTask"

    addTaskDialog.appendChild(addTaskForm);

    addTaskForm.id = "addTaskForm";
    addTaskForm.action = "/addTask";
    addTaskForm.method = "post";

    inputTitleTask.type = "text";
    inputTitleTask.id = "inputTitleTask";
    inputTitleTask.placeholder = "Task title";
    inputTitleTask.maxLength = "25"
    inputTitleTask.setAttribute("required", "");

    addTaskForm.appendChild(inputTitleTask);


    inputTaskDescription.type = "text";
    inputTaskDescription.id = "inputTaskDescription";
    inputTaskDescription.placeholder = "Task description";
    inputTaskDescription.maxLength = "100"

    addTaskForm.appendChild(inputTaskDescription);

    const labelTaskPriority = document.createElement('label');
    addTaskForm.appendChild(labelTaskPriority);

    inputTaskPriority.id = "inputTaskPriority";
    labelTaskPriority.setAttribute('for', "inputTaskPriority");
    labelTaskPriority.textContent = "Add Priority";

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

    addTaskForm.appendChild(inputTaskPriority);

    if (projects.length > 1) {

        projects = loadDataFromLocalStorage();
        const labelProjectOption = document.createElement('label');
        addTaskForm.appendChild(labelProjectOption);
        labelTaskPriority.setAttribute('for', "projectOption");
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
        addTaskForm.appendChild(projectSelect);
    }

    inputTaskDueDate.type = "date";
    addTaskForm.appendChild(inputTaskDueDate)

    taskAddButtonFinal.type = "submit";
    taskAddButtonFinal.textContent = "Add";

    cancelTaskAdditionButton.type = "button";
    cancelTaskAdditionButton.textContent = "Cancel";

    addTaskForm.appendChild(taskAddButtonFinal);
    addTaskForm.appendChild(cancelTaskAdditionButton);

    sidebarDiv.insertBefore(addTaskDialog, addTaskButton);
    addTaskDialog.showModal();

    cancelTaskAdditionButton.addEventListener('click', () => {
        addTaskDialog.close();
    })


    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        projects = loadDataFromLocalStorage();
        // here comes the specific logic for tasks
        const projectSelect = document.querySelector('#projectOption');
        let taskToAdd = '';

        if (inputTaskDueDate.value) {
            const dueDate = new Date(inputTaskDueDate.value + 'T00:00');
            taskToAdd = new Task(inputTitleTask.value, inputTaskDescription.value, inputTaskPriority.value, dueDate);
        } else {
            taskToAdd = new Task(inputTitleTask.value, inputTaskDescription.value, inputTaskPriority.value);
        }



        if (projectSelect) {
            addTaskToProject(projectSelect.value, taskToAdd);
        } else {
            addTaskToProject(undefined, taskToAdd);
        }

        addTaskForm.reset();
        addTaskDialog.close();
    }

    )
}

export default taskForm;