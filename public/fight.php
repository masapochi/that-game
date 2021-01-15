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
      <!-- <p>User: {{ me.raise }} / Opp: {{ opp.raise }} / Call: {{ callNum }}</p> -->
      <div class="play-field">
        <div class="opponent">
          <template v-if="isJudged">
            <happy-sad-images :is-hit="isJudged && !isMyTurn"></happy-sad-images>
          </template>

          <win-lose-images :is-winner="!isWinner" v-else-if="isFinished"></win-lose-images>

          <fist-images :left="opp.img.left" :right="opp.img.right" v-else>
          </fist-images>
        </div>

        <balloon-message :classes="balloonClass" :message="message">
          <span class="round" v-if="!isFighting && !isFinished">ラウンド{{ round }}</span>
        </balloon-message>

        <div class="user">
          <template v-if="isJudged">
            <happy-sad-images :is-hit="isJudged && isMyTurn"></happy-sad-images>
          </template>
          <win-lose-images :is-winner="isWinner" v-else-if="isFinished"></win-lose-images>
          <fist-images :left="me.img.left" :right="me.img.right" v-else></fist-images>
        </div>

      </div>

      <template v-if="!isFinished">
        <div class="user-control">
          <div class="row -labeled call">
            <template v-if="isMyTurn">
              <p class="label">コール</p>

              <div class="btn-group">
                <num-button v-for="(num, i) in callables" :classes="{active: callNum === i}" :num="i" @clicked="setCall" :disabled="isProcessing" :key="i" />
              </div>
            </template>
          </div>

          <div class="row -labeled raise">
            <p class="label">あげる本数</p>

            <div class="btn-group">
              <num-button v-for="(num, i) in raisables" :classes="{active: me.raise === i}" :num="i" @clicked="setRaise" :disabled="isProcessing" :key="i" />
            </div>
          </div>

          <div class="row fight">
            <button type="button" class="btn -lg" @click="fight" :disabled="isProcessing || !isReady">Fight</button>
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
