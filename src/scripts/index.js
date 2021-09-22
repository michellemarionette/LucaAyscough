const root = window.getComputedStyle(document.querySelector(":root"));
const colorDark = root.getPropertyValue("--color-dark");
const colorLight = root.getPropertyValue("--color-light");

const BODY = document.querySelector("body");
const HEADER = document.querySelector(".header");

const mediaQuery = matchMedia(`(max-width: 1000px)`);

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