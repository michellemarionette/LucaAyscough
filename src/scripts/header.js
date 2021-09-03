const openMenuButton = document.querySelector(".open_menu_button");
const closeMenuButton = document.querySelector(".close_menu_button");
var menuIsOpen = false;

function updateMenuState(state){
    menuIsOpen = state;

    if(state === true){
        HEADER.style.display = "flex";
        openMenuButton.style.display = "none";
        closeMenuButton.style.display = "block";
        fixPage();
    }

    else{
        HEADER.style.display = null;
        openMenuButton.style.display = null;
        closeMenuButton.style.display = null; 
        unfixPage(); 
    }
}