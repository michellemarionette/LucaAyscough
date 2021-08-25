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

function activatePage(name){
    document.querySelector("#" + name).style.display = "inline"; 
    document.querySelector("#" + name + "_button").style.color = "#acd9ff";
}

document.getElementById("about_button").addEventListener("click", function(){
    disablePages();
    activatePage("about"); 
});

document.getElementById("work_button").addEventListener("click", function(){
    disablePages();
    activatePage("work"); 
});

document.getElementById("discography_button").addEventListener("click", function(){
    disablePages();
    activatePage("discography"); 
});

document.getElementById("gravity_button").addEventListener("click", function(){
    disablePages();
    activatePage("gravity"); 
});
