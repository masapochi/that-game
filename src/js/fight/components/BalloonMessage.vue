<template>
  <div class="balloon" :class="classes">
    <slot />
    <p class="message" key="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: Object,
      required: false,
    },
    message: {
      validator: (prop) => typeof prop === "string" || prop === null,
      required: true,
    },
  },
};
</script>
