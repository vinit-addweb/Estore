<template>
  <!-- Preloader -->
  <!-- <div class="preloader">
    <div class="preloader-inner">
        <div class="preloader-icon">
            <span></span>
            <span></span>
        </div>
    </div>
</div> -->
  <!-- End Preloader -->

  <!--Header Start-->
  <the-header></the-header>
  <!--Header End-->

  <!-- Slider Area -->
  <the-slider></the-slider>
  <!--/ End Slider Area -->

  <!-- Start Small Banner  -->
  <section class="small-banner section">
    <div class="container-fluid">
      <div class="row">
        <!-- Single Banner  -->
        <div class="col-lg-4 col-md-6 col-12">
          <div class="single-banner">
            <img
              src="../../public/assets/images/products/category-1.jpg"
              alt="#"
              height="50"
            />
            <div class="content">
              <p>Clothes Collectons</p>
              <h3>
                Clothes <br />
                collection
              </h3>
              <router-link to="/allproducts/Cloths">Discover Now</router-link>
            </div>
          </div>
        </div>
        <!-- /End Single Banner  -->
        <!-- Single Banner  -->
        <div class="col-lg-4 col-md-6 col-12">
          <div class="single-banner">
            <img
              src="../../public/assets/images/products/watch_main.png"
              alt="#"
            />
            <div class="content">
              <p>Watch Collectons</p>
              <h3>
                Awesome Watch <br />
                2020
              </h3>
              <router-link to="/allproducts/Accessories">Shop Now</router-link>
            </div>
          </div>
        </div>
        <!-- /End Single Banner  -->
        <!-- Single Banner  -->
        <div class="col-lg-4 col-12">
          <div class="single-banner tab-height">
            <img
              src="../../public/assets/images/products/mobile-2.jpg"
              alt="#"
            />
            <div class="content">
              <p>Mobile Sale</p>
              <h3>
                Mid Season <br />
                Up to <span>40%</span> Off
              </h3>
              <router-link to="/allproducts//Mobile">Discover Now</router-link>
            </div>
          </div>
        </div>
        <!-- /End Single Banner  -->
      </div>
    </div>
  </section>
  <!-- End Small Banner -->

  <!-- Start Product Area -->
  <div class="product-area section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Trending Item</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="product-info">
            <div class="nav-main">
              <!-- Tab Nav -->

              <!--/ End Tab Nav -->
            </div>
            <div class="tab-content" id="myTabContent">
              <!-- Start Single Tab -->

              <div class="row">
                <div
                  class="col-xl-3 col-lg-4 col-md-4 col-12"
                  v-for="item in list || item in database"
                  :key="item.id"
                >
                  <div class="single-product">
                    <div class="product-img">
                      <router-link
                        :to="{ name: 'productdetail', params: { id: item.id } }"
                      >
                        <img
                          class="default-img"
                          v-bind:src="item.image"
                          alt="#"
                        />
                      </router-link>
                      <div class="button-head">
                        <div class="product-action">
                          <a title="Wishlist" href="#"
                            ><i class="ti-heart"></i
                            ><span>Add to Wishlist</span></a
                          >
                        </div>
                        <div class="product-action-2 mb-2">
                          <h6>Shop</h6>
                        </div>
                      </div>
                    </div>
                    <div class="product-content">
                      <h6>
                        {{ item.title }}
                      </h6>
                      <div class="product-price">
                        <span
                          ><b> ₹ {{ item.price }}</b></span
                        >
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

  <!-- Start Midium Banner  -->
  <section class="midium-banner">
    <div class="container">
      <div class="row">
        <!-- Single Banner  -->
        <div class="col-lg-6 col-md-6 col-12">
          <div class="single-banner">
            <img src="../../public/assets/images/products/men-15.jpg" alt="#" />
            <div class="content">
              <p>Man's Collectons</p>
              <h3>Man's items <br />Up to<span> 50%</span></h3>
              <router-link to="/allproducts/Cloths">Shop Now</router-link>
            </div>
          </div>
        </div>
        <!-- /End Single Banner  -->
        <!-- Single Banner  -->
        <div class="col-lg-6 col-md-6 col-12">
          <div class="single-banner">
            <img
              src="../../public/assets/images/products/category-5.jpg"
              alt="#"
            />
            <div class="content">
              <p>Women Collection</p>
              <h3>
                mid season <br />
                up to <span>70%</span>
              </h3>
              <router-link to="/allproducts/Cloths">Shop Now</router-link>
            </div>
          </div>
        </div>
        <!-- /End Single Banner  -->
      </div>
    </div>
  </section>
  <!-- End Midium Banner -->

  <!-- Start Most Popular -->
  <div class="product-area most-popular section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Hot Item</h2>
          </div>
        </div>
      </div>
      <!-- Start Single Tab -->

      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-4 col-12"
          v-for="item in hotitem"
          :key="item.id"
        >
          <div class="single-product">
            <div class="product-img">
              <router-link to="/productdetail">
                <img class="default-img" v-bind:src="item.image" alt="#" />
              </router-link>
              <div class="button-head">
                <div class="product-action">
                  <a title="Wishlist" href="#"
                    ><i class="ti-heart"></i><span>Add to Wishlist</span></a
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
                <span>
                  <b>₹ {{ item.price }}</b></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--/ End Single Tab -->
      <!-- End Single Product -->
    </div>
  </div>
  <!-- End Most Popular Area -->

  <!-- Start Shop Home List  -->
  <section class="shop-home-list section">
    <div class="container-fluid video_contain">
      <video autoplay muted loop id="myVideo">
        <source
          src="../../public/assets/video/ecom_video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
  <!-- End Shop Home List  -->

  <!-- Start Cowndown Area -->
  <section class="cown-down">
    <div class="section-inner">
      <div class="container-fluid">
        <div class="row" v-for="d in deal" :key="d.id">
          <div class="col-lg-6 col-12 padding-right">
            <div class="image">
              <router-link to="/productdetail">
                <img
                  src="../../public/assets/images/products/apple-laptop.jpg"
                  alt="#"
                />
              </router-link>
            </div>
          </div>

          <div class="col-lg-6 col-12 padding-left">
            <div class="content">
              <div class="heading-block">
                <p class="small-title">Deal of day</p>
                <router-link to="/productdetail">
                  <h3 class="title">{{ d.title }}</h3>
                </router-link>
                <p class="text">
                  {{ d.description }}
                </p>
                <router-link to="/productdetail">
                  <h1 class="price">₹ {{ d.price }} <s> ₹ 112,900.00</s></h1>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /End Cowndown Area -->

  <!-- Start Shop Services Area -->
  <section class="shop-services section home">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-rocket"></i>
            <h4>Free shiping</h4>
            <p>Orders over $100</p>
          </div>
          <!-- End Single Service -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-reload"></i>
            <h4>Free Return</h4>
            <p>Within 30 days returns</p>
          </div>
          <!-- End Single Service -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-lock"></i>
            <h4>Sucure Payment</h4>
            <p>100% secure payment</p>
          </div>
          <!-- End Single Service -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-tag"></i>
            <h4>Best Peice</h4>
            <p>Guaranteed price</p>
          </div>
          <!-- End Single Service -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Shop Services Area -->

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="ti-close" aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row no-gutters">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <!-- Product Slider -->
              <div class="product-gallery">
                <div class="quickview-slider-active">
                  <div class="single-slider">
                    <img
                      src="../../public/assets/images/products/cat-1.jpg"
                      alt="#"
                    />
                  </div>
                  <div class="single-slider">
                    <img
                      src="../../public/assets/images/products/westerntop.jpg"
                      alt="#"
                    />
                  </div>
                  <div class="single-slider">
                    <img
                      src="../../public/assets/images/products/cat-1.jpg"
                      alt="#"
                    />
                  </div>
                  <div class="single-slider">
                    <img
                      src="../../public/assets/images/products/cat-1.jpg"
                      alt="#"
                    />
                  </div>
                </div>
              </div>
              <!-- End Product slider -->
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="quickview-content">
                <h2>Flared Shift Dress</h2>
                <div class="quickview-ratting-review">
                  <div class="quickview-ratting-wrap">
                    <div class="quickview-ratting">
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="quickview-stock">
                    <span><i class="fa fa-check-circle-o"></i> in stock</span>
                  </div>
                </div>
                <h3>$29.00</h3>
                <div class="quickview-peragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia iste laborum ad impedit pariatur esse optio tempora
                    sint ullam autem deleniti nam in quos qui nemo ipsum
                    numquam.
                  </p>
                </div>
                <!-- <div class="add-to-cart">
                  <a href="#" class="btn">Add to cart</a>
                  <a href="#" class="btn min"><i class="ti-heart"></i></a>
                  <a href="#" class="btn min"><i class="fa fa-compress"></i></a>
                </div> -->
                <!-- <div class="default-social">
                 <div class="add-to-cart">
                  <a href="#" class="btn">Add to cart</a>
                </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal end -->

  <!-- Start Footer Area -->
  <the-footer></the-footer>
  <!-- /End Footer Area -->
