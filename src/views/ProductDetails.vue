<template>
  <b-container fluid class="product-details">
    <b-row align-content="start" align-v="center" class="mb-2">
      <b-col cols="3">
        <img class="img-fluid" :src="getImgUrl(book.img)">
      </b-col>
      <b-col>
        <h1 class="display-4 text-light">{{book.title}}</h1>
        <h3 class="text-black">{{book.author}} | {{book.type}} | {{book.rating}}/5.0</h3>
        <h4 class="text-white">Rs. {{book.price}} <b-button variant="info" :to="'/cart/add/'+book.id">Add to cart</b-button></h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card tag="article" class="mb-2" bg-variant="white" text-variant="dark">
          <b-card-text>{{book.desc}}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import Vuex store
import BookStore from "@/store.js";

export default {
  name: "ProductDetails",
  props: ["id"],
  components: {
    // eslint-disable-next-line
    BookStore
  },
  data() {
    return {
      book: Object
    };
  },
  created() {
    this.book = BookStore.state.books.find(book => book.id == this.id);
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