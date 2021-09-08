function initListeners(){
    openMenuButton.addEventListener("click", function(){
        updateMenuState(true);
    });
    
    closeMenuButton.addEventListener("click", function(){
        updateMenuState(false);
    });
    
    homeButton.addEventListener("click", function(){
        setPageVisibility("home");
        if(menuIsOpen){
            updateMenuState(false);
        }
    });
    
    workButton.addEventListener("click", function(){
        setPageVisibility("work");
        if(menuIsOpen){
            updateMenuState(false);
        }
    });
    
    discographyButton.addEventListener("click", function(){
        setPageVisibility("discography");
        if(menuIsOpen){
            updateMenuState(false);
        }
    });
    
    gravityButton.addEventListener("click", function(){
        setPageVisibility("gravity");
        if(menuIsOpen){
            updateMenuState(false);
        }
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