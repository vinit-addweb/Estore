<template>
  <the-header></the-header>

  <!-- Shop Cart Section Begin -->
  <section class="shop-cart spad">
    <div class="container" v-if="cartTotal > 0">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="totaldiv">Total Amount: Rs. {{ cartTotal }}</h3>
          <div class="shop__cart__table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <td>
                    <img :src="item.image" width="100" height="100" alt="" />
                  </td>
                  <td class="cart__product__item">
                    <div class="cart__product__item__title">
                      <h6>{{ item.title }}</h6>
                    </div>
                  </td>
                  <td class="cart__price">
                    <!-- <i class="fa fa-inr" aria-hidden="true"></i> -->
                    Rs. {{ item.price * item.qty }}  
                  </td>
                  <td class="cart__price">{{ item.qty }}</td>
                  <td class="cart__close">
                    <button @click="remove" class="icon_close">
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="cart__btn">
            <router-link to="/home">Continue Shopping</router-link>
            <base-model @close="hideDialog" :open="dialogIsVisible">
              <i class="fa fa-check" aria-hidden="true"></i>
              <h4>Your Order Has Been Placed...<br />Thank You!!</h4>
              <button @click="hideDialog">Ok</button>
            </base-model>
            <button @click="showDialog">Checkout</button>
            <!-- <router-link to="/checkout">Proceed to checkout</router-link> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container emptycart" v-else>
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <h3>Your Cart Is Empty...</h3>
      <router-link to="/home">
        <h5>Lets start shopping with us..Hurry up!!!!</h5>
      </router-link>
    </div>
  </section>

  <!-- Shop Cart Section End -->
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import BaseModel from "../components/layouts/BaseModal.vue";

export default {
  components: { TheHeader, TheFooter, BaseModel },
  name: "Home",
  data() {
    return {
      dialogIsVisible: false,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.getProductsInCart;
    },
    cartTotal() {
      return this.$store.getters.totalSum;
    },
  },
  methods: {
    remove() {
      this.$store.dispatch("removeFromCart", { productId: this.prodId });
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
  // mounted() {
  //   return this.$store.getters.getProductsInCart;
  // },
};
</script>

<style scoped>
/*---------------------
  Shop Cart
-----------------------*/
.totaldiv {
  color: #333;
}

.emptycart i {
  font-size: 150px;
  border: 10px solid #333;
  border-radius: 50%;
  padding: 50px;
  color: #f6931d;
}

.emptycart h3 {
  color: red;
  margin-top: 10px;
}

.emptycart h5 {
  color: #f6931d;
}

.shop-cart {
  padding-top: 30px;
  padding-bottom: 90px;
}

.shop__cart__table {
  margin-bottom: 30px;
}

.shop__cart__table table {
  width: 100%;
}

.shop__cart__table thead {
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
  background-color: #f6931d;
}

.shop__cart__table thead th {
  font-size: 18px;
  color: #2c3e50;
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 20px;
  padding-top: 20px;
}

.shop__cart__table tbody tr {
  border-bottom: 1px solid #f2f2f2;
}

.shop__cart__table tbody tr td {
  padding: 10px 0;
}

.shop__cart__table tbody tr .cart__product__item {
  overflow: hidden;
  width: 585px;
}

.shop__cart__table tbody tr .cart__product__item img {
  float: left;
  margin-right: 25px;
}

.shop__cart__table tbody tr .cart__product__item .cart__product__item__title {
  overflow: hidden;
  padding-top: 23px;
}

.shop__cart__table
  tbody
  tr
  .cart__product__item
  .cart__product__item__title
  h6 {
  color: #111111;
  font-weight: 600;
}

.shop__cart__table tbody tr .cart__price {
  font-size: 16px;
  color: #ca1515;
  font-weight: 600;
  width: 190px;
}

.shop__cart__table tbody tr .cart__total {
  font-size: 16px;
  color: #ca1515;
  font-weight: 600;
  width: 150px;
}

.shop__cart__table tbody tr .cart__close {
  text-align: right;
}

.shop__cart__table tbody tr .cart__close button {
  height: 45px;
  width: 45px;
  background: #f2f2f2;
  border-radius: 50%;
  font-size: 18px;
  color: #111111;
  line-height: 44px;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
}

.cart__btn {
  margin-bottom: 50px;
}

.cart__btn.update__btn {
  text-align: right;
}

.cart__btn a {
  font-size: 14px;
  color: #111111;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  padding: 14px 30px 12px;
  background: #f5f5f5;
  background-color: #f6931d;
  border-radius: 5px;
  margin-right: 20px;
}

.cart__btn i {
  font-size: 75px;
  border: 5px solid #f6931d;
  background: #f5f5f5;
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 10px;
}

.cart__btn button {
  font-size: 14px;
  color: #111111;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  padding: 14px 30px 12px;
  background: #f5f5f5;
  background-color: #f6931d;
  border-radius: 5px;
  margin-right: 20px;
  padding: 16px 65px;
}

.cart__btn a span {
  color: #ca1515;
  font-size: 14px;
  margin-right: 5px;
}

.cart__btn h4 {
  border-bottom: 2px solid #f6931d;
  /* background: #333; */
  color: #333;
  /* border-radius: 15px; */
  margin: 10px 0;
  padding: 5px 0;
}
.discount__content h6 {
  color: #111111;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin-right: 30px;
}

.discount__content form {
  position: relative;
  width: 370px;
  display: inline-block;
}

.discount__content form input {
  height: 52px;
  width: 100%;
  border: 1px solid #444444;
  border-radius: 50px;
  padding-left: 30px;
  padding-right: 115px;
  font-size: 14px;
  color: #444444;
}

.discount__content form input::-webkit-input-placeholder {
  color: #444444;
}

.discount__content form input::-moz-placeholder {
  color: #444444;
}

.discount__content form input:-ms-input-placeholder {
  color: #444444;
}

.discount__content form input::-ms-input-placeholder {
  color: #444444;
}

.discount__content form input::placeholder {
  color: #444444;
}

.discount__content form button {
  position: absolute;
  right: 4px;
  top: 4px;
}

.cart__total__procced {
  background: #f5f5f5;
  padding: 40px;
}

.cart__total__procced h6 {
  color: #111111;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.cart__total__procced ul {
  margin-bottom: 25px;
}

.cart__total__procced ul li {
  list-style: none;
  font-size: 16px;
  color: #111111;
  font-weight: 600;
  overflow: hidden;
  line-height: 40px;
}

.cart__total__procced ul li span {
  color: #ca1515;
  float: right;
}

.cart__total__procced .primary-btn {
  display: block;
  border-radius: 50px;
  text-align: center;
  padding: 12px 0 10px;
}
</style>
