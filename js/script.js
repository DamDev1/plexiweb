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


  // GSAP ANIMATION

const heroContent = document.querySelector("#hero-section .container .content");

const heroImage = document.querySelector("#hero-section .container .hero-image");

gsap.from("header", 1 ,{
  y: -300,
  opacity: 0
})

gsap.from(heroContent, 2 ,{
  x: -300,
  opacity: 0
})

gsap.from(heroImage, 2 ,{
  x: 300,
  opacity: 0
})


gsap.from(".partners", 2, {
  x: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: ".partners",
    start: "+=-700",
    markers: true,

  }
})
