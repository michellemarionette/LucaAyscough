const root = window.getComputedStyle(document.querySelector(":root"));
const colorDark = root.getPropertyValue("--color-dark");
const colorLight = root.getPropertyValue("--color-light");
const activeLink = root.getPropertyValue("--active-link");

const BODY = document.querySelector("body");
const HEADER = document.querySelector(".header");

const aboutButton = document.querySelector("#about_button");
const workButton = document.querySelector("#work_button");
const discographyButton = document.querySelector("#discography_button");
const gravityButton = document.querySelector("#gravity_button");

const dropButton = document.querySelector(".dropdown_button");
const dropdownContent = document.querySelector(".dropdown_container");
const mediaQuery = matchMedia(`(max-width: 1200px)`);

function fixPage(){
    BODY.style.height = "100%";
    BODY.style.width = "100%";
    BODY.style.overflow = "hidden";
    BODY.style.backgroundColor = colorDark;
}

function unfixPage(){
    BODY.style.height = null;
    BODY.style.width = null;
    BODY.style.overflow = null;
    BODY.style.backgroundColor = null;
}

function dropContent(){
    if(dropdownContent.style.maxHeight === "0px"){
        dropdownContent.style.maxHeight = "1000em";
    } else{
        dropdownContent.style.maxHeight = "0px";
    }
}
