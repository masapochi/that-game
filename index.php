<!doctype html>
<html class="no-js" lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>That Game</title>
  <meta name="description" content="This is &quot;That Game&quot; every one knows.">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="icon" href="dist/images/common/favicon.ico">
  <link rel="apple-touch-icon" href="dist/images/common/icon.png">

  <link rel="stylesheet" href="dist/css/home.min.css">
  <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.8.2/css/all.css">

  <meta name="theme-color" content="#adff2f">
</head>

<body class="home">
  <?php require_once __DIR__ . '/./partials/navbar.php'; ?>
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
    </div>

  </main>
  <?php require_once __DIR__ . '/./partials/footer.php'; ?>


  <?php require_once __DIR__ . '/./partials/scripts.php'; ?>
  <?php require_once __DIR__ . '/./partials/tag_manager.php'; ?>

</body>

</html>
