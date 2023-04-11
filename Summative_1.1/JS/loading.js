const start = document.getElementById("start");
const lightbox = document.getElementById("load");

start.onclick = function(){
    lightbox.classList.add("fade-out");
    lightbox.classList.add("hidden");
    setTimeout(function wait(){
        lightbox.style.zIndex=("-5");
    }, 2000)
};




  