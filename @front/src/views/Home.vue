<template>
  <div class="flex flex-col justify-center items-center h-screen p-4">
    <div class="w-full text-3xl text-center">Tienda e-commerce</div>
    <div class="px-10 mt-4 text-center">
      Examen práctico | CERTIFIED DEVELOPERS
    </div>
    <img class="mt-4" :src="require(`@/assets/img/icon.svg`)" alt="" />

    <div class="mt-10 text-xl font-bold">Realizado por Jorge Arraga</div>
    <a href="https://jarraga.com">webSite</a>
    <Butt @click="$router.push({ name: 'tienda' })" class="mt-10"
      >Ingresar a la tienda</Butt
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>