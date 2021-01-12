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
      <div id="fight" class="grid" v-if="!isLoading" v-cloak>
        <!--  -->
        <!-- <template v-if="isFinished">

          <template v-if="oppRemain === 0">
            <div class="img-box">
              <img class="face" src="./images/faces/win.svg" alt="">
            </div>
          </template>
          <template v-else-if="userRemain === 0">
            <div class="img-box">
              <img class="face" src="./images/faces/lose.svg" alt="">
            </div>
          </template>
        </template>

        <template v-else>
          <template v-if="isDecided">
            <template v-if="!isMyTurn">
              <div class="img-box">
                <img class="face" src="./images/faces/happy.svg" alt="">
              </div>
            </template>
            <template v-else="isMyTurn &&">
              <div class="img-box">
                <img class="face" src="./images/faces/sad.svg" alt="">
              </div>
            </template>
          </template>
          <template v-else> -->
        <fist-images class="img-box" classes="opponent" :left="opp.img.left" :right="opp.img.right">
          <!-- <p>
                <small>Call: {{ callNum }} / Remain: {{ oppRemain}} / Raise: {{ oppRaise}}</small>
              </p> -->
        </fist-images>
        <!-- </template>
        </template> -->




        <!-- <transition name="slide-fade" mode="out-in"> -->
        <balloon-message :classes="balloonClass" :message="message">
          <span class="round" v-if="!isFighting && !isFinished">ラウンド{{ round }}</span>
        </balloon-message>
        <!-- </transition> -->

        <!-- <template v-if="!isFinished"> -->
        <fist-images class="img-box" classes="user" :left="me.img.left" :right="me.img.right">
          <!-- <p>
            <small>Call: {{ callNum }} / Remain: {{ oppRemain}} / Raise: {{ oppRaise}}</small>
          </p> -->
        </fist-images>
        <!-- </template>
        <template v-else-if="oppRemain === 0">
          <div class="img-box">
            <img class="face" src="./images/faces/lose.svg" alt="">
          </div>
        </template>
        <template v-else-if="userRemain === 0">
          <div class="img-box">
            <img class="face" src="./images/faces/win.svg" alt="">
          </div>
        </template>
        <template v-else-if="!isMyTurn && isDecided">
          <div class="img-box">
            <img class="face" src="./images/faces/sad.svg" alt="">
          </div>
        </template>
        <template v-else-if="isMyTurn && isDecided">
          <div class="img-box">
            <img class="face" src="./images/faces/happy.svg" alt="">
          </div>
        </template> -->


        <template v-if="!isFinished">
          <div class="call">
            <template v-if="isMyTurn">
              <p class="label">コール</p>

              <div class="btn-box">
                <num-button v-for="(num, i) in callables" :classes="{active: callNum === i}" :num="i" @clicked="setCall" :disabled="isFighting || isDrawn" :key="i" />
              </div>
            </template>
          </div>

          <div class="raise">
            <p class="label">あげる本数</p>

            <div class="btn-box">
              <num-button v-for="(num, i) in raisables" :classes="{active: me.raise === i}" :num="i" @clicked="setRaise" :disabled="isFighting || isDrawn" :key="i" />
            </div>
          </div>

          <div class="control fight">
            <button type="button" class="btn" @click="fight" :disabled="!canFight || isFighting || isDrawn">Fight</button>
          </div>
        </template>
        <template v-else>
          <div class="control play-again">
            <a href="./fight.php" class="btn">Play Again</a>
          </div>
          <div class="control history">
            <a href="./history.php" class="btn ">History</a>
          </div>
        </template>
      </div>
      <div class="adsense" style="width:100%; height: 50px; background-color: #aaa;">
        <a href="./" target="_blank" rel="noreferrer noopener">home</a>
      </div>
    </div>
  </main>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script src="./js/fight/app.js"></script>

  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>
</body>

</html>
