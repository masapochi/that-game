import { sprintf } from "sprintf-js";
import { randomNum, isNull, promiseTimeout } from "../utils";
import { PLAYER, IMAGE_FORMAT, MESSAGE, STATUS } from './consts';
import Vue from "vue";
import FistImages from "./components/FistImages.vue";
import BalloonMessage from "./components/BalloonMessage.vue";
import NumButton from "./components/NumButton.vue";

Vue.config.productionTip = false;

new Vue({
  components: {
    FistImages,
    BalloonMessage,
    NumButton,
  },
  data() {
    return {
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
      status: STATUS.DEFAULT,
    }
  },
  computed: {
    totalRaised() { return this.userRaise + this.oppRaise },
    totalRemain() { return this.userRemain + this.oppRemain },
    callables() { return this.totalRemain + 1 },
    raisables() { return this.userRemain + 1 },
    isReady() {
      const isSelected = this.isUserTurn
        ? !isNull(this.callNum) && !isNull(this.userRaise)
        : !isNull(this.userRaise)
      return isSelected ? true : false
    },
    isNeutralStatus() { return [STATUS.DEFAULT, STATUS.DRAWN, STATUS.FINISHED].includes(this.status) },
    isFightingStatus() { return [STATUS.STARTED, STATUS.CALLED, STATUS.DECIDED].includes(this.status) },
    isFighting() { return [STATUS.STARTED, STATUS.CALLED, STATUS.DECIDED, STATUS.DRAWN, , STATUS.FINISHED].includes(this.status) },
    isDecided() { return this.callNum === this.totalRaised ? true : false },
    isFinished() { return this.userRemain === 0 || this.oppRemain === 0 ? true : false },
    balloonClass() {
      return {
        'is-default': this.isNeutralStatus,
        'is-user': this.isFightingStatus && this.isUserTurn,
        'is-opp': this.isFightingStatus && !this.isUserTurn,
        'is-called': STATUS.CALLED === this.status,
        'is-decided': STATUS.DECIDED === this.status,
        'is-drawn': STATUS.DRAWN === this.status,
        'is-finished': STATUS.FINISHED === this.status,
      }
    },
  },
  mounted() {
    this.setImage();
  },
  methods: {
    setUserCall(value) { this.callNum = value },
    setUserRaise(value) { this.userRaise = value },
    setOppCall() { this.callNum = randomNum(0, this.totalRaised) },
    setOppRaise() { this.oppRaise = randomNum(0, this.oppRemain) },
    reduceRemain(num) {
      const target = this.isUserTurn ? PLAYER.USER : PLAYER.OPP; this[`${target}Remain`] -= num;
    },

    call() {
      return promiseTimeout(() => {
        if (!this.isUserTurn) this.setOppCall();

        this.setOppRaise();
        this.status = STATUS.CALLED;
        this.message = sprintf(MESSAGE.CALLED, this.callNum);
      });
    },

    judge() {
      this.setImage();
      return promiseTimeout(() => {
        const num = this.isDecided ? 1 : 0;
        this.reduceRemain(num)
        this.status = this.isDecided ? STATUS.DECIDED : STATUS.DRAWN;
        this.message = this.isDecided ? MESSAGE.DECIDED : MESSAGE.DRAWN;
        this.setImage();
      }, 3000)
    },

    changeTurns() {
      return promiseTimeout(() => {
        this.isUserTurn = !this.isUserTurn;
        this.message = this.isUserTurn ? MESSAGE.USER_TURN : MESSAGE.OPP_TURN;
      })
    },


    initialize() {
      this.status = STATUS.DEFAULT;
      this.callNum = null;
      this.userRaise = null;
      this.oppRaise = null;
      this.setImage();
    },

    async fight() {
      this.status = STATUS.STARTED;
      this.message = MESSAGE.STARTED;
      await this.call();
      await this.judge();
      if (!this.isFinished) {
        await this.changeTurns();
        await this.initialize();

      } else {
        this.status = STATUS.FINISHED;
        this.message = this.userRemain === 0
          ? MESSAGE.USER_WON : MESSAGE.OPP_WON;
      }
    },

    setImage() {
      for (const [_, player] of Object.entries({ ...PLAYER })) {
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

        this.img[player] = {
          left: sprintf(IMAGE_FORMAT.LEFT, player, left),
          right: sprintf(IMAGE_FORMAT.RIGHT, player, right),
        };
      }

    },
  },
}).$mount('#fight');
