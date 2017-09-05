<template>
  <div class='product mb-3' @click='goto_product_page'>
    <product-card-image :product='product' />
    <div class='font-weight-bold text-uppercase'>{{ brand_name }}</div>
    <div>{{ name }}</div>
    <template v-if='is_on_sale'>
      <div class='font-weight-bold'>
        <span><del>$ {{ price }}</del></span>
        <span class='sale-price'>$ {{ sale_price }}</span>
      </div>
    </template>
    <div class='font-weight-bold' v-else>$ {{ price }}</div>
    <div class='rating'>
      <span class='fa fa-star'/>
      <span class='fa fa-star'/>
      <span class='fa fa-star'/>
      <span class='fa fa-star'/>
      <span class='fa fa-star muted'/>
    </div>
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
      sale_price () { return this.product.attributes.sale_price },
      sale_status () { return this.product.attributes.sale_status },
      is_on_sale () { return this.sale_status === 'on_sale' }
    },
    methods: {
      goto_product_page: function (product) {
        this.$router.push({ name: 'products#show', params: { id: this.product.id } })
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

  .rating {
    font-size: 10px;

    .fa-star {
      color: red;
    }
    .fa-star.muted {
      color: lightgray;
    }
  }

  .sale-price {
    color: red;
  }
</style>
