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

  $(".card").each(function(index) {
    $(this).on("click", function () {
      $(".photos-modal").fadeIn();
      currentSlide(index + 1);
    })
  });

  $(".close").on("click", function() {
    $(".photos-modal").fadeOut();
  })
  $(window).click(function(event) {
    if ($(event.target).hasClass("modal-content")) {
      $(".photos-modal").fadeOut();
    }
  });
  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      $(".photos-modal").fadeOut();
    }
    if (event.keyCode == 37) {
      plusSlides(-1);
    }
    if (event.keyCode == 39) {
      plusSlides(1);
    }
  });

  $(".prev-slide").on("click", function() {
    plusSlides(-1);
  });
  $(".next-slide").on("click", function () {
    plusSlides(1);
  });

  $(".thumbnail").each(function (index) {
    $(this).on("click", function () {
      currentSlide(index + 1);
    });
  });

  var modalSlideIndex = 1;
  modalSlides(modalSlideIndex);

  function plusSlides(n) {
    modalSlides(modalSlideIndex += n);
  }

  function currentSlide(n) {
    modalSlides(modalSlideIndex = n);
  }

  function modalSlides(n) {
    var slides = $(".modal-slides");
    if (n > slides.length) {modalSlideIndex = 1;}
    if (n < 1) {modalSlideIndex = slides.length;}
    slides.each(function () {
      $(this).hide();
    });
    slides.eq(modalSlideIndex - 1).fadeIn();
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    start: "10% bottom",
    // start: "top 90%",
    // end: "50% bottom",
  });
  // gsap.defaults({
  //   duration: 0.7,
  //   opacity: 0,
  // });

  gsap.from(".us", { x: innerWidth * -0.1, duration: 0.7, opacity: 0, scrollTrigger: ".us" });
  gsap.from(".next", { x: innerWidth * 0.1, duration: 0.7, opacity: 0, scrollTrigger: ".next" });
  gsap.from(".other", { y: innerWidth * 0.1, duration: 0.7, opacity: 0, scrollTrigger: {trigger: ".other", start: "-30% bottom"}});
  
  gsap.from(".flora .img-container", { x: innerWidth * -0.1, duration: 0.7, opacity: 0, scrollTrigger: ".flora" });
  gsap.from(".flora h3", { x: innerWidth * 0.1, duration: 0.7, opacity: 0, scrollTrigger: ".flora" });
  $(".flora p").each(function() {
    gsap.from(this, { x: innerWidth * 0.1, duration: 0.7, opacity: 0, scrollTrigger: this });
  });

  gsap.from(".daniel .img-container", { x: innerWidth * 0.1, duration: 0.7, opacity: 0, scrollTrigger: ".daniel" });
  gsap.from(".daniel h3", { x: innerWidth * -0.1, duration: 0.7, opacity: 0, scrollTrigger: ".daniel" });
  $(".daniel p").each(function() {
    gsap.from(this, { x: innerWidth * -0.1, duration: 0.7, opacity: 0, scrollTrigger: this });
  });

  gsap.set(".card", { y: innerWidth * 0.1, opacity: 0 });
  ScrollTrigger.batch(".card", {
    onEnter: (elements, triggers) => {
      gsap.to(elements, { y: 0, opacity: 1, duration: 0.7, stagger: 0.2 });
      // gsap.from(elements, { y: innerWidth * 0.1, opacity: 0, duration: 0.7, stagger: 0.2 });
    },
    start: "-50% bottom",
    once: true
  });


})