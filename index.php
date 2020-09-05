<!DOCTYPE html>
<html lang="en">
<?php include './partials/head.php'; ?>

<body>
  <header>
    <?php include './partials/nav.php'; ?>
    <audio id="audio" src="./audio/In Crescendo Duo - History of Tango.mp3" controlsList="nodownload" controls autoplay loop></audio>
  </header>
  <main class="home">
    <div class="slideshow">
      <img class="slides" src="./images/1.jpg" alt="In Crescendo Duo 1">
      <img class="slides" src="./images/2.jpg" alt="In Crescendo Duo 2">
    </div>
    <section class="cards">
      <div class="us cushycms" id="About us">
        <h3>About us</h3>
        <p>We are an instrumental duo - clarinet and guitar - performing classical duets with a combined experience of over 15 years.</p>
        <p>Residing in Copenhagen, available Europe-wide for events, parties, weddings and more.</p>
        <p>Clarinet - Flóra Acosta</p>
        <p>Guitar - Daniel Acosta</p>
      </div>
      <div class="contact cushycms" id="Contact">
        <h3>Contact</h3>
        <p>For hire enquiries or for more information, feel free to contact us at any time:</p>
        <p>E-mail: increscendoduo@gmail.com</p>
        <p>Phone: +45 5267 3527</p>
      </div>
      <div class="next cushycms" id="Next performances">
        <h3>Next performances</h3>
        <ul>
          <li>Coming soon</li>
        </ul>
      </div>
    </section>
  </main>
  <?php include './partials/footer.php'; ?>
</body>

</html>