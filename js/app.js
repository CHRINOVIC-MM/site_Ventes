let menuBarsBtn = document.querySelector("#menu-bars");

let navBar = document.querySelector(".nav__list");

menuBarsBtn.addEventListener("click", ()=>{
    menuBarsBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});

window.onscroll =  ()=>{
    menuBarsBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
}

document.querySelector("#search-icon").onclick = ()=>{
    document.querySelector("#search-form").classList.toggle("active");
}

document.querySelector("#close").onclick = ()=>{
    document.querySelector("#search-form").classList.remove("active");
}