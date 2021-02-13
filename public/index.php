<!doctype html>
<html class="no-js" lang="ja">

<head>
  <?php require_once __DIR__ . '/./templates/meta.php'; ?>
  <link rel="canonical" href="https://masapochi.me/that-game/">
  <link rel="stylesheet" href="./css/home.min.css">
</head>

<body class="home">
  <?php require_once __DIR__ . '/./templates/tag_manager_noscript.php'; ?>
  <?php require_once __DIR__ . '/./templates/navbar.php'; ?>
  <div class="container" role="main">

    <section class="contents">
      <header class="title-box">
        <h1 class="title-heading">あの親指ゲーム</h1>
        <p class="title-desc">みんな知っているけれど、<br>名前はだれも知らない親指ゲームです。</p>
      </header>
      <div class="btn-group">
        <a class="btn -lg" href="fight.php">Play</a>
        <!-- <a class="btn -lg" href="history.php">History</a> -->
      </div>
    </section>

    <?php require_once __DIR__ . '/templates/adsense.php'; ?>

  </div>

  <?php require_once __DIR__ . '/./templates/footer.php'; ?>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>

</body>

</html>
