<template>
  <b-container fluid class="cart">
    <b-row align-content="center" align-v="center" class="mb-2">
      <b-col>
        <h1 class="text-light text-center">Cart</h1>
        <b-card tag="article" class="mb-2" bg-variant="white" text-variant="dark">
          <b-container fluid class="cart-table">
            <b-row align-content="center" align-v="center" class="mb-2">
              <b-col cols="8">Item</b-col>
              <b-col cols="4">Price</b-col>
            </b-row>
            <b-row
              v-for="book in detailList"
              v-bind:key="book.index"
              align-content="center"
              align-v="center"
              class="mb-2"
            >
              <b-col cols="8">{{book.title}}</b-col>
              <b-col cols="4">{{book.price}}</b-col>
            </b-row>
            <b-row v-if="detailList.length==0">
              <b-col class="text-secondary">There are no items currently in the cart.</b-col>
            </b-row>
            <b-row v-if="detailList.length>0">
              <b-col class="text-secondary" cols="8">Total Cost</b-col>
              <b-col class="text-primary" cols="4">{{ calculateTotal }}</b-col>
              <b-col class="text-secondary" cols="8">Total Discount</b-col>
              <b-col class="text-primary" cols="4">{{calculateDiscount}}</b-col>
              <b-col class="text-secondary" cols="8">Net Cost</b-col>
              <b-col class="text-primary" cols="4">{{calculateTotal-calculateDiscount}}</b-col>
              <b-col class="text-secondary" cols="8">VAT Amount</b-col>
              <b-col class="text-primary" cols="4">{{calculateVAT}}</b-col>
              <b-col class="text-secondary" cols="8">Final Total</b-col>
              <b-col
                class="text-primary"
                cols="4"
              >{{calculateTotal-calculateDiscount+calculateVAT}}</b-col>
              <b-col class="small text-center">All values in LKR</b-col>
            </b-row>
          </b-container>
        </b-card>
      </b-col>
    </b-row>
    <b-btn variant="primary" to="/catalogue">Back to catalogue</b-btn>
  </b-container>
</template>

<script>
// import Vuex store
import BookStore from "@/store.js";

export default {
  name: "cart",
  components: {
    // eslint-disable-next-line
    BookStore
  },
  props: ["id"],
  data() {
    return {
      detailList: []
    };
  },
  created() {
    if (this.id) {
      BookStore.commit("addOrder", this.id);
    }

    if (BookStore.state.orderList) {
      BookStore.state.orderList.forEach(id => {
        let book = BookStore.state.books.find(book => book.id == id);
        this.detailList.push(book);
      });
    }
  },
  computed: {
    calculateTotal: function() {
      let total = 0;
      this.detailList.forEach(book => (total += book.price));
      return total;
    },
    calculateDiscount: function() {
      let discountPercentage = 0;
      let discount = 0;
      const discountPer = 500;
      let total = this.calculateTotal;
      discountPercentage = Math.floor(total / discountPer) * 2;
      discount = total * (discountPercentage / 100);
      return discount;
    },
    calculateVAT: function() {
      let netCost = this.calculateTotal - this.calculateDiscount;
      let vatAmt = netCost * 0.12;
      return vatAmt;
    }
  }
};
</script>