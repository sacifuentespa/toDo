import header from "./header";
import footer from "./footer";
import main from "./main";

const home = function(){
    // where header, footer and main will be bundled
    const body = document.querySelector('body');
    const headerToDo = header();
    body.appendChild(headerToDo);

    const mainToDo = main();
    body.appendChild(mainToDo);


    const footerToDo = footer();
    body.appendChild(footerToDo);

    return home
}

export default home
