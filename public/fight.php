<!doctype html>
<html class="no-js" lang="ja">

<head>
  <?php require_once __DIR__ . '/./templates/meta.php'; ?>
  <link rel="stylesheet" href="./css/fight.min.css">

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
          <img class="fist" :src="img.opp.left">
          <img class="fist" :src="img.opp.right">
        </div>


        <!-- <transition name="slide-fade" mode="out-in"> -->
        <div class="balloon" :class="balloonClass">
          <p class="message" :key="message">{{ message }}</p>
        </div>
        <!-- </transition> -->


        <div class="user">
          <img class="fist" :src="img.user.left">
          <img class="fist" :src="img.user.right">

          <!-- <p>
            <small>Call: {{ callNum }} / Remain: {{ userRemain}} / Raise: {{ userRaise}}</small>
          </p> -->
        </div>

        <template v-if="!isFinished">
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
                  <button type="button" class="btn call-btn" :class="{active: callNum === i}" :data-num="i" @click="setUserCall($event)" :key="'call-' + i">{{ i }}</button>
                </template>
              </div>
            </div>
          </template>

          <div class="raise">
            <p><small>Number of fingers to raise.</small></p>

            <div class="btn-box">
              <template v-for="(num, i) in raisables">
                <button type="button" class="btn finger-btn" :class="{active: userRaise === i}" :data-num="i" @click="setUserRaise($event)" :key="'finger-' + i">{{ i }}</button>
              </template>
            </div>
          </div>


          <div class="btn-box">
            <button type="button" class="btn fight-btn" id="js-fight-btn" @click="fight" :disabled="!isReady">Fight</button>
          </div>
        </template>
        <template v-else>
          <div class="btn-box">
            <a href="./fight.php" class="btn fight-btn">PlayAgain</a>
          </div>
        </template>

      </div>
    </div>
  </main>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script src="./js/fight/app.js"></script>

  </script>
  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>
</body>

</html>
