import { removeTaskFromProject } from "../functionalities/projectController";
import { Task } from "../functionalities/tasksController";
import editTaskForm from "./editTaskUI";

const taskCard = function(task){
    
    //waiting for implementation of specific logic for showing taskCards
    const divTaskCard = document.createElement('div');
    divTaskCard.classList.add('divTaskCard');

    const titleTaskCard = document.createElement('h3');
    titleTaskCard.textContent = task.title;
    divTaskCard.appendChild(titleTaskCard);
    
    const descriptionTaskCard = document.createElement('p');
    descriptionTaskCard.textContent = task.description;
    divTaskCard.appendChild(descriptionTaskCard);

    const priorityTaskCard = document.createElement('p');
    priorityTaskCard.textContent = task.priority;
    divTaskCard.appendChild(priorityTaskCard);

    const dateTaskCard = document.createElement('p');
    dateTaskCard.textContent = task.date;
    divTaskCard.appendChild(dateTaskCard);

    const buttonEditTaskCard = document.createElement('button');
    buttonEditTaskCard.textContent = "Edit task";
    divTaskCard.appendChild(buttonEditTaskCard);

    const buttonDeleteTaskCard = document.createElement('button');
    buttonDeleteTaskCard.textContent = "Delete task";
    divTaskCard.appendChild(buttonDeleteTaskCard);

    buttonEditTaskCard.addEventListener('click',()=>{
        editTaskForm(task);
    })

    buttonDeleteTaskCard.addEventListener('click', ()=>{
        removeTaskFromProject(task.parentProject, task.title);
        divTaskCard.remove();
    })

    return divTaskCard;
}

export default taskCard;