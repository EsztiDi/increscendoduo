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
    <section class="photos">
      <div class="card tall">
        <img src="./images/2.jpg" alt="In Crescendo Duo 2">
      </div>
      <div class="card">
        <img src="./images/3.jpg" alt="Daniel Acosta 1">
      </div>
      <div class="card tall">
        <img src="./images/9.jpg" alt="Flora Acosta 4">
      </div>
      <div class="card">
        <img src="./images/5.jpg" alt="Daniel Acosta 3">
      </div>
      <div class="card tall">
        <img src="./images/8.jpg" alt="Flora Acosta 3">
      </div>
      <div class="card tall">
        <img src="./images/6.jpg" alt="Flora Acosta 1">
      </div>
      <div class="card tall">
        <img src="./images/11.jpg" alt="Daniel Acosta 5">
      </div>
      <div class="card tall">
        <img src="./images/4.jpg" alt="Daniel Acosta 2">
      </div>
      <div class="card tall">
        <img src="./images/7.jpg" alt="Flora Acosta 2">
      </div>
      <div class="card">
        <img src="./images/1.jpg" alt="In Crescendo Duo 1">
      </div>
      <div class="card">
        <img src="./images/10.jpg" alt="Daniel Acosta 4">
      </div>
    </section>
    <div class="modal">
      <div class="modal-content">
        <i class="fas fa-times close"></i>
        <i class="fas fa-angle-left prev-slide"></i>
        <img class="modal-slides" src="./images/2.jpg" alt="In Crescendo Duo 2">
        <img class="modal-slides" src="./images/3.jpg" alt="Daniel Acosta 1">
        <img class="modal-slides" src="./images/9.jpg" alt="Flora Acosta 4">
        <img class="modal-slides" src="./images/5.jpg" alt="Daniel Acosta 3">
        <img class="modal-slides" src="./images/8.jpg" alt="Flora Acosta 3">
        <img class="modal-slides" src="./images/6.jpg" alt="Flora Acosta 1">
        <img class="modal-slides" src="./images/11.jpg" alt="Daniel Acosta 5">
        <img class="modal-slides" src="./images/4.jpg" alt="Daniel Acosta 2">
        <img class="modal-slides" src="./images/7.jpg" alt="Flora Acosta 2">
        <img class="modal-slides" src="./images/1.jpg" alt="In Crescendo Duo 1">
        <img class="modal-slides" src="./images/10.jpg" alt="Daniel Acosta 4">
        <i class="fas fa-angle-right next-slide"></i>
      </div>
    </div>
  </main>
  <?php include './partials/footer.php'; ?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js" crossorigin="anonymous"></script>
  <script src="./scripts/photos.js"></script>
</body>

</html>