<template>
  <div :class="classes">
    <slot />
    <img class="fist" :src="left" />
    <img class="fist" :src="right" />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      required: false,
      default: "",
    },
    left: {
      validator: (prop) => typeof prop === "string" || prop === null,
      required: true,
    },
    right: {
      validator: (prop) => typeof prop === "string" || prop === null,
      required: true,
    },
  },
};
</script>
