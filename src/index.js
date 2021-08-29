// VARIABLES

const about_page = document.querySelector(".about");
const work_page = document.querySelector(".work");
const discography_page = document.querySelector(".discography");
const gravity_page = document.querySelector(".gravity");

const about_button = document.querySelector("#about_button");
const work_button = document.querySelector("#work_button");
const discography_button = document.querySelector("#discography_button");
const gravity_button = document.querySelector("#gravity_button");

const header = document.querySelector(".header");
const open_menu_button = document.querySelector(".open_menu_button");
const close_menu_button = document.querySelector(".close_menu_button");

const drop_button = document.querySelector(".dropdown_button");
const drop_content = document.querySelector(".dropdown_container");

const displayNone = "displayNone";
const displayFlex = "displayFlex";
const displayBlock = "displayBlock";
const clearDisplay = "clearDisplay";
const linkTextColorOn = "linkTextColorOn";


// FUNCTIONS

function switchDisplay(displayType, element){
    for(let i = 0; i < element.classList.length; i++){
        if(element.classList[i].startsWith("display")){
            element.classList.remove(element.classList[i]);
        }
    }

    if(displayType != clearDisplay){
        element.classList.add(displayType);
    }
}

function openMenu(){
    switchDisplay(displayFlex, header);
    switchDisplay(displayNone, open_menu_button);
    switchDisplay(displayBlock, close_menu_button);
}

function closeMenu(){
    switchDisplay(clearDisplay, header);
    switchDisplay(clearDisplay, open_menu_button);
    switchDisplay(clearDisplay, close_menu_button);
}

function disablePages(){
    switchDisplay(displayNone, about_page);
    switchDisplay(displayNone, work_page);
    switchDisplay(displayNone, discography_page);
    switchDisplay(displayNone, gravity_page);   
    
    about_button.classList.remove(linkTextColorOn);
    work_button.classList.remove(linkTextColorOn);
    discography_button.classList.remove(linkTextColorOn);
    gravity_button.classList.remove(linkTextColorOn);
}

function enablePage(page){
    var name = page.classList[1];
    switchDisplay(displayBlock, page);
    document.querySelector("#" + name + "_button").classList.add(linkTextColorOn);
}

function dropContent(){
    if(drop_content.style.maxHeight === "0px"){
        drop_content.style.maxHeight = "1000em";
    } else{
        drop_content.style.maxHeight = "0px";
    }
}


// INIT FUNCTIONS

function initListeners(){
    open_menu_button.addEventListener("click", function(){
        openMenu();
    });
    
    close_menu_button.addEventListener("click", function(){
        closeMenu();
    });
    
    about_button.addEventListener("click", function(){
        disablePages();
        enablePage(about_page); 
    });
    
    work_button.addEventListener("click", function(){
        disablePages();
        enablePage(work_page); 
    });
    
    discography_button.addEventListener("click", function(){
        disablePages();
        enablePage(discography_page); 
    });
    
    gravity_button.addEventListener("click", function(){
        disablePages();
        enablePage(gravity_page); 
    });

    drop_button.addEventListener("click", function(){
        dropContent();
    });
}

function initPage(){
    drop_content.style.maxHeight = "0px";
}


// MAIN CODE

initPage();
initListeners();