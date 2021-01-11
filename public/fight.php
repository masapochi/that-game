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
        <fist-images class="opponent" :left="img.opp.left" :right="img.opp.right">
          <p>
            <small>Call: {{ callNum }} / Remain: {{ oppRemain}} / Raise: {{ oppRaise}}</small>
          </p>
        </fist-images>


        <!-- <transition name="slide-fade" mode="out-in"> -->
        <balloon-message :classes="balloonClass" :message="message"></balloon-message>
        <!-- </transition> -->


        <fist-images class="user" :left="img.user.left" :right="img.user.right">
          <p>
            <small>Call: {{ callNum }} / Remain: {{ oppRemain}} / Raise: {{ oppRaise}}</small>
          </p>
        </fist-images>

        <template v-if="!isFinished">
          <template v-if="isUserTurn">
            <div class="call">
              <p>
                <small>
                  Call <span v-if="callNum !== null">{{ callNum }}</span>
                </small>
              </p>

              <div class="btn-box">
                <!-- <template v-for="(num, i) in callables"> -->
                <num-button v-for="(num, i) in callables" :classes="{active: callNum === i}" :num="i" @clicked="setUserCall" :key="i" />
                <!-- </template> -->
              </div>
            </div>
          </template>

          <div class="raise">
            <p><small>Raise</small></p>

            <div class="btn-box">
              <!-- <template> -->
              <num-button v-for="(num, i) in raisables" :classes="{active: userRaise === i}" :num="i" @clicked="setUserRaise" :key="i" />
              <!-- </template> -->
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

        <div style="width:320px; height: 50px; background-color: #aaa;"></div>
      </div>
    </div>
  </main>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script src="./js/fight/app.js"></script>

  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>
</body>

</html>
