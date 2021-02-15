<template>
  <div
    id="root"
    :class="`bg-gray-${$store.state.t2} flex justify-center items-center`"
  >
    <div
      id="container"
      style="min-width: 360px"
      :class="`bg-gray-${$store.state.t1} text-gray-${$store.state.t7} flex flex-col max-w-lg flex-grow lg:rounded-lg overflow-hidden shadow-lg`"
    >
      <router-view class="overflow-y-scroll w-full flex-grow" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);

    // COLOR THEME
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute(
      "content",
      this.$store.state.theme == "light" ? "#FFF" : "#000"
    );
  },
  methods: {
    onResize() {
      let c = document.querySelector("#container");
      if (window.innerWidth > 1000) {
        this.$store.state.size = "big";
        c.style.height = `${90}%`;
      } else {
        this.$store.state.size = "small";
        c.style.height = `${100}%`;
      }
      document.querySelector("#root").style.height = `${window.innerHeight}px`;
    },
  },
};
</script>

<style>
@font-face {
  font-family: nunito;
  src: url(./assets/fonts/Nunito-Regular.ttf);
}
* {
  font-family: nunito;
  outline: none;
  user-select: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
