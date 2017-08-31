<template>
  <div>
    <products-filter
      :fetch_products='fetch_products'
      @update_filter_params='update_filter_params'/>
    <products-list :products='products'/>
  </div>
</template>

<script>
  import ProductsFilter from '@/components/products/ProductsFilter'
  import ProductsList from '@/components/products/ProductsList'
  import _ from 'lodash'
  import axios from 'axios'
  import querystring from 'querystring'

  export default {
    name: 'products_index',
    data () {
      return {
        products: [],
        categories: '',
        price_from: null,
        price_to: null,
        sort_sequence: null
      }
    },
    components: {
      ProductsFilter,
      ProductsList
    },
    methods: {
      fetch_products: _.debounce(
        function () {
          axios.get('http://localhost:3000/api/v1/products', this.fetch_post_params)
            .then((response) => {
              this.products = response.data.data
              this.page_count = response.data.meta.page_count
              this.page_size = response.data.meta.page_size
            })
            .catch((error) => {
              this.error_message = `An '${error.statusText}' has occurred. Please try again shortly.`
            })
        }, 200),
      update_filter_params: function (values) {
        this.categories = values.categories
        this.price_to = values.price_to
        this.price_from = values.price_from
        this.sort_sequence = values.sort_sequence
        this.fetch_products()
      }
    },
    computed: {
      fetch_products_params () {
        return querystring.stringify({
          filter: { price_to: this.price_to, price_from: this.price_from, categories: this.categories },
          sort: this.sort_sequence,
          page: { size: this.page_size, number: this.currentPage }
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
