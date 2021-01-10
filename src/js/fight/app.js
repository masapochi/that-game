import { sprintf } from "sprintf-js";
import { randomNum, isNull, promiseTimeout } from "../utils";
import { PLAYER, IMAGE_FORMAT, OPP_IMAGE_FORMAT, MESSAGE, STATUS } from './consts';
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
      message: MESSAGE.USER_TURN,
    }
  },
  computed: {
    totalRaisedThumbs() { return this.userRaise + this.oppRaise },
    callables() { return this.userRemain + this.oppRemain + 1 },
    raisables() { return this.userRemain + 1 },
    isReady() { return !isNull(this.callNum) && !isNull(this.userRaise) ? true : false },
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
    setOppCall() { this.callNum = randomNum(0, this.userRemain + this.oppRemain) },
    setOppRaise() { this.oppRaise = randomNum(0, this.oppRemain) },
    reduceRemain() {
      if (this.isUserTurn) {
        this.userRemain -= 1;
      } else {
        this.oppRemain -= 1;
      }
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
      this.message = MESSAGE.START;
      const f = () => {
        if (!this.isUserTurn) {
          this.setOppCall();
        };
        this.setOppRaise();

        this.setThumbImg(PLAYER.USER);
        this.setThumbImg(PLAYER.OPP);

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
        if (this.callNum === this.totalRaisedThumbs) {
          this.reduceRemain();
          this.message = `いぇーいっ!`;
        } else {
          // this.isNeutral = true;
          this.message = `引き分け!`;
        }
      }
      return promiseTimeout(f, 3000)
    },
    initialize() {
      // const f = () => {
      // this.isNeutral = true;
      this.callNum = null;
      this.userRaise = null;
      this.oppRaise = null;
      this.setThumbImg(PLAYER.USER);
      this.setThumbImg(PLAYER.OPP);
      const f = () => { this.isNeutral = true; }
      promiseTimeout(f, 2000)
      // }
      // return promiseTimeout(f)
    },

    async fight() {
      this.isNeutral = false;
      await this.call();
      await this.judge();
      await this.changeTurns();
      await this.initialize();


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
