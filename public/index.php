<!doctype html>
<html class="no-js" lang="ja">

<head>
  <?php require_once __DIR__ . '/./templates/meta.php'; ?>
  <link rel="stylesheet" href="./css/home.min.css">
</head>

<body class="home">
  <?php require_once __DIR__ . '/./templates/navbar.php'; ?>
  <div class="container" role="main">

    <section class="contents">
      <header class="title-box">
        <h1 class="title-heading">That Game</h1>
        <p class="title-desc">Everyone knows it,<br>but no one knows it's name...</p>
      </header>
      <div class="btn-group">
        <a class="btn -lg" href="fight.php">Play</a>
        <a class="btn -lg" href="history.php">History</a>
      </div>
    </section>

    <?php require_once __DIR__ . '/templates/adsense.php'; ?>

  </div>

  <?php require_once __DIR__ . '/./templates/footer.php'; ?>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>

</body>

</html>
