const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav");
const navLink = document.getElementsByClassName("link-header");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
});

function myFunction() {
    var element = document.getElementsByClassName("link-header");
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}
