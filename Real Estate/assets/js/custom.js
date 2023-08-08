$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoplay:false,
    loop:true,
    margin:0,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
})

$(function(){

    //Scroll event
    $(window).scroll(function(){
      let scrolled = $(window).scrollTop();
      if (scrolled > 200) $('.go-top').fadeIn('slow');
      if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
    
    //Click event
    $('.go-top').click(function () {
      $("html, body").animate({ scrollTop: "0" },  500);
    });
  
  });
  });