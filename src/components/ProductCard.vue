<template>
  <b-card
    :title="title"
    :sub-title="author"
    :img-src="getImgUrl(img)"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    bg-variant="white"
    text-variant="dark"
  >
    <b-card-text>
      Rating -
      <b>{{rating}}</b> / 5.0
      <br>
      <b>Rs. {{price}}</b>
      <br>
      ({{type}})
    </b-card-text>

    <b-button :to="'/product/'+id" variant="info">more details</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: Number,
    img: String,
    title: String,
    author: String,
    type: String,
    rating: Number,
    price: Number
  },
  methods: {
    getImgUrl(pic) {
      if (pic) {
        return require("../assets/books_img/" + pic + ".jpg");
      } else return;
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
}

.card > img {
  max-height: 288px;
  object-fit: cover;
}
.card-title {
  position: relative;
  max-height: 2.4em; /* two lines */
  overflow: hidden;
}

.card-title::after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25%;
  height: 1.2em;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 50%
  );
}
</style>
