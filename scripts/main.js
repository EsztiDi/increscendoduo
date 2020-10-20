$(document).ready(function () {
  // Audio settings and removing audio on small devices
  var audio = document.getElementById("audio");
  if (window.matchMedia("(max-width: 640px)").matches && audio) {
    audio.remove();
  } else if (audio) {
    audio.pause();
    audio.volume = 0.15;
    setTimeout(() => {
      audio.play();
    }, 1000);
  }

  // Highlighting current page in the menu
  $("nav a").each(function () {
    var path = window.location.pathname,
      href = $(this).attr("href");
    if (href.includes(path) && path.length > 1) {
      $(this).toggleClass("active");
    }
  });

  // Home page slideshow settings
  var slideIndex = 0;
  slideShow();
  function slideShow() {
    var slides = $(".slides");

    slides.each(function (index) {
      $(this).fadeOut(1000);
    });

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides.eq(slideIndex - 1).fadeIn(1000);
    setTimeout(slideShow, 7000);
  }

  // Icons for mobile menu
  $("header .fa-bars, header .fa-times").on("click", function () {
    $("body > header").toggleClass("show1");
    setTimeout(function () {
      $("nav ul").toggleClass("show2");
    }, 100);
    $("header .fa-bars, header .fa-times").toggle(500);
  });

  // Staggerred animation for some elements on home, bio and photos page
  $(".cards > *:not(h4), .bio p, .photos img").each(function (index) {
    $(this).css({
      animation: "up 0.6s forwards",
      "animation-delay": index * 0.15 + "s",
    });
  });
  $(".daniel h3, .daniel .img-container").each(function () {
    $(this).css("animation-delay", $(".flora p").length * 0.15 + "s");
  });
});
