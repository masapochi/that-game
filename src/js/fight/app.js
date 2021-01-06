import Vue from "vue";
Vue.config.productionTip = false;

new Vue({
  el: '#fight',
  data() {
    return {
      isUserTurn: true,
      isStarting: false,
      isFinished: false,
      isDraw: false,
      isWon: false,
      callNum: null,
      userRaiseNum: null,
      userRemainFingers: 2,
      // oppRaiseNum: null,
      oppRemainFingers: 2,
      message: 'Choose a number from below...',
    }
  },
  mounted() {
    this.$data['init'] = Object.assign({}, this.$data);
  },
  computed: {

    oppRaiseNum() {
      const min = 0;
      const max = this.oppRemainFingers;
      return Math.floor(Math.random() * (max - min + 1)) + min
      // this.oppRaiseNum = Math.floor(Math.random() * (max - min + 1)) + min
    },
    callableNums() {
      const remainFingers = this.userRemainFingers + this.oppRemainFingers
      return Array.from({ length: remainFingers + 1 }, (v, i) => i)
    },
    userRaisableNums() {
      return Array.from({ length: this.userRemainFingers + 1 }, (v, i) => i)
    },
    isReady() {
      return this.callNum !== null && this.userRaiseNum !== null ? true : false;
    }
  },
  methods: {
    call(e) {
      const num = parseInt(e.target.dataset.num);
      this.callNum = num;
      console.log(this.callNum);
    },
    raiseFinger(e) {
      const num = parseInt(e.target.dataset.num);
      this.userRaiseNum = num;
      console.log(this.userRaiseNum);
    },
    setOppRaiseNum() {
      const min = 0;
      const max = this.oppRemainFingers;
      this.oppRaiseNum = Math.floor(Math.random() * (max - min + 1)) + min
    },

    start() {
      this.isStarting = true;
      this.message = 'いっせーので…'
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.message = `${this.callNum}!!`;
          resolve();
        }, 3000);
      })
    },
    finish() {
      this.isStarting = false;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.isDraw) {
            this.message = `Draw!`
          } else {
            this.message = this.isWon ? `You win!` : 'You lose!'
          }
          resolve();
        }, 3000);
      })
    },
    initialize() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.callNum = null;
          this.isDraw = false;
          this.isFinished = false;
          this.isStarting = false;
          this.isWon = false;
          this.message = "Choose a number from below...";
          // this.oppRaiseNum = null;
          this.userRaiseNum = null;
          resolve();
        }, 3000);
      })
    },
    changeTurns() {
      console.log(this.isUserTurn);
      this.isUserTurn = !this.isUserTurn;
      console.log(this.isUserTurn);
    },
    async judge() {
      // this.setOppRaiseNum();
      await this.start();
      console.group('judge')
      console.group('this.callNum')
      console.log(this.callNum)
      console.groupEnd();
      console.group('this.userRaiseNum ')
      console.log(this.userRaiseNum)
      console.groupEnd();
      console.group('this.oppRaiseNum')
      console.log(this.oppRaiseNum)
      console.groupEnd();
      console.group('this.userRaiseNum + this.oppRaiseNum')
      console.log(this.userRaiseNum + this.oppRaiseNum)
      console.groupEnd();
      console.groupEnd();

      if (this.callNum === this.userRaiseNum + this.oppRaiseNum) {
        if (this.isUserTurn) {
          this.oppRemainFingers -= 1;
          this.isWon = true;

        } else {
          this.userRemainFingers -= 1;
          this.isWon = false;
        }
      } else {
        this.isWon = false;
        this.isDraw = true;
      }
      await this.finish();
      await this.initialize();
      this.changeTurns();
    }
  }
})
