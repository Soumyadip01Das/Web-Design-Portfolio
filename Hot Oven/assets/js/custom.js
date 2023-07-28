$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
      
      const hamburger = document.querySelector('.hamburger');
      const navLink = document.querySelector('.nav__link');

  hamburger.addEventListener('click', () => {
   navLink.classList.toggle('hide');
});
    });