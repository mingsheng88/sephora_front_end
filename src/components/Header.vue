<template>
  <b-navbar
    class='row d-flex justify-content-center'
    toggleable='md'
    type='dark'
    variant='dark'
    >
    <b-navbar-brand>
      <router-link :to='{ name:"products#index" }'>Home</router-link>
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="scss">
  .navbar-brand {
    a {
      color: inherit;
      font-size: inherit;

      &:hover {
        text-decoration: none;
      }
    }
  }
</style>
