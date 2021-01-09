import { sprintf } from "sprintf-js";
import { randomNum, isNull } from "../utils";
import { USER_IMAGE_FORMAT, OPP_IMAGE_FORMAT } from './consts';
import Vue from "vue";

Vue.config.productionTip = false;

const waitPromise = (func, ms = 2000) => new Promise(resolve => setTimeout(() => {
  resolve(func())
}, ms))


new Vue({
  el: '#fight',
  data() {
    return {
      img: {
        user: USER_IMAGE_FORMAT,
        opp: OPP_IMAGE_FORMAT
      },
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
    userImg() {
      let left = 'down';
      let right = 'down';
      if (this.userRemain === 2) {
        if (this.userRaise >= 1) left = 'up';
        if (this.userRaise === 2) right = 'up';
      } else if (this.userRemain === 1) {
        left = 'down_lost';
        if (this.userRaise === 1) right = 'up';
      }
      return {
        left: sprintf(this.img.user.left, left),
        right: sprintf(this.img.user.right, right),
      }
    },
    oppImg() {
      let left = 'down';
      let right = 'down';
      if (this.oppRemain === 2) {
        if (this.oppRaise >= 1) right = 'up';
        if (this.oppRaise === 2) left = 'up';
      } else if (this.oppRemain === 1) {
        right = 'down_lost';
        if (this.oppRaise === 1) left = 'up';
      }
      return {
        left: sprintf(this.img.opp.left, left),
        right: sprintf(this.img.opp.right, right),
      }
    },
    totalRaisedThumbs() { return this.userRaise + this.oppRaise },
    oppRaise() { return randomNum(0, this.oppRemain) },
    callables() { return this.userRemain + this.oppRemain + 1 },
    raisables() { return this.userRemain + 1 },
    isReady() { return !isNull(this.callNum) && !isNull(this.userRaise) ? true : false }
  },
  methods: {
    call({ target }) { this.callNum = parseInt(target.dataset.num) },
    raise({ target }) { this.userRaise = parseInt(target.dataset.num) },
    setOppCallNum() { return randomNum(0, this.callables) },
    reduceRemain() {
      if (this.isUserTurn) this.userRemain -= 1;
      if (!this.isUserTurn) this.oppRemain -= 1;
    },
    start() {
      const f = () => { this.message = `${this.callNum}!!`; }
      return waitPromise(f, 2000);
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
      this.message = 'いっせーので…'

      await this.start();
      await this.judge();
      await this.initialize();
    },

    judge() {
      return new Promise(resolve => {
        setTimeout(() => {
          if (this.callNum === this.totalRaisedThumbs) {
            this.reduceRemain();
          } else {
            this.isDraw = true;
          }
          this.message = this.isDraw ? `Draw!` : 'HIT!!!'
          resolve();
        }, 2000);
      })

    }
  },
});
