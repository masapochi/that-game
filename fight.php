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
  <link rel="apple-touch-icon" href="dist/images/favicons/icon.png">

  <link rel="stylesheet" href="dist/css/fight.min.css">
  <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.8.2/css/all.css">

  <meta name="theme-color" content="#fafafa">
</head>

<body class="fight">
  <?php require_once __DIR__ . '/./partials/navbar.php'; ?>
  <main>
    <div class="container">
      <div id="fight" class="grid" v-cloak>
        <div class="opponent">
          <!-- <p>
            <small>Call: {{ callNum }} / Remain: {{ oppRemain}} / Raise: {{ oppRaise}}</small>
          </p> -->
          <img class="fist" :src="oppImg.right" v-if="oppRemain === 2">
          <img class="fist" :src="oppImg.right" v-else-if="oppRemain === 2">

          <img class="fist" :src="oppImg.right" v-else>

          <img class="fist" :src="oppImg.left" v-if="oppRemain === 2 || oppRemain === 1">

          <img class="fist" :src="oppImg.left" v-else>
        </div>

        <transition name="slide-fade" mode="out-in">
          <p class="message" :key="message">{{ message }}</p>
        </transition>

        <div class="user">
          <img class="fist" :src="userImg.left" v-if="userRemain === 2">

          <img class="fist" :src="userImg.left" v-else>

          <img class="fist" :src="userImg.right" v-if="userRemain === 2 || userRemain === 1">

          <img class="fist" :src="userImg.right" v-else>
          <!-- <p>
            <small>Call: {{ callNum }} / Remain: {{ userRemain}} / Raise: {{ userRaise}}</small>
          </p> -->
        </div>

        <template v-if="isUserTurn">
          <div class="call">
            <p>
              <small>
                Number of fingers to call.
                <span v-if="callNum !== null">{{ callNum }}</span>
              </small>
            </p>

            <div class="btn-box">
              <template v-for="(num, i) in callables">
                <button type="button" class="btn call-btn" :class="{active: callNum === i}" :data-num="i" @click="call($event)" :key="'call-' + i">{{ i }}</button>
              </template>
            </div>
          </div>
        </template>

        <div class="raise">
          <p><small>Number of fingers to raise.</small></p>

          <div class="btn-box">
            <template v-for="(num, i) in raisables">
              <button type="button" class="btn finger-btn" :class="{active: userRaise === i}" :data-num="i" @click="raise($event)" :key="'finger-' + i">{{ i }}</button>
            </template>
          </div>
        </div>

        <div class="btn-box">
          <button type="button" class="btn fight-btn" id="js-fight-btn" @click="fight" :disabled="!isReady && isUserTurn">Fight</button>
        </div>
      </div>
    </div>
  </main>


  <?php require_once __DIR__ . '/./partials/scripts.php'; ?>
  <script src="dist/js/fight/index.js"></script>
  <script src="dist/js/fight/app.js"></script>

  </script>
  <?php require_once __DIR__ . '/./partials/tag_manager.php'; ?>
</body>

</html>
