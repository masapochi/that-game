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
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="dist/css/fight.min.css">
  <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.8.2/css/all.css">

  <meta name="theme-color" content="#fafafa">
</head>

<body class="fight">
  <?php require_once __DIR__ . '/./templates/navbar.php'; ?>
  <main>
    <div class="container">

      <div class="content">
        <div class="opponent-box">
          <img src="./src/images/opponent_default.svg" alt="Opponent">
        </div>
        <p>Choose a number from below...</p>
        <div class="myself-box">
          <img src="./src/images/myself_default.svg" alt="Myself">
        </div>

        <div class="control">
          <p>Number of fingers to call.</p>
          <div class="btn-box">
            <button type="button" class="btn call-btn" data-num="0">0</button>
            <button type="button" class="btn call-btn" data-num="1">1</button>
            <button type="button" class="btn call-btn" data-num="2">2</button>
            <button type="button" class="btn call-btn" data-num="3">3</button>
            <button type="button" class="btn call-btn" data-num="4">4</button>
          </div>
          <p>Number of fingers to raise.</p>
          <div class="btn-box">
            <button type="button" class="btn finger-btn" data-num="0">0</button>
            <button type="button" class="btn finger-btn" data-num="1">1</button>
            <button type="button" class="btn finger-btn" data-num="2">2</button>
          </div>
          <button type="button" class="btn" id="js-fight-btn">Fight</button>
        </div>
      </div>
    </div>

  </main>


  <script src="dist/js/app.js"></script>
  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script src="dist/js/fight/index.js">

  </script>
</body>

</html>
