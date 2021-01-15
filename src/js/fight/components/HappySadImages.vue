<template>
  <div class="img-box">
    <img class="face" :src="happyImg" alt="Happy" v-if="isHit" />
    <img class="face" :src="sadImg" alt="Sad" v-else />
  </div>
</template>

<script>
export default {
  props: {
    isHit: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      happyImg: "./images/faces/happy.svg",
      sadImg: "./images/faces/sad.svg",
    };
  },
};
</script>
