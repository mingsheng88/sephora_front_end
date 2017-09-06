webpackJsonp([1],{"/EGT":function(t,e,s){"use strict";var r=s("LPum"),a=s("EMHn"),n=s("M4fF"),c=s.n(n),o=s("mtWM"),i=s.n(o),u=s("mw3O"),_=s.n(u);e.a={name:"products_index",data:function(){return{products:[],categories:[],selected_category:"",price_from:null,price_to:null,sort_sequence:null,currentPage:1,page_size:21,page_count:1}},watch:{sort_sequence:function(t){this.fetch_products()},currentPage:function(){this.currentPage&&this.currentPage>0?this.fetch_products():this.currentPage=1}},components:{ProductsFilter:r.a,ProductsList:a.a},methods:{fetch_products:c.a.debounce(function(){var t=this;i.a.get("https://sephora-backend.herokuapp.com/api/v1//products?"+this.filter_params).then(function(e){t.products=e.data.data,t.page_count=e.data.meta.page_count}).catch(function(e){t.$emit("error_emitted",e)})},200),fetch_categories:c.a.debounce(function(){var t=this;i.a.get("https://sephora-backend.herokuapp.com/api/v1//categories").then(function(e){t.categories=e.data.data}).catch(function(e){t.$emit("error_emitted",e)})},200),update_filter_params:function(t){this.selected_category=t.selected_category,this.price_to=t.price_to,this.price_from=t.price_from,this.sort_sequence=t.sort_sequence,this.fetch_products()}},computed:{filter_params:function(){return _.a.stringify({filter:{price_to:this.price_to,price_from:this.price_from,category_names:this.selected_category},sort:this.sort_sequence,page:{size:this.page_size,number:this.currentPage}})}},created:function(){this.fetch_categories(),this.fetch_products()}}},"/SdM":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{staticClass:"row d-flex justify-content-center",attrs:{toggleable:"md",type:"dark",variant:"dark"}},[s("b-navbar-brand",[s("router-link",{attrs:{to:{name:"products#index"}}},[t._v("Home")])],1)],1)},a=[],n={render:r,staticRenderFns:a};e.a=n},"5FxL":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"root"}},[s("b-container",[s("app-header"),t._v(" "),s("b-alert",{staticClass:"mt-3",attrs:{dismissible:"",variant:"danger",show:this.has_error_message()}},[t._v(t._s(t.error_message))]),t._v(" "),s("router-view",{on:{error_emitted:t.show_error}})],1)],1)},a=[],n={render:r,staticRenderFns:a};e.a=n},"77B8":function(t,e){},"7dTk":function(t,e){},"9M+g":function(t,e){},"9XVY":function(t,e,s){"use strict";e.a={name:"products_filter",props:{categories:{type:Array},filter_params:{type:Object,default:function(){return{selected_category:null,price_from:null,price_to:null,sort_sequence:null}}}},data:function(){return{selected_category:this.filter_params.selected_category,price_from:this.filter_params.price_from,price_to:this.filter_params.price_to,sort_sequence:this.filter_params.sort_sequence,sort_sequence_options:[{value:null,text:"Sort Sequence"},{value:"price",text:"Ascending Price"},{value:"-price",text:"Descending Price"}]}},watch:{sort_sequence:function(){this.emit_changes()},selected_category:function(){this.emit_changes()}},methods:{emit_changes:function(){this.$emit("filter_params_emitted",{selected_category:this.selected_category,price_to:this.price_to,price_from:this.price_from,sort_sequence:this.sort_sequence})}},computed:{categories_options:function(){var t=this.categories.map(function(t){return{text:t.attributes.name,value:t.attributes.name}});return t.unshift({value:null,text:"Select Root Category"}),t}}}},BOcp:function(t,e,s){"use strict";function r(t){s("CKYL")}var a=s("U0o5"),n=s("5FxL"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},CKYL:function(t,e){},CfX6:function(t,e,s){"use strict";function r(t){s("7dTk")}var a=s("/EGT"),n=s("sBX6"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},EMHn:function(t,e,s){"use strict";function r(t){s("mXvq")}var a=s("Wxof"),n=s("bAP4"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},FhOc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),a=s("YaEn"),n=s("sCSS"),c=s("BOcp"),o=s("9M+g"),i=(s.n(o),s("Jmt5"));s.n(i);r.a.config.productionTip=!1,r.a.use(n.a),new r.a({el:"#root",router:a.a,template:"<Root/>",components:{Root:c.a}})},Flgi:function(t,e){},Fq1P:function(t,e){},HCTz:function(t,e,s){"use strict";e.a={name:"header"}},Jmt5:function(t,e){},KnlJ:function(t,e,s){"use strict";function r(t){s("gEpU")}var a=s("SOyC"),n=s("c/T5"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},LPum:function(t,e,s){"use strict";function r(t){s("Flgi")}var a=s("9XVY"),n=s("wy1E"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},"N+QX":function(t,e){},SOyC:function(t,e,s){"use strict";e.a={name:"product_image",props:{product:{type:Object}},computed:{stock_status:function(){return this.product.attributes.stock_status},is_out_of_stock:function(){return"out_of_stock"===this.stock_status}}}},U0o5:function(t,e,s){"use strict";var r=s("teIl");e.a={name:"root",data:function(){return{error_message:""}},components:{"app-header":r.a},methods:{show_error:function(t){var e=t.response&&t.response.statusText||t.message;this.error_message="Oops... '"+e+"' has occurred. Please try again shortly."},has_error_message:function(){return this.error_message.length>0}}}},Wxof:function(t,e,s){"use strict";var r=s("lDZ1");e.a={name:"products_list",components:{"product-card":r.a},props:{products:{type:Array},products_per_row:{type:Number,default:3}},computed:{product_width:function(){return Math.floor(12/this.products_per_row)}}}},YaEn:function(t,e,s){"use strict";var r=s("7+uW"),a=s("/ocq"),n=s("CfX6"),c=s("rco3");r.a.use(a.a),e.a=new a.a({base:"/sephora_front_end/",routes:[{path:"/",name:"products#index",component:n.a},{path:"/products/:id",name:"products#show",component:c.a}],mode:"history"})},bAP4:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"mb-3"},[t._v("Products List")]),t._v(" "),t.products.length>0?t._l(Math.ceil(t.products.length/t.products_per_row),function(e){return s("b-row",{key:e},t._l(t.products.slice((e-1)*t.products_per_row,e*t.products_per_row),function(e){return s("b-col",{key:e.id,staticClass:"d-flex justify-content-center",attrs:{sm:t.product_width,item:e}},[s("product-card",{attrs:{product:e}})],1)}))}):s("div",{staticClass:"d-flex w-100 h-20 justify-content-center"},[t._v("\n    No products found\n  ")])],2)},a=[],n={render:r,staticRenderFns:a};e.a=n},"c/T5":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-image"},[s("img",{staticClass:"w-100",attrs:{src:"http://via.placeholder.com/225x225"}}),t._v(" "),t.is_out_of_stock?[t._m(0),t._v(" "),s("div",{staticClass:"add_to_waitlist image-overlay-btn"},[t._v("\n      WAITLIST ME\n    ")])]:s("div",{staticClass:"add_to_cart image-overlay-btn"},[t._v("\n    ADD TO CART\n  ")]),t._v(" "),s("span",{staticClass:"add_to_wishlist"})],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product_out_of_stock"},[s("span",[t._v("OUT OF STOCK")])])}],n={render:r,staticRenderFns:a};e.a=n},dlJ3:function(t,e,s){"use strict";var r=s("KnlJ");e.a={name:"product_card",props:{product:{type:Object}},components:{"product-card-image":r.a},computed:{brand_name:function(){return this.product.attributes.brand_name},name:function(){return this.product.attributes.name},price:function(){return this.product.attributes.price},sale_price:function(){return this.product.attributes.sale_price},sale_status:function(){return this.product.attributes.sale_status},is_on_sale:function(){return"on_sale"===this.sale_status}},methods:{goto_product_page:function(t){this.$router.push({name:"products#show",params:{id:this.product.id}})}}}},gEpU:function(t,e){},j8TK:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",[s("b-col",{staticClass:"mb-3 mt-4",attrs:{sm:"12"}},[s("h1",[t._v(t._s(t.name))])]),t._v(" "),s("b-col",{attrs:{sm:"3"}},[s("img",{attrs:{src:"http://via.placeholder.com/225x225"}})]),t._v(" "),s("b-col",{attrs:{sm:"9"}},[s("div",[s("label",[t._v("Price")]),t._v(" "),s("span",[t._v(t._s(t.price))])]),t._v(" "),s("div",[s("label",[t._v("Stock Status")]),t._v(" "),s("span",[t._v(t._s(t.stock_status))])]),t._v(" "),s("div",[s("label",[t._v("Brand")]),t._v(" "),s("span",[t._v(t._s(t.brand_name))])]),t._v(" "),s("div",[s("label",[t._v("Sale Status")]),t._v(" "),s("span",[t._v(t._s(t.sale_status))])]),t._v(" "),t.is_on_sale?[s("div",{staticClass:"sale-price"},[s("label",[t._v("Sale Price")]),t._v(" "),s("span",[t._v(t._s(t.sale_price))])]),t._v(" "),s("div",{staticClass:"sale-text"},[s("label",[t._v("Sale Description")]),t._v(" "),s("span",[t._v(t._s(t.sale_text))])])]:t._e()],2)],1)},a=[],n={render:r,staticRenderFns:a};e.a=n},lDZ1:function(t,e,s){"use strict";function r(t){s("Fq1P")}var a=s("dlJ3"),n=s("lob1"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},lob1:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product mb-3",on:{click:t.goto_product_page}},[s("product-card-image",{attrs:{product:t.product}}),t._v(" "),s("div",{staticClass:"font-weight-bold text-uppercase"},[t._v(t._s(t.brand_name))]),t._v(" "),s("div",[t._v(t._s(t.name))]),t._v(" "),t.is_on_sale?[s("div",{staticClass:"font-weight-bold"},[s("span",[s("del",[t._v("$ "+t._s(t.price))])]),t._v(" "),s("span",{staticClass:"sale-price"},[t._v("$ "+t._s(t.sale_price))])])]:s("div",{staticClass:"font-weight-bold"},[t._v("$ "+t._s(t.price))]),t._v(" "),t._m(0)],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rating"},[s("span",{staticClass:"fa fa-star"}),t._v(" "),s("span",{staticClass:"fa fa-star"}),t._v(" "),s("span",{staticClass:"fa fa-star"}),t._v(" "),s("span",{staticClass:"fa fa-star"}),t._v(" "),s("span",{staticClass:"fa fa-star muted"})])}],n={render:r,staticRenderFns:a};e.a=n},mXvq:function(t,e){},rco3:function(t,e,s){"use strict";function r(t){s("N+QX")}var a=s("sosJ"),n=s("j8TK"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},sBX6:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("products-filter",{attrs:{fetch_products:t.fetch_products,categories:t.categories},on:{filter_params_emitted:t.update_filter_params}}),t._v(" "),s("products-list",{attrs:{products:t.products}}),t._v(" "),s("b-pagination-nav",{staticClass:"col-xs-12",attrs:{align:"center","link-gen":function(){return"#"},"number-of-pages":t.page_count,"per-page":t.page_size},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},a=[],n={render:r,staticRenderFns:a};e.a=n},sosJ:function(t,e,s){"use strict";var r=s("mtWM"),a=s.n(r);e.a={name:"products_show",data:function(){return{product:null}},computed:{brand_name:function(){return this.product&&this.product.attributes.brand_name},name:function(){return this.product&&this.product.attributes.name},price:function(){return this.product&&this.product.attributes.price},sale_price:function(){return this.product&&this.product.attributes.sale_price},stock_status:function(){return this.product&&this.product.attributes.stock_status},sale_status:function(){return this.product&&this.product.attributes.sale_status},sale_text:function(){return this.product&&this.product.attributes.sale_text},is_out_of_stock:function(){return"out_of_stock"===this.stock_status},is_on_sale:function(){return"on_sale"===this.sale_status}},methods:{fetch_product:function(){var t=this;a.a.get("https://sephora-backend.herokuapp.com/api/v1//products/"+this.$route.params.id).then(function(e){t.product=e.data.data}).catch(function(e){t.$emit("error_emitted",e)})}},created:function(){this.fetch_product()}}},teIl:function(t,e,s){"use strict";function r(t){s("77B8")}var a=s("HCTz"),n=s("/SdM"),c=s("VU/8"),o=r,i=c(a.a,n.a,o,null,null);e.a=i.exports},wy1E:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{staticClass:"mt-3 mb-3",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.emit_changes(e)}}},[s("b-col",{attrs:{sm:"3"}},[s("b-form-select",{attrs:{options:this.categories_options,value:null},model:{value:t.selected_category,callback:function(e){t.selected_category=e},expression:"selected_category"}})],1),t._v(" "),s("b-col",{attrs:{sm:"2"}},[s("b-form-input",{attrs:{type:"text",placeholder:"Min Price"},model:{value:t.price_from,callback:function(e){t.price_from=e},expression:"price_from"}})],1),t._v(" "),s("b-col",{attrs:{sm:"2"}},[s("b-form-input",{attrs:{type:"text",placeholder:"Max Price"},model:{value:t.price_to,callback:function(e){t.price_to=e},expression:"price_to"}})],1),t._v(" "),s("b-col",{attrs:{sm:"3"}},[s("b-form-select",{attrs:{options:t.sort_sequence_options},model:{value:t.sort_sequence,callback:function(e){t.sort_sequence=e},expression:"sort_sequence"}})],1),t._v(" "),s("b-col",{attrs:{sm:"2"}},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.emit_changes(e)}}},[t._v("\n      Submit\n    ")])])],1)},a=[],n={render:r,staticRenderFns:a};e.a=n}},["FhOc"]);
//# sourceMappingURL=app.f441d0255cb5183ffc4f.js.map