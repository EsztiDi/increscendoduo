$(document).ready(function() {
  
  var prevScrollPos = window.pageYOffset;
  $(window).on("scroll", function(){
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      $("body > header").css("top", "0");
    } else {
      $("body > header").css("top", "-50%");
    }
    prevScrollPos = currentScrollPos;
  })

  var slideIndex = 0;
  slideShow();
  function slideShow() {
    var slides = $(".slides");

    slides.eq(slideIndex - 1).fadeTo(800, 0);
    slides.eq(slideIndex - 1).css({"left": "20%", "width": "60%", "filter": ""});
    slides.each(function(index){
      $(this).css("z-index", -index);
    })

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex == slides.length) {
      slides.eq(0).fadeTo(1200, 0.4);
      slides.eq(0).css({"left": "0", "width": "100%", "filter": "blur(3px)", "z-index": -slideIndex});
    } else {
      slides.eq(slideIndex).fadeTo(1200, 0.4);
      slides.eq(slideIndex).css({"left": "0", "width": "100%", "filter": "blur(3px)"});
    }
    slides.eq(slideIndex - 1).fadeTo(1500, 1);
    slides.eq(slideIndex - 1).css({"left": "20%", "width": "60%", "filter": ""});
    setTimeout(slideShow, 7000);
  }

})