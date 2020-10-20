<!DOCTYPE html>
<html lang="en">
<?php
$title = "Contact - ";
include './partials/head.php';
?>

<body>
  <header>
    <?php include './partials/nav.php'; ?>
  </header>
  <main>
    <h2>Contact</h2>
    <section class="cards contacts">
      <h4 class="cushycms" id="contact-intro">We welcome all enquiries!<br>Please contact us via one of the options below and we will get back to you as quickly as possible.</h4>
      <div class="email">
        <h3>E-mail</h3>
        <a href="mailto:increscendoduo@gmail.com?Subject=Enquiry" target="_blank" rel="noopener noreferrer">increscendoduo@gmail.com <i class="fas fa-external-link-alt"></i></a>
      </div>
      <div class="phone">
        <h3>Telephone</h3>
        <a href="tel:+4552673527">+45 5267 3527 <i class="fas fa-external-link-alt"></i></a>
      </div>
      <div class="instagram">
        <h3>Instagram</h3>
        <a href="https://www.instagram.com/increscendoduo/" target="_blank" rel="noopener noreferrer">@increscendoduo <i class="fas fa-external-link-alt"></i></a>
      </div>
      <div class="facebook">
        <h3>Facebook</h3>
        <a href="https://www.facebook.com/In-Crescendo-Duo-105776074485190" target="_blank" rel="noopener noreferrer">In Crescendo Duo <i class="fas fa-external-link-alt"></i></a>
      </div>
    </section>
  </main>
  <?php include './partials/footer.php'; ?>
</body>

</html>