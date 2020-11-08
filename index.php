<!DOCTYPE html>
<html lang="en">
<?php include './partials/head.php'; ?>

<body>
  <header>
    <?php include './partials/nav.php'; ?>
    <audio id="audio" src="./audio/history_of_tango.mp3" controlsList="nodownload" controls autoplay loop></audio>
  </header>
  <main class="home">
    <div class="slideshow">
      <img class="slides" src="./images/1.jpg" alt="In Crescendo Duo 1">
      <img class="slides" src="./images/2.jpg" alt="In Crescendo Duo 2">
    </div>
    <section class="cards">
      <div class="us cushycms" id="about-us">
        <h3>About us</h3>
        <p>A classical clarinet and guitar duo playing instrumental duets with a combined experience of over 15 years.</p>
        <p>Residing in Copenhagen, available Europe-wide for events, parties, weddings and more.</p>
        <p><strong>Clarinet</strong> - Flóra Acosta</p>
        <p><strong>Guitar</strong> - Daniel Acosta</p>
      </div>
      <div class="contact cushycms" id="contact">
        <h3>Contact</h3>
        <p>For hire enquiries or for more information, feel free to contact us at any time:</p>
        <p><strong>E-mail:</strong> <a href="mailto:increscendoduo@gmail.com?Subject=Enquiry" target="_blank" rel="noopener noreferrer">increscendoduo@gmail.com <i class="fas fa-external-link-alt"></i></a></p>
        <p><strong>Phone:</strong> <a href="tel:+4552673527">+45 5267 3527 <i class="fas fa-external-link-alt"></i></a></p>
      </div>
      <div class="upcoming">
        <h3>Upcoming concerts</h3>
        <ul class="cushycms" id="upcoming-concerts">
          <li>Coming soon</li>
        </ul>
        <h3 class="past">Past events</h3>
        <ul class="cushycms" id="past-events">
          <li>
            <a class="event-link" href="https://allevents.in/greve/h%C3%A6ngek%C3%B8jekoncert-in-crescendo-duo/200018939852335?ref=past-event-page" target="_blank" rel="noopener noreferrer">
              <span><strong>Apr 25, 2020</strong>&nbsp;- Hængekøje&shy;koncert: In Crescendo Duo<br> -&nbsp;<em>Køge Museum, Køge, Denmark</em></span>
              <img src="https://cdn7.allevents.in/banners/f24ac600-52e0-11ea-8495-6b2c0adf112f-rimg-w526-h296-gmir.jpg?v=1582093668" alt="Event image" onerror="this.style.display='none'">
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <?php include './partials/footer.php'; ?>
</body>

</html>