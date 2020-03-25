<template>
  <div>
    <q-card class="my-card full-width q-pa-md" flat bordered >
      <div class="row ">
        <div class="col-10">
          <div class="text-h6 q-mt-xs q-mb-xs">
            Add Business
          </div>
        </div>
        <div class="col-2 ">
            <span class="pull-right block">
                  <q-btn flat round size="10px" icon="close" @click="closeModal" class="  pull-right" />
            </span>
        </div>
      </div>
      <q-separator />

      <q-card-section>
        <form @submit.prevent="onSubmit">
        <div class="row">

          <q-input outlined ref="name" autofocus v-model="formData.name" :rules="[ val => val && val.length > 0 || 'Please type something']" type="text" class="full-width " label="Business Name" />
          <q-input outlined ref="owner" v-model="formData.owner" :rules="[ val => val && val.length > 0 || 'Please type something']" type="text" class="full-width " label="Owner Name" />
          <q-input outlined ref="mobile" v-model="formData.mobile" :rules="[ val => val && val.length > 0 || 'Please type something']" type="number" class="full-width " label="Owner Mobile" />

          <div class="col-12 text-center ">

            <q-btn  color="accent center" type="submit"  label="Save" />

          </div>

        </div>
        </form>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {

  // name: 'ComponentName',
  data () {
    return {

      formData :
        {
          name : '',
          mobile : '',
          owner : '',
        }
    }
  },
  methods:{

    ...mapActions('LedgerStore',['firebaseAddBusiness']),
    closeModal(){
      this.$emit('updated',true)
    },
    onSubmit(){

      if(!this.$refs.name.hasError && !this.$refs.owner.hasError && !this.$refs.mobile.hasError ){
          this.firebaseAddBusiness(this.formData);

        this.$emit('updated',true)
      }
    }
  },
    mounted() {

    }
  }
</script>
