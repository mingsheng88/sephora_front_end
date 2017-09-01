<template>
  <div class='product-image'>
    <img class='w-100' src='http://via.placeholder.com/225x225'/>

    <template v-if='is_out_of_stock'>
      <div class='product_out_of_stock'>
        <span>OUT OF STOCK</span>
      </div>
      <div class='add_to_waitlist image-overlay-btn'>
        WAITLIST ME
      </div>
    </template>
    <div class='add_to_cart image-overlay-btn' v-else>
      ADD TO CART
    </div>

    <span class='add_to_wishlist'></span>
  </div>
</template>

<script>
  export default {
    name: 'product_image',
    props: {
      product: {
        type: Object
      }
    },
    computed: {
      stock_status () { return this.product.attributes.stock_status },
      is_out_of_stock () { return this.stock_status === 'out_of_stock' }
    }
  }
</script>

<style lang="scss">
  .product-image {
    position: relative;
  }

  .product_out_of_stock {
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    justify-content: center;

    span {
      line-height: 30px;
      text-align: center;
      opacity: 0.5;
      background: white;
      font-weight: bold;
    }
  }

  .product:hover {
    .image-overlay-btn {
      display: block;
    }
  }
  .image-overlay-btn {
    display: none;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;

    @media (max-width: 750px) {
      display: none !important;
    }
  }
  .add_to_cart {
    background: #e6001c;
    color: white;
  }
  .add_to_cart:hover {
    background: black;
    opacity: 0.65;
  }

  .add_to_waitlist {
    background: black;
    color: white;
  }
  .add_to_waitlist:hover {
    background: black;
    opacity: 0.2;
  }
  .waitlisted {
    background: #f1f1f1;
    color: #a9a9a9;
  }

  @font-face {
    font-family: 'entypo';
    src: url(https://cdnjs.cloudflare.com/ajax/libs/entypo/2.0/entypo.woff) format(woff)
         url(https://cdnjs.cloudflare.com/ajax/libs/entypo/2.0/entypo.svg) format(svg)
         url(https://cdnjs.cloudflare.com/ajax/libs/entypo/2.0/entypo.eot) format(eot)
         url(https://cdnjs.cloudflare.com/ajax/libs/entypo/2.0/entypo.ttf) format(ttf);
  }

  .add_to_wishlist {
    font-family: 'entypo';
    position: absolute;
    right: 5%;
    font-size: 24px;

    @media (min-width: 750px) {
      top: 0px;
    }
    @media (max-width: 750px) {
      bottom: 0px;
    }
  }
  .add_to_wishlist:before {
    content: "\2661";
  }
  .add_to_wishlist:hover:before {
    content: "\2665";
    color: red;
  }
</style>
