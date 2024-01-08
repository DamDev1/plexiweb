var Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('body'));

const toggle = document.querySelector(".toggle").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("active-nav")
  })