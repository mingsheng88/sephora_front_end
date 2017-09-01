<template>
  <div class='product mb-3' @click='goto_product_page'>
    <product-card-image :product='product' />
    <div class='font-weight-bold text-uppercase'>{{ brand_name }}</div>
    <div>{{ name }}</div>
    <div class='font-weight-bold'>$ {{ price }}</div>
  </div>
</template>

<script>
  import ProductCardImage from '@/components/products/ProductCardImage'

  export default {
    name: 'product_card',
    props: {
      product: { type: Object }
    },
    components: {
      'product-card-image': ProductCardImage
    },
    computed: {
      brand_name () { return this.product.attributes.brand_name },
      name () { return this.product.attributes.name },
      price () { return this.product.attributes.price },
      sale_status () { return this.product.attributes.sale_status },
      is_on_sale () { return this.sale_status === 'on_sale' }
    },
    methods: {
      goto_product_page: function (product) {
        this.$router.push({ path: `/products/${this.product.id}` })
      }
    }
  }
</script>

<style lang="scss">
  .product {
    cursor: pointer;
    width: 100%;
    max-width: 225px;
    position: relative;
  }
</style>
