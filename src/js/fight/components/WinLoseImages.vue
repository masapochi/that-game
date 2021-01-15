<template>
  <div class="img-box">
    <img class="face" :src="winImg" alt="Win" v-if="isWinner" />
    <img class="face" :src="loseImg" alt="Lose" v-else />
  </div>
</template>

<script>
export default {
  props: {
    isWinner: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      winImg: "./images/faces/win.svg",
      loseImg: "./images/faces/lose.svg",
    };
  },
};
</script>
