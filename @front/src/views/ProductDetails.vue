<template>
  <div class="flex flex-col">
    <div class="flex-grow overflow-y-scroll">
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
        :src="require(`@/assets/img/${$store.state.currentProduct.picture}`)"
      />
      <div class="p-4">
        <div class="text-xl font-bold">
          {{ $store.state.currentProduct.name }}
        </div>
        <div class="text-xl mt-2">
          ARS {{ $store.state.currentProduct.price }}
        </div>
        <div class="mt-4">{{ $store.state.currentProduct.description }}</div>
      </div>
    </div>
    <!-- BOTONES -->
    <div
      :class="`flex justify-end border-t border-gray-${$store.state.t3} p-4`"
    >
      <Butt @click="pay" uppercase>Pagar la compra</Butt>
    </div>
    <!-- BOTONES -->

    <!-- MODAL -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="top-0 left-0 absolute w-full h-screen flex justify-center items-center bg-white bg-opacity-90"
      >
        <div class="font-bold px-6 py-4 text-lg rounded bg-white shadow-lg">
          Redirigiendo a mercado pago
        </div>
      </div>
    </transition>
    <!-- MODAL -->
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("#mpscript").setAttribute("view", "item");
  },
  methods: {
    imageLoaded() {
      this.loading = false;
    },
    pay() {
      if (MP_DEVICE_SESSION_ID == undefined) {
        alert("Esperando MP_DEVICE_SESSION_ID 😑");
        return;
      }
      this.showModal = true;
      const body = {
        name: this.$store.state.currentProduct.name,
        price: this.$store.state.currentProduct.price,
        picture: this.$store.state.currentProduct.picture,
        deviceId: MP_DEVICE_SESSION_ID,
      };
      fetch(`${process.env.VUE_APP_BASE_URL}createPreference`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.result == "ok") {
            console.log(r);
            window.location.replace(r.initPoint);
          }
        })
        .catch(() => {
          alert("Error, intenta nuevamente...");
        });
    },
  },
  data() {
    return {
      showModal: false,
      loading: true,
    };
  },
};
</script>

<style>
</style>