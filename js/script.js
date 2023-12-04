var Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('body'));

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  const toggle = document.querySelector(".toggle").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("active-nav")
  })