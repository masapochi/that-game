<!doctype html>
<html class="no-js" lang="ja">

<head>
  <?php require_once __DIR__ . '/./templates/meta.php'; ?>
  <link rel="stylesheet" href="dist/css/fight.min.css">

</head>

<body class="fight">
  <?php require_once __DIR__ . '/./templates/navbar.php'; ?>
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


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script src="dist/js/fight/app.js"></script>

  </script>
  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>
</body>

</html>
