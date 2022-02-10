<template>
  <!--Header start-->
  <the-header></the-header>
  <!--Header start-->

  <!-- Breadcrumb Begin -->
  <bread-crumb></bread-crumb>
  <!-- Breadcrumb End -->

  <!-- Start Product Area -->
  <div class="product-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="product-info">
            <div class="nav-main">
              <!-- Tab Nav -->
              <navigation></navigation>

              <main>
                <!-- <component :is="activePage"></component> -->
                <router-view></router-view>
              </main>
              <!-- hi there -->
              <div class="row">
                <div class="col-12">
                  <div class="section-title">
                    <h2>All Products</h2>
                  </div>
                </div>
              </div>
              <!--/ End Tab Nav -->
            </div>
            <div class="tab-content" id="myTabContent">
              <!-- Start Single Tab -->
              <div class="tab-pane fade show active" id="man" role="tabpanel">
                <div class="tab-single">
                  <div class="row">
                    <div
                      class="col-xl-3 col-lg-4 col-md-4 col-12"
                      v-for="item in products"
                      :key="item.id"
                    >
                      <div class="single-product">
                        <div class="product-img">
                          <router-link
                            :to="{
                              name: 'productdetail',
                              params: { id: item.id },
                            }"
                          >
                            <img
                              class="default-img"
                              v-bind:src="item.image"
                              alt=""
                            />
                          </router-link>
                          <div class="button-head">
                            <div class="product-action">
                              <a
                                data-toggle="modal"
                                data-target="#exampleModal"
                                title="Quick View"
                                href="#"
                                ><i class="ti-eye"></i
                                ><span>Quick Shop</span></a
                              >
                              <a title="Wishlist" href="#"
                                ><i class="ti-heart"></i
                                ><span>Add to Wishlist</span></a
                              >
                              <a title="Compare" href="#"
                                ><i class="ti-bar-chart-alt"></i
                                ><span>Add to Compare</span></a
                              >
                            </div>
                            <div class="product-action-2 mb-2">
                              <h6>Shop</h6>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3>
                            <a href="#">{{ item.title }}</a>
                          </h3>
                          <div class="product-price">
                            <span
                              ><b>₹ {{ item.price }}</b></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--/ End Single Tab -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Product Area -->

  <!--Footer start-->
  <the-footer></the-footer>
  <!--Footer start-->
</template>

<script>
//import axios from "axios" //fetch data
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import BreadCrumb from "../pages/BreadCrumb.vue";
import Navigation from "@/pages/category/Navigation.vue";


export default {
  components: {
    TheHeader,
    TheFooter,
    BreadCrumb,
    Navigation,
  
  },
  name: "Home",
  //   data()
  //     {
  //       return{
  //         list:[],
  //       }
  //     },
  //     async mounted()
  //     {
  //       await axios.get("https://9e1f8a98-a440-4b20-9455-b1662ca5a2a5.mock.pstmn.io")
  //       .then((response) =>
  //         this.list=response.data
  //       );
  //     }
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.section-title {
  margin-top: 25px;
}

.product-info {
  margin-bottom: 50px;
}
</style>
