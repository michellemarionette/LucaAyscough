function initListeners(){
    openMenuButton.addEventListener("click", function(){
        updateMenuState(true);
    });
    
    closeMenuButton.addEventListener("click", function(){
        updateMenuState(false);
    });
    
    aboutButton.addEventListener("click", function(){
        setPageVisibility("about");
    });
    
    workButton.addEventListener("click", function(){
        setPageVisibility("work");
    });
    
    discographyButton.addEventListener("click", function(){
        setPageVisibility("discography");
    });
    
    gravityButton.addEventListener("click", function(){
        setPageVisibility("gravity");
    });

    dropButton.addEventListener("click", function(){
        dropContent();
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