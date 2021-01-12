<!doctype html>
<html class="no-js" lang="ja">

<head>
  <?php require_once __DIR__ . '/./templates/meta.php'; ?>
  <link rel="stylesheet" href="./css/home.min.css">

</head>

<body class="home">
  <?php require_once __DIR__ . '/./templates/navbar.php'; ?>
  <main>
    <div class="container">

      <section class="content">
        <header>
          <h1>That Game</h1>
          <p>Everyone knows it,<br>but no one knows it's name...</p>
        </header>
        <div class="btn-box">
          <a class="btn" href="fight.php">Play</a>
          <a class="btn" href="history.php">History</a>
        </div>
      </section>

      <div class="adsense" style="width:100%; height: 50px; background-color: #aaa;">
        <a href="./" target="_blank" rel="noreferrer noopener">home</a>
      </div>
    </div>

  </main>
  <?php require_once __DIR__ . '/./templates/footer.php'; ?>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>

</body>

</html>
