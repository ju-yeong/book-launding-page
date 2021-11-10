AOS.init();

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// scrolltriger animaion


ScrollTrigger.create({
  trigger: ".sec04-img4",
  start: "10px 50px",
  end: "+=150",
  toggleActions: 'play reverse none reverse',
  toggleClass: {
      targets: ".sec04-img4", 
      className: "w-100"
  }
});