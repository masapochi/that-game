<template>
  <div class="img-box">
    <templte v-if="isJudged">
      <img class="face" :src="happyImg" alt="Happy" v-if="inTurn" />
      <img class="face" :src="sadImg" alt="Sad" v-else />
    </templte>
    <template v-else-if="isDrawn">
      <img class="face" :src="drawImg" alt="Draw" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    inTurn: {
      type: Boolean,
      required: true,
    },
    isJudged: {
      type: Boolean,
      required: true,
    },
    isDrawn: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      happyImg: "./images/faces/happy.svg",
      sadImg: "./images/faces/sad.svg",
      drawImg: "./images/faces/draw.svg",
    };
  },
};
</script>
