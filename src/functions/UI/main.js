import addIcon from './../../images/addIcon.png'
import anyIcon from './../../images/anytime.png'
import monthIcon from './../../images/month.png'
import todayIcon from './../../images/today.png'
import weekIcon from './../../images/week.png'
import { loadDataFromLocalStorage } from '../functionalities/projectController.js';
import showProject from './showProject.js';

const main = function () {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv');

    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sidebarDiv');

    const buttons = [{
        name: "All Tasks",
        id: "All",
        image: anyIcon
    },
    {
        name: "Today",
        id: "Today",
        image: todayIcon
    },
    {
        name: "Week",
        id: "Week",
        image: weekIcon
    },
    {
        name: "Month",
        id: "Month",
        image: monthIcon
    },
    {
        name: "Add Project",
        id: "AddProject",
        image: addIcon
    },
    {
        name: "Add Task",
        id: "AddTask",
        image: addIcon
    }];

    let projects = loadDataFromLocalStorage();

    buttons.forEach(button => {
        const buttonElement = document.createElement('button');
        sidebarDiv.appendChild(buttonElement);

        const imageElement = new Image();
        imageElement.src = button.image;
        buttonElement.appendChild(imageElement);

        const textElement = document.createElement('p')
        textElement.textContent = button.name;
        buttonElement.appendChild(textElement);
        buttonElement.id = `button${button.id}`
    })

    const titleProject = document.createElement('h3');
    titleProject.textContent = 'Projects';
    sidebarDiv.appendChild(titleProject);

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    mainDiv.appendChild(sidebarDiv);

    if (projects.length > 1) {
        for (let i = 1; i < projects.length; i++) {

            const buttonProject = document.createElement('button');
            buttonProject.textContent = projects[i].name;
            buttonProject.id = projects[i].name.replace(/ /g, '-');

            sidebarDiv.appendChild(buttonProject);
            buttonProject.addEventListener('click', () => showProject(buttonProject.textContent));
        }
    }



    mainDiv.appendChild(mainContent);

    return mainDiv
}

export default main;