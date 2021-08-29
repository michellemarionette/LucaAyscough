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

const mediaQuery = matchMedia(`(max-width: 800px)`);

var menu_is_open = false;


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

function fixPage(){
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.width = "100%";
    document.querySelector("body").style.overflow = "hidden";

    console.log("Fix page.")
}

function unfixPage(){
    document.querySelector("body").style.height = null;
    document.querySelector("body").style.width = null;
    document.querySelector("body").style.overflow = null;

    console.log("Unfix page.");
}

function openMenu(){
    switchDisplay(displayFlex, header);
    switchDisplay(displayNone, open_menu_button);
    switchDisplay(displayBlock, close_menu_button);
    fixPage();
    menu_is_open = true;

    console.log("Open menu.");
}

function closeMenu(){
    switchDisplay(clearDisplay, header);
    switchDisplay(clearDisplay, open_menu_button);
    switchDisplay(clearDisplay, close_menu_button);
    unfixPage();
    menu_is_open = false;
    
    console.log("Close menu.");
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

    mediaQuery.addEventListener("change", function(){
        if(mediaQuery.matches && menu_is_open){
            fixPage();
        } else if(!mediaQuery.matches && menu_is_open){
            unfixPage();
        }
    });
}

function initPage(){
    drop_content.style.maxHeight = "0px";
}


// MAIN CODE

initPage();
initListeners();