<template>
  <b-container class="catalogue">
    <b-row>
      <b-col><ProductCard/></b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "catalogue",
  components: {
    ProductCard
  }
};
</script>