<template>
  <button
    type="button"
    class="btn -circle"
    :class="classes"
    :data-num="num"
    @click="clicked"
  >
    {{ num }}
  </button>
</template>


<script>
export default {
  props: {
    // type: {
    //   type: String,
    //   required: true,
    // },
    classes: {
      validator: (prop) =>
        ["string", "object"].includes(typeof prop) || prop === null,
      required: true,
    },
    num: {
      type: Number,
      required: true,
    },
  },
  methods: {
    clicked(e) {
      this.$emit("clicked", parseInt(e.target.dataset.num));
    },
  },
};
</script>
