<template>

<the-header></the-header>
<!-- <router-view>   </router-view> -->
  <div class="login">
    <!-- Modal -->
    
     <div class="login-form">
    <!-- <div
      class="modal fade modal-dialog-centered "
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" >
        <div class="modal-content">
          <div class="modal-header">
          
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            
          </div> -->

          <navigation></navigation> 
          
           <div class="modal-body signin_modal">
               <div class="tab-content signin_tab" id="myTabContent"> 

                  <!-- tabs -->
          <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="home" aria-selected="true">Sign In</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="profile" aria-selected="false">Sign Up</a>
  </li>
  
</ul>

  
          <!-- tabs ends -->
  <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="home-tab">
  <!-- form starts -->
              <form @submit.prevent="validation">
                <h4 class="text-center">Sign in</h4>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"
                      ><i class="fa fa-user"></i
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      placeholder="Username"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"
                      ><i class="fa fa-lock"></i
                    ></span>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="Password"
                      required="required"
                      v-model="pass"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary login-btn btn-block"
                  >
                    Sign in
                  </button>
                </div>
                <div class="clearfix">
                  <label class="pull-left checkbox-inline"
                    ><input type="checkbox" /> Remember me</label
                  >
                  <a href="#" class="pull-right">Forgot Password?</a>
                </div>
                <div class="or-seperator"><i>or</i></div>
                <p class="text-center">Login with your social media account</p>
                <div class="text-center social-btn">
                  <a href="#" class="btn btn-primary text-dark"
                    ><i class="fa fa-google"></i>&nbsp; Google</a
                  >
                </div>
              </form>
          <!-- form ends -->

  </div>
  <!-- sign up page start -->
                <div
                  class="tab-pane fade"
                  id="signup"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  
                    <!-- <div class="signup-form"> -->
                      <form
                        action="/examples/actions/confirmation.php"
                        method="post"
                      >
                        <h4>Sign Up</h4>
                        <p>Please fill in this form to create an account!</p>
                        <hr />
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon"
                              ><i class="fa fa-user"></i
                            ></span>
                            <input
                              type="text"
                              class="form-control"
                              name="username"
                              placeholder="Username"
                              required="required"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon"
                              ><i class="fa fa-paper-plane"></i
                            ></span>
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              placeholder="Email Address"
                              required="required"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon"
                              ><i class="fa fa-lock"></i
                            ></span>
                            <input
                              type="text"
                              class="form-control"
                              name="password"
                              placeholder="Password"
                              required="required"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="fa fa-lock"></i>
                              <i class="fa fa-check"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control"
                              name="confirm_password"
                              placeholder="Confirm Password"
                              required="required"
                            />
                          </div>
                        </div>
                        <!-- <div class="form-group">
                          <label class="checkbox-inline"
                            ><input type="checkbox" required="required" /> I
                            accept the <a href="#">Terms of Use</a> &amp;
                            <a href="#">Privacy Policy</a></label
                          >
                        </div> -->
                        <div class="form-group">
                      <button
                        type="submit"
                        class="btn btn-primary login-btn btn-block"
                      >
                        Sign Up
                      </button>
                    </div>
                        <!-- <div class="form-group">
                          <button type="submit" class="btn btn-primary btn-lg">
                            Sign Up
                          </button>
                          
                        </div> -->
                      </form>
                      <!-- <div class="text-center">
                        Already have an account? <a href="#">Login here</a>
                      </div> -->
                    <!-- </div> -->
                  
                </div>
                <!-- sign up page ends -->
          
              <!-- <p class="text-center text-muted small">
                Don't have an account? <a href="#">Sign up here!</a>
              </p> -->
           </div>
       
            </div>
          </div>
  </div>
      <!-- </div>
        </div>
      </div>
    </div> -->
  <the-footer></the-footer>
</template>
<script>
// import Navigation from './Navigation.vue';
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
export default {
  name: "Login",
  components:{
    TheHeader,TheFooter
  },
  data(){
    return{
       email:'',
       pass:''
    }

  },
  // props: {
  //   msg: String,
  // },
  
  
  computed: {
    users() {
       
      return this.$store.state.users;
    },
  },
  methods:{
    validation(){
      fetch("https://afac9c0b-7fa3-40d8-9ccd-50e74f9e56e4.mock.pstmn.io").then(response => {
        if(response.ok){
            return response.json();
        }
      }).then(data=>{
        for(const rid in data){
          if(data[rid].email === this.email && data[rid].pass === this.pass){
            this.$store.dispatch('login')
            setTimeout(()=>{
              this.$router.push('/home')
            },100)
          }
        }
      }) 
    }
  },
  mounted() {
    this.$store.dispatch("getuser");
  },
};
</script>

<style  scoped>
.login-form {
  width: 50%;
  margin: 30px auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.login-btn {
  min-height: 38px;
  border-radius: 2px;
}
.input-group-addon .fa {
  font-size: 18px;
}
.login-btn {
  font-size: 15px;
  font-weight: bold;
}
.social-btn .btn {
  border: none;
  margin: 10px 3px 0;
  opacity: 1;
}
.social-btn .btn:hover {
  opacity: 0.9;
}
.social-btn .btn-primary {
  background: #507cc0;
}
.social-btn .btn-info {
  background: #64ccf1;
}
.social-btn .btn-danger {
  background: #df4930;
}
.or-seperator {
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #ccc;
}
.or-seperator i {
  padding: 0 10px;
  background: #f7f7f7;
  position: relative;
  top: -11px;
  z-index: 1;
}

.signin_modal .nav-tabs .nav-link {
  background-color: #e5e5e5;
  border-radius: 0;
  font-weight: 600;
  border-color: #fff;
}
.signin_modal .nav-tabs .nav-link.active {
  background-color: #fff;
}

.signin_modal .nav-tabs .nav-item {
  text-align: center;
  width: 50%;
  margin-bottom: 2rem;
}
.signin_modal .nav-tabs {
  border-bottom: none;
}
.signin_tab {
  padding: 0 3rem;
}
.signin_tab input.form-control {
  font-size: 12px;
  color: #8c8c8c;
}
</style> 