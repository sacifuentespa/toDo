import Git from './../../images/github.png';

const footer = function(){

    const footer = document.createElement('footer');

    const h4 = document.createElement('h4');
    footer.appendChild(h4);
    h4.textContent = 'Powered by: '

    const linkGit = document.createElement('a')
    footer.appendChild(linkGit);
    linkGit.href = "https://github.com/sacifuentespa"
    linkGit.textContent = "Santiago Cifuentes"

    const icon = new Image();
    icon.src = Git;
    linkGit.appendChild(icon);


    return footer
}

export default footer;