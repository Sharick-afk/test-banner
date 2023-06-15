document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".adbro-thuyen-xua__logo").classList.add("shake");
  }, 1000);
  var swiper = new Swiper(".adbro-thuyen-xua__slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000
    }
  });
});