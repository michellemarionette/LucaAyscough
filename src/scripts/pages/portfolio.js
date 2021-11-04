// Variables.

const dropButton = document.querySelector(".dropdown_button");
const dropdownContent = document.querySelector(".dropdown_container");

dropButton.addEventListener("click", function(){
    dropContent();
});


// Functions.

function dropContent(){
    if(dropdownContent.style.maxHeight === "0px"){
        dropdownContent.style.maxHeight = "1000em";
    } else{
        dropdownContent.style.maxHeight = "0px";
    }
}


// Execution.

dropdownContent.style.maxHeight = "0px";