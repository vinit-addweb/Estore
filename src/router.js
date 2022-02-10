import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import TheSlider from "./pages/Slider.vue";
import AboutUs from './pages/AboutUs.vue'
import ContactUs from './pages/ContactUs.vue'
import AddToCart from './pages/AddToCart.vue'
import Checkout from './pages/Checkout.vue'
import AllProducts from './pages/AllProducts.vue'
import BreadCrumb from './pages/BreadCrumb.vue'
import Search from '@/components/layouts/Search.vue';
import Login from './pages/Login.vue';
import Mobile from './pages/category/Mobile.vue';
import Cloths from './pages/category/Cloths.vue';
import Electronics from './pages/category/Electronics.vue';
import Accessories from './pages/category/Accessories.vue';


// import "bootstrap/dist/js/bootstrap.min.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/productdetail/:id",name: 'productdetail', component: ProductDetail,props:true },
    { path: "/slider", component: TheSlider },
    {path:'/aboutus',component:AboutUs},
    {path:'/contactus',component:ContactUs},
    {path:'/cart',component:AddToCart},
    {path:'/checkout',component:Checkout},
    {path:'/allproducts',component:AllProducts,children:[
      {path:'/allproducts/Mobile',component:Mobile},
      {path:'/allproducts/Cloths',component:Cloths},
      {path:'/allproducts/Electronics',component:Electronics},
    {path:'/allproducts/Accessories',component:Accessories}]},
    {path:'/breadcrumb',component:BreadCrumb},
    {path:'/Search/:id',name:'Search',component:Search,props:true},
    {path:'/Login',component:Login},


  ],
});

export default router;

