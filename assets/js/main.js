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

$(".event01>.event-num").each(function(){
  ScrollTrigger.create({
    // markers: true,
    trigger: ".event01>.event-num",
    toggleClass: {
      targets: ".event01>.event-num", 
      className: "event-num-show"
    }
  });
});

$(".event02>.event-num").each(function(){
  ScrollTrigger.create({
    trigger: ".event02>.event-num",
    toggleClass: {
      targets: ".event02>.event-num", 
      className: "event-num-show"
    }
  });
});