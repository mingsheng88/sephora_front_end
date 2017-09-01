<template>
  <div>
    <h1>Products List</h1>
    <template v-if='products.length > 0'>
      <b-row
        v-for='i in Math.ceil(products.length / products_per_row)'
        :key='i'>
        <b-col
          :sm="product_width"
          class="d-flex justify-content-center"
          v-for='product in products.slice((i - 1) * products_per_row, i * products_per_row)'
          :key='product'>
          <product-card :product='product'/>
        </b-col>
      </b-row>
    </template>
    <div class='d-flex w-100 h-20 justify-content-center' v-else>
      No products found
    </div>
  </div>
</template>

<script>
  import ProductCard from '@/components/products/ProductCard'

  export default {
    name: 'products_list',
    components: {
      'product-card': ProductCard
    },
    props: {
      products: { type: Array },
      products_per_row: { type: Number, default: 3 }
    },
    computed: {
      product_width () { return Math.floor(12 / this.products_per_row) }
    }
  }
</script>

<style lang="scss">
</style>
