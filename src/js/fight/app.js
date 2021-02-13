import Vue from "vue";
import { sprintf } from "sprintf-js";
import { randomNum, isNull, promiseTimeout } from "../utils";
import { PLAYERS, IMG_FMT, STATUS, NEUTRAL_STATUS, FIGHTING_STATUS } from './consts';
import FistImages from "./components/FistImages.vue";
import BalloonMessage from "./components/BalloonMessage.vue";
import NumButton from "./components/NumButton.vue";
import WinLoseImages from "./components/WinLoseImages.vue";
import FaceImages from "./components/FaceImages.vue";
Vue.config.productionTip = false;

new Vue({
  components: {
    FistImages,
    BalloonMessage,
    NumButton,
    WinLoseImages,
    FaceImages,
  },
  data() {
    return {
      callNum: null,
      me: PLAYERS.me,
      opp: PLAYERS.opp,
      message: '',
      status: '',
      round: 1,
      isLoading: true,
      isProcessing: false,
      isJudged: false,
      isDrawn: false,
    }
  },
  computed: {
    isWinner() { return this.isSettled && this.isMyTurn },
    isMyTurn() { return !!this.me.isTurn },
    raisedTotal() { return this.me.raise + this.opp.raise },
    remainTotal() { return this.me.remain + this.opp.remain },
    callables() { return this.remainTotal + 1 },
    raisables() { return this.me.remain + 1 },
    isReady() {
      const isSelected = this.me.isTurn
        ? !isNull(this.callNum) && !isNull(this.me.raise)
        : !isNull(this.me.raise)
      return !!isSelected;
    },
    isNeutral() { return NEUTRAL_STATUS.includes(this.status) },
    isFighting() { return FIGHTING_STATUS.includes(this.status) },
    isCalled() { return STATUS.CALLED.STATE === this.satus },
    // isDrawn() { return STATUS.DRAWN.STATE === this.status },
    // isJudged() { return !!(this.callNum === this.raisedTotal) },

    isSettled() { return !!(this.me.remain === 0 || this.opp.remain === 0) },
    isFinished() { return STATUS.FINISHED.STATE === this.status },
    balloonClass() {
      return {
        'is-neutral': this.isNeutral,
        'is-my-turn': this.isFighting && this.me.isTurn,
        'is-opp-turn': this.isFighting && this.opp.isTurn,
        'is-ready': STATUS.READY.STATE === this.status,
        'is-called': STATUS.CALLED.STATE === this.status,
        'is-judged': this.isJudged,
        'is-drawn': this.isDrawn,
        'is-finished': STATUS.FINISHED.STATE === this.status,
      }
    },
  },
  created() {
    this.setImage();
    this.setStatus(STATUS.NEUTRAL, this.me.name)
    this.isLoading = false;
  },
  methods: {
    setCall(value) { this.callNum = value },
    setRaise(value) { this.me.raise = value },
    setOpp() {
      this.opp.raise = randomNum(0, this.opp.remain);
      if (this.opp.isTurn) this.callNum = randomNum(this.opp.raise, this.remainTotal);
    },

    setStatus(state, value = null) {
      this.status = sprintf(state.STATE);
      this.message = sprintf(state.MSG, value);
    },

    reduce() {
      // const num = this.isJudged ? 1 : 0;
      if (this.me.isTurn) this.me.remain -= 1;
      if (this.opp.isTurn) this.opp.remain -= 1;
    },

    ready() {
      this.isProcessing = true;
      // return promiseTimeout(() => {
      this.setStatus(STATUS.READY)
      // }, 800);
    },

    call() {
      return promiseTimeout(() => {
        this.setOpp();
        this.setImage();
        this.setStatus(STATUS.CALLED, this.callNum);
      })
    },

    judge() {
      return promiseTimeout(() => {
        let status = ''
        if (this.callNum === this.raisedTotal) {
          this.reduce()
          this.isJudged = true;
          status = STATUS.JUDGED;
        } else {
          this.isDrawn = true;
          status = STATUS.DRAWN;
        }
        this.setStatus(status)
        // this.setImage();
      });
    },

    change() {
      return promiseTimeout(() => {
        this.me.isTurn = !this.me.isTurn;
        this.opp.isTurn = !this.opp.isTurn;
        const player = this.me.isTurn ? this.me.name : this.opp.name;
        this.setStatus(STATUS.NEUTRAL, player);
      })
    },

    finish() {
      return promiseTimeout(() => {
        this.isJudged = false;
        this.isDrawn = false;
        const player = this.me.remain === 0 ? this.me.name : this.opp.name;
        this.setStatus(STATUS.FINISHED, player);
        this.setImage();
      });
    },

    reset() {
      this.isProcessing = false;
      this.isJudged = false;
      this.isDrawn = false;
      this.callNum = null;
      this.me.raise = null;
      this.opp.raise = null;
      this.setImage();
    },

    async fight() {
      await this.ready();
      await this.call();
      await this.judge();

      if (!this.isSettled) {
        await this.change();
        await this.reset();
        this.round += 1;
      } else {
        this.round = 1;
        this.finish();
      }
    },

    setImage() {
      for (const [p, _] of Object.entries({ ...PLAYERS })) {
        const remain = this[p].remain;
        const raise = this[p].raise;
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

        this[p].img.left = sprintf(IMG_FMT.LEFT, p, left);
        this[p].img.right = sprintf(IMG_FMT.RIGHT, p, right);
      }
    },
  },
}).$mount('#fight');
