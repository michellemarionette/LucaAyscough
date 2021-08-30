// VARIABLES

const aboutPage = document.querySelector(".about");
const workPage = document.querySelector(".work");
const discographyPage = document.querySelector(".discography");
const gravityPage = document.querySelector(".gravity");

const aboutButton = document.querySelector("#about_button");
const workButton = document.querySelector("#work_button");
const discographyButton = document.querySelector("#discography_button");
const gravityButton = document.querySelector("#gravity_button");

const BODY = document.querySelector("body");

const header = document.querySelector(".header");
const openMenuButton = document.querySelector(".open_menu_button");
const closeMenuButton = document.querySelector(".close_menu_button");

const dropButton = document.querySelector(".dropdown_button");
const dropdownContent = document.querySelector(".dropdown_container");

const displayNone = "displayNone";
const displayFlex = "displayFlex";
const displayBlock = "displayBlock";
const clearDisplay = "clearDisplay";
const linkTextColorOn = "linkTextColorOn";

const mediaQuery = matchMedia(`(max-width: 1000px)`);

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
    BODY.style.height = "100%";
    BODY.style.width = "100%";
    BODY.style.overflow = "hidden";
    BODY.style.backgroundColor = "#2b3e46";

    console.log("Fix page.")
}

function unfixPage(){
    BODY.style.height = null;
    BODY.style.width = null;
    BODY.style.overflow = null;
    BODY.style.backgroundColor = null;

    console.log("Unfix page.");
}

function openMenu(){
    switchDisplay(displayFlex, header);
    switchDisplay(displayNone, openMenuButton);
    switchDisplay(displayBlock, closeMenuButton);
    fixPage();
    menu_is_open = true;

    console.log("Open menu.");
}

function closeMenu(){
    switchDisplay(clearDisplay, header);
    switchDisplay(clearDisplay, openMenuButton);
    switchDisplay(clearDisplay, closeMenuButton);
    unfixPage();
    menu_is_open = false;
    
    console.log("Close menu.");
}

function disablePages(){
    switchDisplay(displayNone, aboutPage);
    switchDisplay(displayNone, workPage);
    switchDisplay(displayNone, discographyPage);
    switchDisplay(displayNone, gravityPage);   
    
    aboutButton.classList.remove(linkTextColorOn);
    workButton.classList.remove(linkTextColorOn);
    discographyButton.classList.remove(linkTextColorOn);
    gravityButton.classList.remove(linkTextColorOn);
}

function enablePage(page){
    var name = page.classList[1];
    switchDisplay(displayBlock, page);
    document.querySelector("#" + name + "_button").classList.add(linkTextColorOn);
}

function dropContent(){
    if(dropdownContent.style.maxHeight === "0px"){
        dropdownContent.style.maxHeight = "1000em";
    } else{
        dropdownContent.style.maxHeight = "0px";
    }
}


// INIT FUNCTIONS

function initListeners(){
    openMenuButton.addEventListener("click", function(){
        openMenu();
    });
    
    closeMenuButton.addEventListener("click", function(){
        closeMenu();
    });
    
    aboutButton.addEventListener("click", function(){
        disablePages();
        enablePage(aboutPage); 
    });
    
    workButton.addEventListener("click", function(){
        disablePages();
        enablePage(workPage); 
    });
    
    discographyButton.addEventListener("click", function(){
        disablePages();
        enablePage(discographyPage); 
    });
    
    gravityButton.addEventListener("click", function(){
        disablePages();
        enablePage(gravityPage); 
    });

    dropButton.addEventListener("click", function(){
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
    dropdownContent.style.maxHeight = "0px";
}


// MAIN CODE

initPage();
initListeners();