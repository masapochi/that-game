<!doctype html>
<html class="no-js" lang="ja">

<head>
  <?php require_once __DIR__ . '/./templates/meta.php'; ?>
  <link rel="stylesheet" href="./css/fight.min.css">

</head>

<body class="fight">
  <?php require_once __DIR__ . '/./templates/navbar.php'; ?>
  <div class="container" role="main">

    <div class="contents" id="fight" v-if="!isLoading" v-cloak>
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
      <div class="play-field">
        <fist-images classes="opponent" :left="opp.img.left" :right="opp.img.right">
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
        <fist-images classes="user" :left="me.img.left" :right="me.img.right">
          <!-- <p>
              <small>Call: {{ callNum }} / Remain: {{ oppRemain}} / Raise: {{ oppRaise}}</small>
            </p> -->
        </fist-images>
      </div>
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
        <div class="user-control">
          <div class="row -labeled call">
            <template v-if="isMyTurn">
              <p class="label">コール</p>

              <div class="btn-group">
                <num-button v-for="(num, i) in callables" :classes="{active: callNum === i}" :num="i" @clicked="setCall" :disabled="isFighting || isDrawn" :key="i" />
              </div>
            </template>
          </div>

          <div class="row -labeled raise">
            <p class="label">あげる本数</p>

            <div class="btn-group">
              <num-button v-for="(num, i) in raisables" :classes="{active: me.raise === i}" :num="i" @clicked="setRaise" :disabled="isFighting || isDrawn" :key="i" />
            </div>
          </div>

          <div class="row fight">
            <button type="button" class="btn -lg" @click="fight" :disabled="!canFight || isFighting || isDrawn">Fight</button>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="user-control">
          <!-- <div class="row play-again"> -->
          <a class="btn -lg" href="./fight.php">Play Again</a>
          <!-- </div> -->
          <!-- <div class="row history"> -->
          <!-- <a class="btn -lg" href="./history.php">History</a> -->
          <!-- </div> -->
        </div>
      </template>
    </div>

    <div class="adsense">
      <a href="./" target="_blank" rel="noreferrer noopener">home</a>
    </div>

  </div>


  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script src="./js/fight/app.js"></script>

  <?php require_once __DIR__ . '/./templates/tag_manager.php'; ?>
</body>

</html>
