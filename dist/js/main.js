$(document).ready(function () {
   $('.slider').slick({
      slidesToShow: 2,
      infinite: false,
      swipeToSlide: true,
      responsive: [
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
   });
})