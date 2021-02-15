<template>
  <div
    @click="$emit('click')"
    :style="`width: ${full ? '100%' : 'fit-content'}`"
    :class="`flex justify-center items-center rounded-lg px-4 py-2 bg-${color}-${
      $store.state.t2
    } text-${color}-${
      $store.state.t7
    } cursor-pointer transition duration-100 hover:text-${color}-${
      $store.state.t5
    } ${uppercase ? 'uppercase' : 'lowercase'}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue",
    },
    full: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>