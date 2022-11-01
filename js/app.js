let menuBarsBtn = document.querySelector("#menu-bars");

let navBar = document.querySelector(".nav__list");

menuBarsBtn.addEventListener("click", ()=>{
    menuBarsBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});