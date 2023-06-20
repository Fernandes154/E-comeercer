const navbar = document.querySelector('.navbar');
const menuButton =  document.querySelector ('.menu-buttom');

menuButton.addEventListener("click",() => {
    navbar.classList.toggle("show-menu");

});