$(document).ready(function() {

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
});