<template>
  <q-page padding>


      <q-card class="q-mt-xl col-auto app-login center">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey "
          active-color="primary"
          indicator-color="primary"
          align="center"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels  v-model="tab" animated swipeable  transition-prev="fade" transition-next="fade">
          <q-tab-panel name="login">
            <q-card-section>
              <form @submit.prevent="onSubmitLogin">
                <div class="row">

                  <q-input outlined ref="email"  v-model="formDataLogin.email"  type="email" :rules="[ val => val && val.length > 0 || 'Please type something']" class="full-width " label="Email" />

                  <q-input ref="password" v-model="formDataLogin.password" filled :type="isPwd ? 'password' : 'text'" label="Password" class="full-width "  outlined>

                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>

                  </q-input>

                  <div class="col-12 text-center q-mt-md ">

                    <q-btn :loading="loading" @click="loading=true"  color="primary center" type="submit"  label="Login" />

                  </div>

                </div>
              </form>
            </q-card-section>

          </q-tab-panel>

          <q-tab-panel name="register">
            <q-card-section>
              <form @submit.prevent="onSubmitReg">
                <div class="row">

                  <q-input outlined ref="name"  v-model="formDataRegister.name" :rules="[ val => val && val.length > 0 || 'Please type something']" type="text" class="full-width " label="Name" />
                  <q-input outlined ref="email"  v-model="formDataRegister.email" :rules="[ val => val && val.length > 0 || 'Please type something']" type="email" class="full-width " label="Email" />

                  <q-input ref="password" v-model="formDataRegister.password" filled :type="isPwd ? 'password' : 'text'" label="Password" class="full-width "  outlined>

                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>

                  </q-input>

                  <div class="col-12 text-center q-mt-md ">

                    <q-btn :loading="loading" @click="loading=true" color="primary q-mt-md center" type="submit"  label="Register " />

                  </div>

                </div>
              </form>
            </q-card-section>


          </q-tab-panel>

        </q-tab-panels>

        <q-card-section v-if="getErrors.length>0" >

          <q-banner inline-actions rounded class="bg-orange text-white">
            <div v-for="error in getErrors">
              {{error}}
            </div>

            <template v-slot:action>

              <q-btn flat icon="highlight_off" @click="clearErrorMessage" />
            </template>
          </q-banner>
        </q-card-section>
      </q-card>




  </q-page>
</template>
<script>
  import {mapActions, mapGetters, mapState} from 'vuex';
  export default {

    // name: 'ComponentName',
    data () {
      return {
        isPwd: true,
        loading: false,
        tab: 'login',
        formDataLogin :
          {
            email : 'harry@email.com',
            password : '123456',

          },
        formDataRegister :
          {
            name : '',
            email : '',
            mobile : '',
          },
      }
    },
    methods:{
      ...mapActions('LedgerStore',['registerUser','loginUser','clearErrorMessage']),
      closeModal(){
        this.$emit('updated',true)
      },
      onSubmitLogin(){

        this.loading = true;

        if(!this.$refs.password.hasError && !this.$refs.email.hasError){
          this.$emit('updated',true)
          if(this.formDataLogin.email!=''){
            let response = this.loginUser(this.formDataLogin);
          }

        }

      },

      onSubmitReg(){

        if(!this.$refs.password.hasError && !this.$refs.email.hasError && !this.$refs.name.hasError){
          this.$emit('updated',true)
          this.loading = true;
          if(this.formDataRegister.email!=''){
            this.registerUser(this.formDataRegister);
          }

          setTimeout(() => {
            // we're done, we reset loading state
            this.loading = false
          }, 800)

        }


      }


    },
    computed:{
      ...mapGetters('LedgerStore', ['getErrors']),
      ...mapState('LedgerStore',['userDetails']),

    },
    watch:{
      userDetails:function(newValue, oldValue) {
          console.log(newValue);
          console.log(oldValue);

        if (this.userDetails.userId){
          this.$router.push('/')
        }else{
          console.log('ten')
        }

        }
    },
    mounted() {
      if (this.userDetails.userId){
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .app-login{
    max-width: 600px;
    margin: 50px auto;
  }
</style>

