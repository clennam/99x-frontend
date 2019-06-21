<template>
  <b-container fluid class="catalogue">
    <b-row>
      <b-col sm="auto" v-for="book in books" v-bind:key="book.id">
        <ProductCard
          :id="book.id"
          :img="book.img"
          :title="book.title"
          :author="book.author"
          :type="book.type"
          :rating="book.rating"
          :price="book.price"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import needed third party libs
import axios from "axios";

// import Vuex store
import BookStore from "@/store.js";

// import needed components
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "catalogue",
  components: {
    ProductCard
  },
  props: ["search"],
  data() {
    return {
      books: []
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/books`);

      BookStore.commit("fill", res.data);
      this.books = BookStore.state.books;
      if (this.search) {
        this.books = this.books.filter(book =>
          book.title.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }
};
</script>