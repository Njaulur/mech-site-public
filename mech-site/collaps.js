var collaps = document.getElementsByClassName("collapsible");

collaps[0].addEventListener("click", function(){
    var content = this.nextElementSibling;

    if (content.style.display === "block"){
        content.style.display = "none";
    } else{
        content.style.display = "block";
    }
});