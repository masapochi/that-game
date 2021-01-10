import { sprintf } from "sprintf-js";
import { randomNum, isNull, promiseTimeout } from "../utils";
import { PLAYER, IMAGE_FORMAT, MESSAGE, STATUS } from './consts';

import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  el: '#fight',
  data() {
    return {
      isNeutral: true,
      isUserTurn: true,
      img: {
        user: { left: null, right: null },
        opp: { left: null, right: null }
      },
      callNum: null,
      userRemain: 2,
      userRaise: null,
      oppRemain: 2,
      oppRaise: null,
      player: PLAYER.USER,
      message: MESSAGE.USER_TURN,
      status: STATUS.NEUTRAL,

    }
  },
  computed: {
    totalRaisedThumbs() { return this.userRaise + this.oppRaise },
    totalRemainThumbs() { return this.userRemain + this.oppRemain },
    callables() { return this.totalRemainThumbs + 1 },
    raisables() { return this.userRemain + 1 },
    isReady() {
      const isSelected = this.isUserTurn
        ? !isNull(this.callNum) && !isNull(this.userRaise)
        : !isNull(this.userRaise)
      return isSelected ? true : false
    },
    isSettled() { return this.callNum === this.totalRaisedThumbs ? true : false },
    isFinished() { return this.userRemain === 0 || this.oppRemain === 0 ? true : false },
    balloonClass() {
      return {
        'is-neutral': this.isNeutral,
        'is-user': !this.isNeutral && this.isUserTurn,
        'is-opp': !this.isNeutral && !this.isUserTurn
      }
    },
  },
  mounted() {
    this.setThumbImg(PLAYER.USER);
    this.setThumbImg(PLAYER.OPP);
  },
  methods: {
    setUserCall({ target }) { this.callNum = parseInt(target.dataset.num) },
    setUserRaise({ target }) { this.userRaise = parseInt(target.dataset.num) },
    setOppCall() { this.callNum = randomNum(0, this.totalRaisedThumbs) },
    setOppRaise() { this.oppRaise = randomNum(0, this.oppRemain) },
    reduceRemain(num) {
      const target = this.isUserTurn ? PLAYER.USER : PLAYER.OPP;
      this[`${target}Remain`] -= num;
    },
    setStatus(status) {
      this.status = status;
    },
    setThumbImg(player) {
      const remain = this[`${player}Remain`];
      const raise = this[`${player}Raise`];
      let left = 'down';
      let right = 'down';

      if (remain === 0) {
        left = 'down_lost'
        right = 'down_lost'
      }
      if (remain === 1) {
        left = 'down_lost';
        if (raise === 1) right = 'up';
      }
      if (remain === 2) {
        if (raise >= 1) left = 'up';
        if (raise === 2) right = 'up';
      }

      const hands = {
        left: sprintf(IMAGE_FORMAT.LEFT, player, left),
        right: sprintf(IMAGE_FORMAT.RIGHT, player, right),
      }
      console.log(hands);
      this.img[player] = hands;
    },

    call() {
      this.setStatus(STATUS.START)
      this.message = MESSAGE.START;
      const f = () => {
        if (!this.isUserTurn) {
          this.setOppCall();
        };
        this.setOppRaise();

        this.setThumbImg(PLAYER.USER);
        this.setThumbImg(PLAYER.OPP);

        this.setStatus(STATUS.CALL)
        this.message = sprintf(MESSAGE.CALL, this.callNum);
      }
      return promiseTimeout(f);
    },

    changeTurns() {
      const f = () => {
        this.isUserTurn = !this.isUserTurn;
        this.message = this.isUserTurn ? MESSAGE.USER_TURN : MESSAGE.OPP_TURN;
      };
      return promiseTimeout(f)
    },

    judge() {
      const f = () => {
        this.setStatus(STATUS.JUDGE)
        const num = this.isSettled ? 1 : 0;
        this.reduceRemain(num)
        const status = this.isSettled ? STATUS.SETTLE : STATUS.TIE;
        this.setStatus(status);
        this.message = this.isSettled ? MESSAGE.SETTLE : MESSAGE.TIE;
      }
      return promiseTimeout(f, 3000)
    },
    initialize() {
      // const f = () => {
      // this.isNeutral = true;
      this.setStatus(STATUS.NEUTRAL);
      this.callNum = null;
      this.userRaise = null;
      this.oppRaise = null;
      this.setThumbImg(PLAYER.USER);
      this.setThumbImg(PLAYER.OPP);
      // const f = () => { this.isNeutral = true; }
      // promiseTimeout(f, 2000)
      // }
      // return promiseTimeout(f)
    },

    async fight() {
      await this.call();
      await this.judge();
      if (!this.isFinished) {
        await this.changeTurns();
        await this.initialize();
      } else {
        this.setStatus(STATUS.FINISH);
        const player = this.userRemain > 0 ? 'あなた' : '相手';
        this.message = sprintf(MESSAGE.FINISH, player)
      }


    },


  },
});


// setUserImg() {
//   let left = 'down';
//   let right = 'down';
//   if (this.userRemain === 2) {
//     if (this.userRaise >= 1) left = 'up';
//     if (this.userRaise === 2) right = 'up';
//   } else if (this.userRemain === 1) {
//     left = 'down_lost';
//     if (this.userRaise === 1) right = 'up';
//   } else {
//     left = 'down_lost'
//     right = 'down_lost'
//   }
//   const hands = {
//     left: sprintf(USER_IMAGE_FORMAT.left, left),
//     right: sprintf(USER_IMAGE_FORMAT.right, right),
//   }
//   console.log(hands);
//   this.img.user = hands;
// },
// setOppImg() {
//   let left = 'down';
//   let right = 'down';
//   if (this.oppRemain === 2) {
//     if (this.oppRaise >= 1) right = 'up';
//     if (this.oppRaise === 2) left = 'up';
//   } else if (this.oppRemain === 1) {
//     right = 'down_lost';
//     if (this.oppRaise === 1) left = 'up';
//   } else {
//     left = 'down_lost'
//     right = 'down_lost'
//   }
//   const hands = {
//     left: sprintf(OPP_IMAGE_FORMAT.left, left),
//     right: sprintf(OPP_IMAGE_FORMAT.right, right),
//   }
//   console.log(hands);
//   this.img.opp = hands;
// },
