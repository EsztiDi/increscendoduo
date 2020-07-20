$(document).ready(function() {

  var audio = document.getElementById("audio");
  if (window.matchMedia("(max-width: 640px)").matches && audio) {
    audio.remove();
  } else if (audio) {
    audio.pause();
    audio.volume = 0.15;
    audio.play();
    $(window).one("click", function() {
      audio.play();
    })
  }

  $("nav a").each(function() {
    var path = window.location.pathname,
    href = $(this).attr("href");
    if (href.includes(path) && path.length > 1) {
      $(this).toggleClass("active");
    }
  })

  var slideIndex = 0;
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


})