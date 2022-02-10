<template>
    <section>
        <!--Header Start-->
            <the-header></the-header>
        <!--Header End-->
        <bread-crumb></bread-crumb>
        <section>
             <div class="container">
               <div class="about-section">
                <h1 class="text">About Us</h1>
                <p>Showing your personal and human side is extremely powerful when it comes to building trust with potential customers. Storytelling, if done right, has the power to deeply connect with your audience while instantly creating a level of trust and empathy. Don’t hesitate to talk about your humble beginnings and why you do what you do.

For example, you’ve been traveling around Asia and were shocked by the amount of plastic waste on the beaches that, on social media, remind of a paradise. You’ve decided to create a line of environment-friendly products such as reusable water bottles, bamboo straws, etc.

The honest story won’t only create a deeper connection with potential customers, but also show them your values and the human side of your brand.

</p>
                </div>

                <h2 style="text-align:center">Our Team</h2>
                <div class="row">
                <div class="column">
                    <div class="card">
                    <!-- <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Jane" style="width:100%"> -->
                    <div class="container">
                        <h2>Vinit</h2>
                        <!-- <p class="title">CEO & Founder</p> -->
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>vinit@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <!-- <img src="https://fakestoreapi.c" alt="Mike" style="width:100%"> -->
                    <div class="container">
                        <h2>Avni</h2>
                        <!-- <p class="title">Art Director</p> -->
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>avni@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <div class="container">
                        <h2>Devarsh</h2>
                        <!-- <p class="title">Designer</p> -->
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>devarsh@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                </div> 
             </div>
        </section>

        <!--Footer Start-->
            <the-footer></the-footer>
        <!--Footer End-->
    </section>
</template>



<script>

import axios from "axios" //fetch data 
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import BreadCrumb from '../pages/BreadCrumb.vue'

export default {
  components: { TheHeader, TheFooter,BreadCrumb },
  name:'ProductDetail',
    data()
    {
      return{
        list:[]
      }
    },
    async mounted()
    {
      await axios.get("https://9e1f8a98-a440-4b20-9455-b1662ca5a2a5.mock.pstmn.io")
      .then((response) =>
        this.list=response.data
      );
      
      
    }
};
</script>

 
<style scoped>

.text{
    color: black;
}
   
*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #ffffff;
  color: white;
}

.about-section p{
  font-weight: bold;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: rgb(148, 138, 138);
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

</style>
