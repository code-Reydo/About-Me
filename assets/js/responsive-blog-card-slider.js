var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true
  }
});