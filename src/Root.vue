<template>
  <div id="root">
    <div class='container'>
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'root',
    components: {
      'app-header': Header
    }
  }
</script>

<style>
* {
  font-size: 13px;
  font-family: "Avalon", CenturyGothic, Helvetica, Arial;
}
</style>
