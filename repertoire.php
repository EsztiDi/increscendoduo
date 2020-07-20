<!DOCTYPE html>
<html lang="en">
<?php
$title = "Repertoire - ";
include './partials/head.php';
?>
<body>
  <header>
    <?php include './partials/nav.php'; ?>
  </header>
  <main>
    <h2>Repertoire</h2>
    <section class="rep">
      <div>
        <h3>S. XIX</h3>
        <ul>
          <li>Grand Potpourri Op. 53, M. Giuliani</li>
        </ul>
        <h3>S. XX</h3>
        <ul>
          <li>History of Tango, A. Piazzolla</li>
          <li>Romanian Folk Dances, B. Bartók</li>
          <li>Sonata in D minor, F. Rebay</li>
          <li>Capringo, K. Vassiliev</li>
        </ul>
      </div>
      <div class="img-container">
        <img src="./images/2.jpg" alt="In Crescendo Duo 2">
      </div>
    </section>
  </main>
  <?php include './partials/footer.php'; ?>
</body>
</html>