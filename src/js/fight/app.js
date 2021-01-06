import Vue from "vue";
Vue.config.productionTip = false;
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

new Vue({
  el: '#fight',
  data() {
    return {
      oppImgDir: './src/images/opp',
      userImgDir: './src/images/user',
      isUserTurn: true,
      isFinished: false,
      isDraw: false,
      callNum: null,
      userRaise: null,
      userRemain: 2,
      oppRemain: 2,
      message: 'Your Turn!',
    }
  },
  computed: {
    oppRaise() {
      return randomNum(0, this.oppRemain)
    },
    callables() {
      return this.userRemain + this.oppRemain + 1;
    },
    raisables() {
      return this.userRemain + 1;
    },
    isReady() {
      return this.callNum !== null && this.userRaise !== null ? true : false;
    }
  },
  methods: {
    setOppCallNum() {
      return randomNum(0, this.callables)
    },
    call(e) {
      this.callNum = parseInt(e.target.dataset.num);
    },
    raise(e) {
      this.userRaise = parseInt(e.target.dataset.num);
    },
    setCallNumMessage() {
      this.message = `${this.callNum}!!`;
    },
    setResultMessage() {
      if (this.isDraw) {
        this.message = `Draw!`
      } else {
        this.message = 'HIT!!!'
      }
    },

    start() {
      this.message = 'いっせーので…'
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.setCallNumMessage());
        }, 2000);
      })
    },
    changeTurns() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.isUserTurn = !this.isUserTurn;
          resolve();
        }, 2000);
      })
    },
    initialize() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.isUserTurn = !this.isUserTurn;
          this.callNum = this.isUserTurn ? null : this.setOppCallNum();
          this.isDraw = false;
          this.isFinished = false;
          this.message = this.isUserTurn ? 'Your Turn!' : 'Opponent\'s Turn!';
          this.userRaise = null;
          resolve();
        }, 3000);
      })
    },
    async fight() {
      await this.start();
      await this.judge();
      // await this.changeTurns();
      await this.initialize();
    },
    judge() {
      return new Promise(resolve => {
        setTimeout(() => {
          if (this.callNum === this.userRaise + this.oppRaise) {
            if (this.isUserTurn) {
              this.oppRemain -= 1;
            } else {
              this.userRemain -= 1;
            }
          } else {
            this.isDraw = true;
          }

          resolve(this.setResultMessage());
        }, 2000);
      })

    }
  },


})
      // console.group('judge')
      // console.group('this.callNum')
      // console.log(this.callNum)
      // console.groupEnd();
      // console.group('this.userRaise ')
      // console.log(this.userRaise)
      // console.groupEnd();
      // console.group('this.oppRaise')
      // console.log(this.oppRaise)
      // console.groupEnd();
      // console.group('this.userRaise + this.oppRaise')
      // console.log(this.userRaise + this.oppRaise)
      // console.groupEnd();
      // console.groupEnd();
