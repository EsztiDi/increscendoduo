$(document).ready(function() {
  
  var prevScrollPos = window.pageYOffset;
  $(window).on("scroll", function(){
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      $("body > header").css("top", "0");
    } else {
      $("body > header").css("top", "-21vw");
    }
    prevScrollPos = currentScrollPos;
  })

  var slideIndex = 0;
  slideShow();
  function slideShow() {
    var slides = $(".slides");
    slides.each(function () {
      $(this).fadeOut("slow");
    });
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides.eq(slideIndex - 1).fadeIn("slow");
    setTimeout(slideShow, 7000);
  }

})