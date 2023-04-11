const hamburgerMenu = document.querySelector("#view-cart");
const closeIcon1 = document.querySelector("#close1");
const closeIcon2 = document.querySelector("#close2");
const close = document.querySelector("#close");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
const addSmallPlate = document.querySelector("#addSmall");
const addBigPlate= document.querySelector("#addBig");
const addDrink = document.querySelector("#addDrink");
const addDessert = document.querySelector("#addDessert");

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav,i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");
  closeIcon1.classList.toggle("show");
  closeIcon2.classList.toggle("show");
  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  hamburgerMenu.classList.add("fixedPosition");


  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    hamburgerMenu.classList.remove("fixedPosition");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

function showItemSmall(){
  nav1.classList.remove("hidden");
  toggleNav();
}
function showItemBig(){
  nav3.classList.remove("hidden");
  toggleNav();
}
function showItemDrinks(){
  nav4.classList.remove("hidden");
  toggleNav();
}
function showItemDessert(){
  nav2.classList.remove("hidden");
  toggleNav();
}


// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
addSmallPlate.addEventListener("click", showItemSmall);
addBigPlate.addEventListener("click", showItemBig);
addDrink.addEventListener("click", showItemDrinks);
addDessert.addEventListener("click", showItemDessert);
close.addEventListener("click", toggleNav);
