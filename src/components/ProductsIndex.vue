<template>
  <div>
    <products-filter :fetch_products='fetch_products' @filter_params_emitted='update_filter_params'/>
    <b-pagination-nav
      class='col-xs-12'
      align= 'center'
      :link-gen='function() { return "#" }'
      v-model='currentPage'
      :number-of-pages='page_count'
      :per-page='page_size'
      />
    <products-list :products='products'/>
  </div>
</template>

<script>
  import ProductsFilter from '@/components/products/ProductsFilter'
  import ProductsList from '@/components/products/ProductsList'
  import _ from 'lodash'
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'products_index',
    data () {
      return {
        products: [],
        categories: '',
        price_from: null,
        price_to: null,
        sort_sequence: null,
        // Requires camelcase for bootstrap-vue
        currentPage: 1,
        page_size: 21,
        page_count: 1
      }
    },
    watch: {
      sort_sequence: function (value) { this.fetch_products() },
      currentPage: function () {
        if (this.currentPage && this.currentPage > 0) {
          this.fetch_products()
        } else {
          this.currentPage = 1
        }
      }
    },
    components: {
      ProductsFilter,
      ProductsList
    },
    methods: {
      fetch_products: _.debounce(
        function () {
          axios
            .get(`http://localhost:3000/api/v1/products?${this.filter_params}`)
            .then((response) => {
              // FIXME: Input sanitisation ; Use POJO / Deserializer class
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
      filter_params () {
        return qs.stringify({
          filter: { price_to: this.price_to, price_from: this.price_from, categories: this.categories },
          sort: this.sort_sequence,
          page: { size: this.page_size, number: this.currentPage }
        })
      }
    },
    created: function () { this.fetch_products() }
  }
</script>

<style lang="scss">
</style>
