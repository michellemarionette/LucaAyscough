function initListeners(){
    openMenuButton.addEventListener("click", function(){
        updateMenuState(true);
    });
    
    closeMenuButton.addEventListener("click", function(){
        updateMenuState(false);
    });

    mediaQuery.addEventListener("change", function(){
        if(mediaQuery.matches && menuIsOpen){
            fixPage();
            closeMenuButton.style.display = "flex";
        } else if(!mediaQuery.matches && menuIsOpen){
            unfixPage();
            closeMenuButton.style.display = null;
        }
    });
}