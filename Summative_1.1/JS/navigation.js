window.mdc.autoInit();
const lists = document.querySelectorAll(".mdc-bottom-navigation__list-item");
const activatedClass = "mdc-bottom-navigation__list-item--activated";

const removeOrAddActivatedClass = event => {
  lists.forEach(e => {
    e.classList.remove(activatedClass);

  });
  event.target.classList.toggle(activatedClass);
};

lists.forEach(e => e.addEventListener("click", removeOrAddActivatedClass));

const small = document.querySelector("#small");
const big = document.querySelector("#big");
const drink = document.querySelector("#drink");
const desert = document.querySelector("#desert");
const heading = document.querySelector("#pageHeading");
const bigplate = document.querySelector("#bigplates");
const smallplate = document.querySelector("#smallplates");
const drinksSection = document.querySelector("#drinks");
const desertSection = document.querySelector("#deserts");

small.addEventListener("click", changeTextSmall);
big.addEventListener("click", changeTextBig);
drink.addEventListener("click", changeTextDrinks);
desert.addEventListener("click", changeTextDeserts);

function changeTextSmall() {
  //console.log("complete")  Used for testing purposes
  heading.textContent = "Small Plates"
  bigplate.style.display = "none";
  desertSection.style.display = "none";
  drinksSection.style.display = "none";
  smallplate.style.display = "block";
}
function changeTextBig() {
  //console.log("complete")  Used for testing purposes
  heading.textContent = "Big Plates"
  bigplate.style.display = "block";
  desertSection.style.display = "none";
  drinksSection.style.display = "none";
  smallplate.style.display = "none";
}
function changeTextDrinks() {
  //console.log("complete")  Used for testing purposes
  heading.textContent = "Drinks"
  bigplate.style.display = "none";
  desertSection.style.display = "none";
  drinksSection.style.display = "block";
  smallplate.style.display = "none";
}
function changeTextDeserts() {
  //console.log("complete")  Used for testing purposes
  heading.textContent = "Desserts"
  bigplate.style.display = "none";
  desertSection.style.display = "block";
  drinksSection.style.display = "none";
  smallplate.style.display = "none";
}