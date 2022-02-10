<template>
  <header>
    <nav>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
                 <router-link to="/allproducts">All products</router-link>
                 
                </li>
                <li class="nav-item">
                 <router-link to="/allproducts/Accessories">Accessories</router-link>
                
                </li>
                <li class="nav-item">
                   <router-link to="/allproducts/Cloths">Cloths</router-link>
                </li>
                <li class="nav-item">
                   <router-link to="/allproducts/Electronics">Electronics</router-link>
                </li>
                <li class="nav-item">
                 <router-link to="/allproducts/Mobile">Mobiles</router-link>
                
                </li>
                
              </ul>
    </nav>
  </header>
</template>

<style scoped>

ul{
  margin-bottom: 100px;
  margin-top:50px ;
}
</style>