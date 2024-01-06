import Icon from './../../images/toDoHead.png';

const header = function(){
    
    // Header stuff
    const header = document.createElement('header');
    const icon = new Image();
    icon.src = Icon;
    header.appendChild(icon);

    const h1 = document.createElement('h1');
    header.appendChild(h1);
    h1.textContent = 'To Do List'


    return header
}

export default header;