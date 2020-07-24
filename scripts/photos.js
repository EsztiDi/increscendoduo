$(document).ready(function () {
  // Modal slideshow for photos
  $(".card").each(function (index) {
    $(this).on("click", function () {
      currentSlide(index + 1);
      // Different css for body depending on device
      if (window.matchMedia("(pointer: fine)").matches) {
        $("body").addClass("modal-open");
      } else {
        $("body").addClass("phone-modal");
      }
      $(".modal").fadeIn();
    });
  });

  function hideModal() {
    $(".modal").fadeOut();
    if (window.matchMedia("(pointer: fine)").matches) {
      setTimeout(function () {
        $("body").removeClass("modal-open");
      }, 350);
    } else {
      $("body").removeClass("phone-modal");
    }
  }

  // Swipe functionality on touchscreens
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

  // Closing modal with icon in the corner or clicking outside of the photo
  $(".close").on("click", function () {
    hideModal();
  });
  $(window).click(function (event) {
    if ($(event.target).hasClass("modal-content")) {
      hideModal();
    }
  });
  // Changing photos with left/right arrows, closing modal with "esc"
  $(document).keydown(function (event) {
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

  // Left/right icons next to the photo
  $(".prev-slide").on("click", function () {
    plusSlides(-1);
  });
  $(".next-slide").on("click", function () {
    plusSlides(1);
  });

  // Slideshow functions
  var modalSlideIndex = 1;
  modalSlides(modalSlideIndex);

  function plusSlides(n) {
    modalSlides((modalSlideIndex += n));
  }

  function currentSlide(n) {
    modalSlides((modalSlideIndex = n));
  }

  function modalSlides(n) {
    var slides = $(".modal-slides");
    if (n > slides.length) {
      modalSlideIndex = 1;
    }
    if (n < 1) {
      modalSlideIndex = slides.length;
    }
    slides.each(function () {
      $(this).hide();
    });
    slides.eq(modalSlideIndex - 1).fadeIn();
  }
});
