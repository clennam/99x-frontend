import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    fill (state, books) {
      state.books = books;
    }
  },
  actions: {

  }
})
