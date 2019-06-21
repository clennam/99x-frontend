<template>
  <div id="app">
    <b-navbar id="nav" toggleable="lg" type="light" variant="light">
      <b-navbar-brand>99X Frontend Assignment</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Catalogue</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <SearchBar />
          <b-nav-item to="/cart">Cart</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: "App",
  components: {
    SearchBar
  }
}
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: slategrey;
  min-height: 100vh;
}
#nav {
  margin-bottom: 2em;
}
</style>
