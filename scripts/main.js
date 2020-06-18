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

    slides.eq(slideIndex - 1).fadeTo(1000, 0);
    slides.each(function(index){
      $(this).css("z-index", -index);
    });

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex == slides.length) {
      slides.eq(0).fadeTo(500, 0.4);
      slides.eq(0).css({"left": "0", "width": "100%", "filter": "blur(3px)", "z-index": -slideIndex});
    } else {
      slides.eq(slideIndex).fadeTo(500, 0.4);
      slides.eq(slideIndex).css({"left": "0", "width": "100%", "filter": "blur(3px)"});
    }
    slides.eq(slideIndex - 1).fadeTo(500, 1);
    slides.eq(slideIndex - 1).css({"left": "20%", "width": "60%", "filter": ""});
    setTimeout(slideShow, 7000);
  }

  let us = gsap.timeline({
    scrollTrigger: {
      trigger: ".us",
      start: "top 90%",
      end: "50% bottom",
    },
  });
  us.from(".us", { opacity: 0, x: innerWidth * -0.2 });

  let next = gsap.timeline({
    scrollTrigger: {
      trigger: ".next",
      start: "top 90%",
      end: "50% bottom",
    },
  });
  next.from(".next", { opacity: 0, x: innerWidth * 0.2 });

  let other = gsap.timeline({
    scrollTrigger: {
      trigger: ".other",
      start: "top 90%",
      end: "50% bottom",
    },
  });
  other.from(".other", { opacity: 0, y: innerHeight * 0.2 });

    

})