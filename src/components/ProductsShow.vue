<template>
  <b-row>
    <b-col sm='12' class='mb-3 mt-4'>
      <h1>{{ name }}</h1>
    </b-col>
    <b-col sm='3'>
      <img src='http://via.placeholder.com/225x225'/>
    </b-col>
    <b-col sm='9'>
      <div>
        <label>Price</label>
        <span>{{ price }}</span>
      </div>
      <div>
        <label>Stock Status</label>
        <span>{{ stock_status }}</span>
      </div>
      <div>
        <label>Brand</label>
        <span>{{ brand_name }}</span>
      </div>

      <div>
        <label>Sale Status</label>
        <span>{{ sale_status }}</span>
      </div>
      <template v-if='is_on_sale'>
        <div class='sale-price'>
          <label>Sale Price</label>
          <span>{{ sale_price }}</span>
        </div>
        <div class='sale-text'>
          <label>Sale Description</label>
          <span>{{ sale_text }}</span>
        </div>
      </template>
    </b-col>
  </b-row>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'products_show',
    data () {
      return {
        product: null
      }
    },
    computed: {
      brand_name () { return this.product && this.product.attributes.brand_name },
      name () { return this.product && this.product.attributes.name },
      price () { return this.product && this.product.attributes.price },
      stock_status () { return this.product && this.product.attributes.stock_status },
      sale_status () { return this.product && this.product.attributes.sale_status },
      sale_text () { return this.product && this.product.attributes.sale_text },
      is_out_of_stock () { return this.stock_status === 'out_of_stock' },
      is_on_sale () { return this.sale_status === 'on_sale' }
    },
    methods: {
      fetch_product: function () {
        var that = this
        axios
          .get(`http://localhost:3000/api/v1/products/${this.$route.params.id}`)
          .then(function (response) {
            that.product = response.data.data
          })
          .catch(function (error) {
            that.$emit('error_emitted', error)
          })
      }
    },
    created: function () { this.fetch_product() }
  }
</script>

<style lang="scss">
</style>
