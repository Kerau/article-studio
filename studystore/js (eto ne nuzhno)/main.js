// $(function() {
//   // Owl Carousel
//   var owl = $(".owl-carousel");
//   owl.owlCarousel({
//     items: 3,
//     margin: 10,
//     loop: true,
//     nav: true
//   });
// });


// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
})