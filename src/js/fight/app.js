import Vue from "vue";
import { sprintf } from "sprintf-js";
import { randomNum, isNull, promiseTimeout } from "../utils";
import { player, PLAYERS, IMAGE_FORMAT, MESSAGE, STATUS } from './consts';
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
      me: player.me,
      opp: player.opp,
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
    raisedTotal() { return this.me.raise + this.opp.raise },
    remainTotal() { return this.me.remain + this.opp.remain },
    callables() { return this.remainTotal + 1 },
    raisables() { return this.me.remain + 1 },
    isReady() {
      const isSelected = this.me.isTurn
        ? !isNull(this.callNum) && !isNull(this.me.raise)
        : !isNull(this.me.raise)
      return isSelected ? true : false
    },
    isNeutralStatus() { return [STATUS.DEFAULT, STATUS.DRAWN, STATUS.FINISHED].includes(this.status) },
    isFightingStatus() { return [STATUS.STARTED, STATUS.CALLED, STATUS.DECIDED].includes(this.status) },
    isFighting() { return [STATUS.STARTED, STATUS.CALLED, STATUS.DECIDED, STATUS.DRAWN, , STATUS.FINISHED].includes(this.status) },
    isDecided() { return this.callNum === this.raisedTotal ? true : false },
    isFinished() { return this.me.remain === 0 || this.opp.remain === 0 ? true : false },
    balloonClass() {
      return {
        'is-default': this.isNeutralStatus,
        'is-user': this.isFightingStatus && this.me.isTurn,
        'is-opp': this.isFightingStatus && !this.me.isTurn,
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
    setUserRaise(value) { this.me.raise = value },
    setOppCall() { this.callNum = randomNum(0, this.remainTotal) },
    setOppRaise() {
      if (!this.me.isTurn) {
        if (this.callNum === 0) this.opp.raise = 0;
        if (this.callNum === 1) this.opp.raise = randomNum(0, 1);
        if (this.callNum === 3) this.opp.raise = randomNum(0, this.opp.remain);
        if (this.callNum === 4) this.opp.raise = 2;
        return;
      }
      this.opp.raise = randomNum(0, this.opp.remain)
    },
    reduce(num) {
      const target = this.me.isTurn ? PLAYERS.USER : PLAYERS.OPP; this[`${target}Remain`] -= num;
    },

    call() {
      return promiseTimeout(() => {
        if (!this.me.isTurn) this.setOppCall();

        this.setOppRaise();
        this.status = STATUS.CALLED;
        this.message = sprintf(MESSAGE.CALLED, this.callNum);
      });
    },

    judge() {
      return promiseTimeout(() => {
        const num = this.isDecided ? 1 : 0;
        this.reduce(num)
        this.status = this.isDecided ? STATUS.DECIDED : STATUS.DRAWN;
        this.message = this.isDecided ? MESSAGE.DECIDED : MESSAGE.DRAWN;
      }, 3000)
    },

    change() {
      return promiseTimeout(() => {
        this.me.isTurn = !this.me.isTurn;
        this.opp.isTurn = !this.opp.isTurn;
        this.message = this.me.isTurn ? MESSAGE.USER_TURN : MESSAGE.OPP_TURN;
      })
    },


    initialize() {
      this.status = STATUS.DEFAULT;
      this.callNum = null;
      this.me.raise = null;
      this.opp.raise = null;
      this.setImage();
    },

    async fight() {
      this.status = STATUS.STARTED;
      this.message = MESSAGE.STARTED;
      await this.call();
      this.setImage();
      await this.judge();
      this.setImage();

      if (!this.isFinished) {
        await this.change();
        await this.initialize();

      } else {
        this.setImage();
        this.status = STATUS.FINISHED;
        this.message = this.me.remain === 0
          ? MESSAGE.USER_WON : MESSAGE.OPP_WON;
      }
    },

    setImage() {
      for (const [_, player] of Object.entries({ ...PLAYERS })) {
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
