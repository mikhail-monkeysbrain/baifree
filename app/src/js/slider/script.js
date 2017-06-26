$(document).ready(function(){
	$(".slider").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    dots:false,
    autoplay:true,
    responsive:{
      0:{
        items:1 
      },
      1024:{
        items:3
      }
    }
  });
});