$(document).ready(function() {

  var path = window.location.pathname;
  var audio = document.getElementById("audio");
  if (window.matchMedia("(max-width: 640px)").matches && audio) {
    audio.remove();
  } else if (path == "/" || path.includes("index")) {
    audio.pause();
    audio.volume = 0.15;
    audio.play();
    $(window).one("click", function() {
      audio.play();
    })
  }

  // if (window.matchMedia("(max-width: 640px)").matches) {
    var slideIndex = 0;
    // $(".container").fadeIn(1000);
    slideShow();
    function slideShow() {
      var slides = $(".slides");

      slides.each(function(index){
        $(this).fadeOut(1000);
      });

      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1;}
      slides.eq(slideIndex - 1).fadeIn(1000);
      setTimeout(slideShow, 7000);
    }
  // }

  $(".card").each(function(index) {
    $(this).on("click", function () {
      currentSlide(index + 1);
      if (window.matchMedia("(pointer: fine)").matches) {
        $("body").addClass("modal-open");
        // $("body > header").addClass("modal-open");
      } else {
        $("body").addClass("phone-modal");
      }
      $(".modal").fadeIn();
    })
  });

  function hideModal() {
    $(".modal").fadeOut();
    if (window.matchMedia("(pointer: fine)").matches) {
      setTimeout(function () {
        $("body").removeClass("modal-open");
      }, 350);
      // $("body > header").removeClass("modal-open");
    } else {
      $("body").removeClass("phone-modal");
    }
  }
  
  var modal = document.querySelector(".modal-content"),
  swipe = new Hammer(modal);
  swipe.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
  swipe.on("swiperight", function (ev) {
    plusSlides(-1);
  });
  swipe.on("swipeleft", function (ev) {
    plusSlides(1);
  });
  swipe.on("swipeup swipedown", function (ev) {
    hideModal();
  });

  $(".close").on("click", function() {
    hideModal();
  });
  $(window).click(function(event) {
    if ($(event.target).hasClass("modal-content")) {
      hideModal();
    }
  });
  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      hideModal();
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

  $("header .fa-bars, header .fa-times").on("click", function () {
    $("body > header").toggleClass("show1");
    setTimeout(function() {
      $("nav ul").toggleClass("show2");
    }, 100);
    $("header .fa-bars, header .fa-times").toggle(500);
  });

  $(".cards > *, .bio p, .photos .card").each(function (index) {
    $(this).css("animation-delay", index * 0.15 + "s");
  });
  $(".daniel h3, .daniel .img-container").each(function () {
    $(this).css("animation-delay", $(".flora p").length * 0.15 + "s");
  });;

  // gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger.defaults({
  //   start: "10% bottom",
  // });

  // ScrollTrigger.batch(".cards div", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { y: 70, opacity: 0, duration: 0.6, stagger: 0.2 });
  //   },
  //   once: true,
  // });

  // ScrollTrigger.batch(".flora h3, .flora div", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { opacity: 0, duration: 0.8, stagger: 0.2 });
  //   },
  //   once: true,
  // });
  // ScrollTrigger.batch(".flora p", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { y: 70, opacity: 0, duration: 0.6, stagger: 0.2 });
  //   },
  //   once: true,
  // });

  // ScrollTrigger.batch(".daniel h3, .daniel div", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { opacity: 0, duration: 0.8, stagger: 0.2 });
  //   },
  //   once: true,
  // });
  // ScrollTrigger.batch(".daniel p", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { y: 70, opacity: 0, duration: 0.6, stagger: 0.2 });
  //   },
  //   once: true,
  // });

  // ScrollTrigger.batch(".rep h3, .rep div", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { opacity: 0, duration: 0.8, stagger: 0.2 });
  //   },
  //   once: true,
  // });
  // ScrollTrigger.batch(".rep p", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { y: 70, opacity: 0, duration: 0.6, stagger: 0.2 });
  //   },
  //   once: true,
  // });

  // // gsap.set(".card", { y: 100, opacity: 0 });
  // ScrollTrigger.batch(".card", {
  //   onEnter: (elements, triggers) => {
  //     // gsap.to(elements, { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 });
  //     gsap.from(elements, { y: 70, opacity: 0, duration: 0.6, stagger: 0.2 });
  //   },
  //   once: true
  // });

  // ScrollTrigger.batch(".music h3, .music div", {
  //   onEnter: (elements, triggers) => {
  //     gsap.from(elements, { opacity: 0, duration: 0.8, stagger: 0.2 });
  //   },
  //   once: true,
  // });


})