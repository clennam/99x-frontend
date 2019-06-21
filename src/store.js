import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    orderList: []
  },
  mutations: {
    fill (state, books) {
      state.books = books;
    },
    addOrder(state, orderId) {
      state.orderList.push(orderId);
    }
  }
})
