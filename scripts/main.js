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

    // slides.eq(slideIndex - 1).fadeTo(1000, 0);
    slides.each(function(index){
      // $(this).css("z-index", -index);
      $(this).fadeOut(1000);
    });

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    // if (slideIndex == slides.length) {
    //   slides.eq(0).fadeTo(500, 0.4);
    //   slides.eq(0).css({"left": "0", "width": "100%", "filter": "blur(3px)", "z-index": -slideIndex});
    // } else {
    //   slides.eq(slideIndex).fadeTo(500, 0.4);
    //   slides.eq(slideIndex).css({"left": "0", "width": "100%", "filter": "blur(3px)"});
    // }
    slides.eq(slideIndex - 1).fadeIn(1000);
    // slides.eq(slideIndex - 1).fadeTo(500, 1);
    // slides.eq(slideIndex - 1).css({"left": "20%", "width": "60%", "filter": ""});
    setTimeout(slideShow, 7000);
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    start: "top 90%",
    // end: "50% bottom",
  });
  gsap.defaults({
    duration: 0.7,
    opacity: 0
  });

  gsap.from(".us", { x: innerWidth * -0.1, scrollTrigger: ".us" });
  gsap.from(".next", { x: innerWidth * 0.1, scrollTrigger: ".next" });
  gsap.from(".other", { y: innerWidth * 0.1, scrollTrigger: {trigger: ".other", start: "top bottom" }});
  
  gsap.from(".flora .img-container", { x: innerWidth * -0.1, scrollTrigger: ".flora" });
  gsap.from(".flora h3", { x: innerWidth * 0.1, scrollTrigger: ".flora" });
  $(".flora p").each(function() {
    gsap.from(this, { x: innerWidth * 0.1, scrollTrigger: this });
  });

  gsap.from(".daniel .img-container", { x: innerWidth * 0.1, scrollTrigger: ".daniel" });
  gsap.from(".daniel h3", { x: innerWidth * -0.1, scrollTrigger: ".daniel" });
  $(".daniel p").each(function() {
    gsap.from(this, { x: innerWidth * -0.1, scrollTrigger: this });
  });

})