const PAGES = ["home", "work", "discography", "gravity"];
var pagesState = [true, false, false, false];

function updateActiveLink(){
    for(let i = 0; i < PAGES.length; i++){
        if(pagesState[i] === true)
            document.querySelector("#" + PAGES[i] + "_button").style.color = activeLink;
        else
            document.querySelector("#" + PAGES[i] + "_button").style.color = null;
    }
}

function updatePageVisibility(){
    for(let i = 0; i < pagesState.length; i++){
        let page = document.querySelector("." + PAGES[i]);

        if(pagesState[i])
            page.style.display = "block";
        else
            page.style.display = null;
    }
}

function setPageVisibility(name){
    for(let i = 0; i < PAGES.length; i++){
        if(PAGES[i] === name)
            pagesState[i] = true;
        else
            pagesState[i] = false;
    }

    updatePageVisibility();
    updateActiveLink();
}