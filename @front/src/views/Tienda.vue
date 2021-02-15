<template>
  <div id="container-tienda" class="flex flex-col p-2 overflow-y-scroll">
    <ProductCard
      :class="`${i > 0 ? 'mt-2' : ''}`"
      v-for="(item, i) in items"
      :key="item._id"
      @click="goDetails(i)"
      :data="item"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("#mpscript").setAttribute("view", "search");
  },
  methods: {
    goDetails(index) {
      this.$store.state.currentProduct = this.items[index];
      this.$store.state.scrollPosition = document.querySelector(
        "#container-tienda"
      ).scrollTop;
      this.$router.push({ name: "productDetails" });
    },
  },
  data() {
    return {
      items: [
        {
          _id: "1",
          name: "Samsung Galaxy S20",
          description:
            "Este es el teléfono para las personas que lo quieren todo. Los escuchamos a ustedes, los fanáticos, y creamos un smartphone que deja atrás cualquier tipo de compromiso. Este es un teléfono hecho a la medida para fanáticos de todo tipo. Independientemente de si sos fanático de la fotografía, los juegos o llenar tus redes con todo lo que te inspira, hicimos la mejor combinación de la innovación del S20. Este es el teléfono que te da lo que querés para que puedas hacer más de lo que disfrutas.",
          picture: "samsung.png",
          price: 80000,
        },
        {
          _id: "2",
          name: "Motorola One Vision",
          description:
            "Ten una experiencia inmersiva estés donde estés con motorola one vison y su superficie completamente rodeada por la pantalla de 6.3” Full HD+y relación de aspecto 21:9.",
          picture: "moto.png",
          price: 50100,
        },
        {
          _id: "3",
          name: "Google Pixel 3",
          description:
            "El Google Pixel 3 tiene una excelente cámara trasera y, en la parte frontal, tienes dos cámaras para capturar selfies más amplios. Es resistente al agua; ofrece muy buen desempeño y se puede cargar de manera inalámbrica. Google Assistant puede contestar llamadas por ti y recibes almacenamiento ilimitado gratis de la calidad original de las fotos y videos que hagas con el celular.",
          picture: "pixel.png",
          price: 165700,
        },
      ],
    };
  },
};
</script>

<style>
</style>