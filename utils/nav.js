
export const navToggle = document.querySelector(".navbar_toggle");
export const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})