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

  <link rel="stylesheet" href="dist/css/home.min.css">
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
          <div>
            <button type="button" class="btn num-btn" data-num="0">0</button>
            <button type="button" class="btn num-btn" data-num="1">1</button>
            <button type="button" class="btn num-btn" data-num="2">2</button>
            <button type="button" class="btn num-btn" data-num="3">3</button>
            <button type="button" class="btn num-btn" data-num="4">4</button>
          </div>
          <button type="button" class="btn" id="js-fight-btn">Fight</button>
        </div>
      </div>
    </div>

  </main>


  <script src="dist/js/app.js"></script>
  <?php require_once __DIR__ . '/./templates/scripts.php'; ?>
  <script>
    let totalCount = 4;
    let myCount = 2;
    let oppCount = 2;
    let myChoice = null;
    let oppChoice = null;
    const numBtns = document.querySelectorAll('.num-btn')
    const fightBtn = document.getElementById('js-fight-btn')
    numBtns.forEach(numBtn => {
      numBtn.addEventListener('click', e => {
        const num = e.target.dataset.num;
        toggleActive(e)
        setMyChoice(num)

        console.log(myChoice);
      }, false)
    })

    const toggleActive = (e) => {
      for (const sibling of e.target.parentNode.children) {
        if (sibling !== e.target) sibling.classList.remove('active')
      }
      e.target.classList.add('active')
    }
    const setMyChoice = (num = null) => {
      myChoice = num;
    }

    const fight = () => {
      // oppChoice = Math.random()
    }

    const setOppChoice = (totalCount, myCount, oppCount) => {
      const max = myCount + oppCount;
    }
    const disableNumBtn = (totalCount) => {

    }

    console.log(Math.random() * (4 - ));
    class Game {
      constructor(myCount, oppCount) {
        this._myChoice = null;
        this._oppChoice = null;
        this._myCount = myCount;
        this._oppCount = oppCount;
        this._remainCount = myCount + oppCount;
        console.group('this._myCount');
        console.log(this._myCount);
        console.groupEnd();
        console.group('this._oppCount')
        console.log(this._oppCount)
        console.groupEnd();
        console.group('this._remainCount')
        console.log(this._remainCount)
        console.groupEnd();
      }

      getMyChoice() {
        return this._myChoice;
      }
      setMyChoice(num = null) {
        this._myChoice = num;
      }

      getOppChoice() {
        return this._oppChoice;
      }
      setOppChoice() {
        const min = 0;
        const max = 0
        this._oppChoice = Math.random()
      }

    }
    const game = new Game(myCount, oppCount)
  </script>
</body>

</html>