</template>

<script>
// import axios from "axios"; //fetch data

import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import TheSlider from "./Slider.vue";
// import Mobile from './category/Mobile.vue';

export default {
  components: { TheHeader, TheFooter, TheSlider },
  name: "Home",
  data() {
    return {
      database: null,
      list: [],
      hotitem: [],
      deal: [],
    };
  },
  methods: {
    async getDatabase() {
      return new Promise((resolve, reject) => {
        if (this.database) {
          resolve(this.database);
        }
        let request = window.indexedDB.open("estoreDB", 1);
        request.onerror = (event) => {
          console.error("ERROR: unable to open database", event);
          reject("ERROR");
        };
        request.onsuccess = (event) => {
          this.database = event.target.result;
          resolve(this.database);
        };

        request.onupgradeneeded = (event) => {
          let database = event.target.result;
          database.createObjectStore("estore", {
            autoIncrement: true,
            keyPath: "id",
          });
        };
      });
    },
    async getEstore() {
      this.database = await this.getDatabase();

      return new Promise((resolve, reject) => {
        const transaction = this.database.transaction("estore", "readonly");
        const store = transaction.objectStore("estore");

        let estoreData = [];
        store.openCurser().onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            estoreData.push(cursor.value);
            cursor.continue();
          }
        };
        transaction.oncomplete = () => {
          resolve(estoreData);
        };
        transaction.onerror = (event) => {
          reject(event);
        };
      });
    },
    async created() {
      this.estore = this.getEstore;
    },
    async saveEstore(estore) {
      this.database = await this.getDatabase();

      return new Promise((resolve, reject) => {
        const transaction = this.database.transaction("estore", "readwrite");
        const store = transaction.objectStore("estore");

        store.put(estore);
        transaction.oncomplete = () => {
          resolve("item save");
        };

        transaction.onerror = (event) => {
          reject(event);
        };
        console.log(this.database+ " hello")
      });
      
    },
    loadMob() {
      fetch("https://bb60e7d4-34be-42ed-857a-8a58c96a3868.mock.pstmn.io/categories")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          // let len = length.data ;
          for (let i in data) {
            if (data[i].id <= 8) {
              this.list.push(data[i]);
              this.saveEstore(data[i])
            }
          }
        });
    },
    loaddeal() {
      fetch("https://bb60e7d4-34be-42ed-857a-8a58c96a3868.mock.pstmn.io/categorie/?")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          // let len = length.data ;
          for (let i in data) {
            if (data[i].id === 3) {
              this.deal.push(data[i]);
            }
          }
        });
    },
    loadHotitem() {
      fetch("https://bb60e7d4-34be-42ed-857a-8a58c96a3868.mock.pstmn.io/categorie/?")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          //

          for (let j in data) {
            if (data[j].category === "Cloths" && data[j].id < 18) {
              this.hotitem.push(data[j]);

              console.log(data[j]);
            }
          }
          console.log(this.mobile);
        });
    },
  },

  mounted() {
    // await axios
    //   .get("https://9e1f8a98-a440-4b20-9455-b1662ca5a2a5.mock.pstmn.io")
    //   .then((response) => (this.list = response.data));

    this.loadMob(), this.loadHotitem(), this.loaddeal(), this.getDatabase();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.video_contain {
  position: relative;
  top: 0;
  left: 0;
}

Video {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  border-radius: 10px;
}
/* .single-slider{
    background-image: url('../../public/assets/images/8.jpg');
} */
</style>