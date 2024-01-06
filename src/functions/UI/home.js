import header from "./header";
import footer from "./footer";

const home = function(){
    // where header, footer and main will be bundled
    const body = document.querySelector('body');
    const headerToDo = header();
    body.appendChild(headerToDo);

    const footerToDo = footer();
    body.appendChild(footerToDo);

    return home
}

export default home
