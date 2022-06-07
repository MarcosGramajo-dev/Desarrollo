
const dev = document.getElementsByClassName('list-dev');
const proyect = document.getElementsByClassName('proyect');
const user = document.getElementsByClassName('user');

const img = document.getElementsByClassName('img-icon');
const link = document.getElementsByClassName('link');
const aside = document.getElementsByClassName('aside')

    dev[0].addEventListener('click', Active);
    proyect[0].addEventListener('click', Active);
    user[0].addEventListener('click', Active);

function Active(e){
    for(var i = 1; i < img.length; i++){
        if(img[i].classList.contains('img-icon-hover')){
            img[i].classList.remove('img-icon-hover')
        }
        else{
            img[i].classList.add('img-icon-hover')
        }
    }

    for(var i = 0; i < link.length; i++){
        if(link[i].classList.contains('link-active')){
            link[i].classList.remove('link-active')
        }
        else{
            link[i].classList.add('link-active')
        }
    }

    if(aside[0].classList.contains('aside-active')){
        aside[0].classList.remove('aside-active')
    }

    else{
        aside[0].classList.add('aside-active')
    }
}

function ActiveProyect(e){
    if(img[2].classList.contains('img-icon-hover')){
        img[2].classList.remove('img-icon-hover')
    }
    else{
        img[2].classList.add('img-icon-hover')
    }
}

function ActiveUser(e){
    if(img[3].classList.contains('img-icon-hover')){
        img[3].classList.remove('img-icon-hover')
    }
    else{
        img[3].classList.add('img-icon-hover')
    }
}