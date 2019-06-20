<template>
  <b-nav-form>
    <b-form-input v-model="search" size="sm" class="mr-sm-2" placeholder="Search Titles"></b-form-input>
    <b-button
      size="sm"
      :to="'/catalogue/'+search"
      class="my-2 my-sm-0"
      type="submit"
    >Search</b-button>
  </b-nav-form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
        search: ""
    };
  }
};
</script>

<style scoped>
</style>
