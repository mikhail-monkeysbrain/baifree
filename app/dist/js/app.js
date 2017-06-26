$(document).ready(function(){
	$(".slider").owlCarousel({
    loop:true,
    nav:true,
    margin:0,
    navText: [],
    dots:false,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      1024:{
        items:3
      },
      1200:{
        items:4
      }
    }
  });
});

$(function(){
  $(window).scroll(function(){
    roll = $(window).scrollTop();
    if(roll > 65){
      $('header').addClass('fix');
    }
    else{
      $('header').removeClass('fix');
    }
  });
});


$(document).ready(function() {
  $("nav").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
});