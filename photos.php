<!DOCTYPE html>
<html lang="en">
<?php
$title = "Photos - ";
include './partials/head.php';
?>

<body>
  <header>
    <?php include './partials/nav.php'; ?>
  </header>
  <main>
    <h2>Photos</h2>
    <section class="photos cushycms" id="photos">
      <img class="tall" src="/images/2.jpg" alt="In Crescendo Duo 2" onerror="this.style.display='none'">
      <img src="/images/3.jpg" alt="Daniel Acosta 1" onerror="this.style.display='none'">
      <img class="tall" src="/images/9.jpg" alt="Flora Acosta 4" onerror="this.style.display='none'">
      <img src="/images/5.jpg" alt="Daniel Acosta 3" onerror="this.style.display='none'">
      <img class="tall" src="/images/8.jpg" alt="Flora Acosta 3" onerror="this.style.display='none'">
      <img class="tall" src="/images/6.jpg" alt="Flora Acosta 1" onerror="this.style.display='none'">
      <img class="tall" src="/images/11.jpg" alt="Daniel Acosta 5" onerror="this.style.display='none'">
      <img class="tall" src="/images/4.jpg" alt="Daniel Acosta 2" onerror="this.style.display='none'">
      <img class="tall" src="/images/7.jpg" alt="Flora Acosta 2" onerror="this.style.display='none'">
      <img src="/images/1.jpg" alt="In Crescendo Duo 1" onerror="this.style.display='none'">
      <img src="/images/10.jpg" alt="Daniel Acosta 4" onerror="this.style.display='none'">
    </section>
    <div class="modal">
      <div class="modal-content">
        <i class="fas fa-times close"></i>
        <i class="fas fa-angle-left prev-slide"></i>
        <div class="popup cushycms" id="pop-up">
          <img src="/images/2.jpg" alt="In Crescendo Duo 2">
          <img src="/images/3.jpg" alt="Daniel Acosta 1">
          <img src="/images/9.jpg" alt="Flora Acosta 4">
          <img src="/images/5.jpg" alt="Daniel Acosta 3">
          <img src="/images/8.jpg" alt="Flora Acosta 3">
          <img src="/images/6.jpg" alt="Flora Acosta 1">
          <img src="/images/11.jpg" alt="Daniel Acosta 5">
          <img src="/images/4.jpg" alt="Daniel Acosta 2">
          <img src="/images/7.jpg" alt="Flora Acosta 2">
          <img src="/images/1.jpg" alt="In Crescendo Duo 1">
          <img src="/images/10.jpg" alt="Daniel Acosta 4">
        </div>
        <i class="fas fa-angle-right next-slide"></i>
      </div>
    </div>
  </main>
  <?php include './partials/footer.php'; ?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js" crossorigin="anonymous"></script>
  <script>
    $(document).ready(function () {
    // Modal slideshow for photos
    $(".photos img").each(function (index) {
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
      var slides = $(".popup img");
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

  </script>
</body>

</html>