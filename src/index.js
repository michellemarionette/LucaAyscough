function disablePages(){
    document.querySelector("#about").style.display = "none";
    document.querySelector("#discography").style.display = "none";
    document.querySelector("#work").style.display = "none";
    document.querySelector("#gravity").style.display = "none";

    document.querySelector("#about_button").style.color = "#efefea";
    document.querySelector("#discography_button").style.color = "#efefea";
    document.querySelector("#work_button").style.color = "#efefea";
    document.querySelector("#gravity_button").style.color = "#efefea";
}

function enablePage(name){
    document.querySelector("#" + name).style.display = "inline"; 
    document.querySelector("#" + name + "_button").style.color = "#acd9ff";
}

function openMenu(){
    document.querySelector(".header").style.display = "flex";
    document.querySelector("#open_menu_button").style.display = "none";
    document.querySelector("#close_menu_button").style.display = "inline";
}

function closeMenu(){
    document.querySelector(".header").style.display = "none";
    document.querySelector("#open_menu_button").style.display = "inline";
    document.querySelector("#close_menu_button").style.display = "none";
}

document.getElementById("open_menu_button").addEventListener("click", function(){
    openMenu();
});

document.getElementById("close_menu_button").addEventListener("click", function(){
    closeMenu();
});

document.getElementById("about_button").addEventListener("click", function(){
    disablePages();
    enablePage("about"); 
});

document.getElementById("work_button").addEventListener("click", function(){
    disablePages();
    enablePage("work"); 
});

document.getElementById("discography_button").addEventListener("click", function(){
    disablePages();
    enablePage("discography"); 
});

document.getElementById("gravity_button").addEventListener("click", function(){
    disablePages();
    enablePage("gravity"); 
});
