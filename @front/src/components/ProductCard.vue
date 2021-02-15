<template>
  <div
    @click="$emit('click', $event)"
    :class="`flex-shrink-0 flex flex-col w-full rounded-lg overflow-hidden ${
      $store.state.theme == 'light' ? 'bg-white' : 'bg-black'
    } border-2 border-gray-${$store.state.t3} cursor-pointer`"
  >
    <div
      v-show="loading"
      style="
        padding-top: calc(50% - 0.75rem);
        padding-bottom: calc(50% - 0.75rem);
      "
      :class="`w-full flex justify-center items-center ${
        $store.state.theme == 'light' ? 'bg-white' : 'bg-black'
      }`"
    >
      <div :class="`text-base text-center text-gray-${$store.state.t5}`">
        cargando imágen...
      </div>
    </div>
    <img
      @load="imageLoaded"
      v-show="!loading"
      :src="require(`@/assets/img/${data.picture}`)"
    />
    <div
      :class="`flex justify-between items-center pb-2 pt-3 px-3 border-t border-gray-${$store.state.t3}`"
    >
      <div class="truncate">{{ data.name }}</div>
      <div class="font-bold ml-4 flex-shrink-0">ARS {{ data.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imageLoaded() {
      this.loading = false;
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  props: {
    data: Object,
  },
};
</script>

<style>
</style>