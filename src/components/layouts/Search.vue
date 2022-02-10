<template>
<the-header></the-header>
    <section>
        <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Search results....</h2>
          </div>    
        </div>
      </div>
        <!-- <button @click="loadMob">click</button> -->
      <!-- Start Single Tab -->
              <div class="tab-pane fade show active" id="man" role="tabpanel">
                <div class="tab-single">
                  <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-4 col-12" v-for="item in Acc" :key="item.id">
                      <div class="single-product">
                        <div class="product-img">
                          <router-link :to="{name:'productdetail',params:{id:item.id}}">
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
                            <div class="product-action-2">
                              <a title="Add to cart" href="#">Add to cart</a>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3><a href="#">{{item.title}}</a></h3>
                          <div class="product-price">
                            <span> <b>₹ {{item.price}}</b></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <!--/ End Single Tab -->

    </section>
    <the-footer></the-footer>
</template>

<style scoped>
.section-title{
    margin-top: 10px;
}
</style>

<script>
import TheHeader from "./TheHeader.vue";

import TheFooter from './TheFooter.vue';
export default {
    name:"search",
    components:{TheHeader,TheFooter},
    data(){
        return{
          id:this.$route.params.id,
           Acc:[],
           search:''
        }
    },
    
    
     mounted()
    {
   
     
   
    //  showResult()
    //  {
         this.Acc=[];
       fetch("https://bb60e7d4-34be-42ed-857a-8a58c96a3868.mock.pstmn.io/categories")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then( (data) => {  
          // 
        
          for (let j in data) {
               let d = data[j].description 

               const word = new RegExp(this.id,'i');
               

               const index = d.search(word);
  
               
            if ( index >-1 )   {
               this.Acc.push(data[j]);
              // || data[j].description == this.id || data[j].title == this.id
              console.log(data[j])  
              
            
            
            }
          }
           
          
        });
  
    //  }
    console.log(this.Acc)
    }
}

</script>