<template>
  <b-row class='mt-3 mb-3' @keyup.enter='emit_changes'>
    <b-col sm='3'>
      <b-form-select v-model='selected_category' :options='this.categories_options' :value='null'/>
    </b-col>
    <b-col sm='2'>
      <b-form-input type='text' placeholder='Min Price' v-model='price_from' />
    </b-col>
    <b-col sm='2'>
      <b-form-input type='text' placeholder='Max Price' v-model='price_to' />
    </b-col>
    <b-col sm='3'>
      <b-form-select v-model='sort_sequence' :options='sort_sequence_options' />
    </b-col>
    <b-col sm='2'>
      <a href='#' class='btn btn-primary' @click.prevent='emit_changes'>
        Submit
      </a>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'products_filter',
    props: {
      categories: {
        type: Array
      },
      filter_params: {
        type: Object,
        default: () => {
          return {
            selected_category: null,
            price_from: null,
            price_to: null,
            sort_sequence: null
          }
        }
      }
    },
    data () {
      return {
        selected_category: this.filter_params.selected_category,
        price_from: this.filter_params.price_from,
        price_to: this.filter_params.price_to,
        sort_sequence: this.filter_params.sort_sequence,
        sort_sequence_options: [
          { value: null, text: 'Sort Sequence' },
          { value: 'price', text: 'Ascending Price' },
          { value: '-price', text: 'Descending Price' }
        ]
      }
    },
    watch: {
      sort_sequence () { this.emit_changes() },
      selected_category () { this.emit_changes() }
    },
    methods: {
      emit_changes () {
        this.$emit('filter_params_emitted', {
          selected_category: this.selected_category,
          price_to: this.price_to,
          price_from: this.price_from,
          sort_sequence: this.sort_sequence
        })
      }
    },
    computed: {
      categories_options: function () {
        var categories = this.categories.map((x) => {
          return { text: x.attributes.name, value: x.attributes.name }
        })
        categories.unshift({ value: null, text: 'Select Root Category' })
        return categories
      }
    }
  }
</script>

<style lang="scss">
</style>
