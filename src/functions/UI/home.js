import header from "./header";

const home = function(){
    // where header, footer and main will be bundled
    const body = document.querySelector('body');
    const headerToDo = header();
    body.appendChild(headerToDo);
    return home
}

export default home
