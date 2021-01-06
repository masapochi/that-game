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
      <div id="fight" class="content" v-cloak>
        <div>
          <div class="opponent-box">
            <p>
              <small>Call: {{ callNum}} / Remain: {{ oppRemainFingers}} / Raise: {{ oppRaiseNum}}</small>
            </p>
            <img src="./src/images/opp/down_right.svg" alt="Opponent's right fist" style="width: 64px; height: auto;" v-if="oppRemainFingers === 2">

            <img src="./src/images/opp/down_lost_right.svg" alt="Opponent's right fist" style="width: 64px; height: auto;" v-else>

            <img src="./src/images/opp/down_left.svg" alt="Opponent's left fist" style="width: 64px; height: auto;" v-if="oppRemainFingers === 2 || oppRemainFingers === 1">

            <img src="./src/images/opp/down_lost_left.svg" alt="Opponent's left fist" style="width: 64px; height: auto;" v-else>
          </div>

          <!-- <template v-if="!isReady">
            <p>Choose a number from below...</p>
          </template>
          <template v-else>
            <p>Here we go!</p>
          </template> -->

          <p class="message">{{message }}</p>


          <div class="myself-box">
            <img src="./src/images/user/down_left.svg" alt="User's left fist" style="width: 64px; height: auto;" v-if="userRemainFingers === 2">

            <img src="./src/images/user/down_lost_left.svg" alt="User's left fist" style="width: 64px; height: auto;" v-else>

            <img src="./src/images/user/down_right.svg" alt="User's right fist" style="width: 64px; height: auto;" v-if="userRemainFingers === 2 || userRemainFingers === 1">

            <img src="./src/images/user/down_lost_right.svg" alt="User's right fist" style="width: 64px; height: auto;" v-else>
            <p>
              <small>Call: {{ callNum}} / Remain: {{ userRemainFingers}} / Raise: {{ userRaiseNum}}</small>
            </p>
          </div>
        </div>

        <div class="control">
          <template v-if="isUserTurn">
            <p>
              <small>
                Number of fingers to call.
                <span v-if="callNum !== null">{{ callNum }}</span>
              </small>
            </p>

            <div class="btn-box">
              <template v-for="i in callableNums">
                <button type="button" class="btn call-btn" :class="{active: callNum === i}" :data-num="i" @click="call($event)">{{ i }}</button>
              </template>
            </div>
            <p><small>Number of fingers to raise.</small></p>

            <div class="btn-box">
              <template v-for="i in userRaisableNums">
                <button type="button" class="btn finger-btn" :class="{active: userRaiseNum === i}" :data-num="i" @click="raiseFinger($event)">{{ i }}</button>
              </template>
            </div>
          </template>
          <button type="button" class="btn fight-btn" id="js-fight-btn" @click="judge" :disabled="!isReady && isUserTurn">Fight</button>
        </div>
      </div>
    </div>
  </main>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script src="dist/js/fight/index.js"></script>
  <script src="dist/js/fight/app.js"></script>

  </script>
</body>

</html>
