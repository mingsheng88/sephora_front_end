<template>
  <div id="root">
    <b-container>

      <app-header></app-header>

      <b-alert dismissible class='mt-3' variant='danger' :show='this.has_error_message()'>{{ error_message }}</b-alert>

      <router-view @error_emitted='show_error'></router-view>

    </b-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'root',
    data () {
      return {
        error_message: ''
      }
    },
    components: {
      'app-header': Header
    },
    methods: {
      show_error (value) {
        var message = value.response && value.response.statusText || value.message
        this.error_message =
          `Oops... '${message}' has occurred. Please try again shortly.`
      },
      has_error_message () { return this.error_message.length > 0 }
    }
  }
</script>

<style>
* {
  font-size: 13px;
  font-family: "Avalon", CenturyGothic, Helvetica, Arial;
}
</style>
