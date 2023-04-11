/* This is your JavaScript file. You will use this file to create actions in your HTML pages */
window.onscroll = function() {
    var nav = document.getElementById('mainNav');
    var logo = document.getElementById('nav_logo');

    if(window.pageYOffset > 60) {
        nav.style.fontSize = "0.8em";
        logo.style.width = "220px"
        logo.style.height = "40px"
    } else {
        nav.style.fontSize = "1em";
        logo.style.width = "270px"
        logo.style.height = "50px"
    }

    if(window.pageYOffset > 500){
        nav.classList.add("onScrollDown");
        nav.classList.remove("noScroll");
    } else {
        nav.classList.remove("onScrollDown");
        nav.classList.add("noScroll");
    }
}