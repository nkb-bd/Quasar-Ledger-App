<template>
  <q-card   class="my-card  full-width q-pa-md" flat bordered  style="min-height:380px;">
        <div  class="row ">
          <div class="col-10">

          </div>
          <div class="col-2 ">
            <span class="pull-right block">
                  <q-btn flat round size="10px" icon="close" @click="closeModal" class="  pull-right" />
            </span>
          </div>
        </div v->

        <q-card-section   v-if="showData" >
      <form  @submit.prevent="onSubmit">
      <div  class="row">

        <div class="col-12">
          <q-card-section  class="bg-accent rounded-borders">
            <div class="text-h6 text-center text-white">Sum Total : {{sum}}</div>
          </q-card-section>

          <q-card-actions align="around">
            <div flat>Total In  {{total_in}}</div>
            <div flat>Total Out {{total_out}}</div>
          </q-card-actions>
        </div>
          <div class="col-6 no-padding">
            <q-input
              v-model="formData.in"
              debounce="500"
              filled
              label="In"
              type="number"
              min="0"
              hint=""
              class="q-pa-sm"
              ref="in"
              :rules="[
                  val => val > -1 && val !== ''|| 'Invalid number'
                ]"
            >
            </q-input>

          </div>
          <div class="col-6">
            <q-input
              v-model="formData.out"
              debounce="500"
              ref="out"
              filled
              label="Out"
              type="number"
              min="0"
              hint=""
              :rules="[
                  val => val > -1 && val !== ''|| 'Invalid number'
                ]"
              class="q-pa-sm"
            >
            </q-input>

          </div>
           <div class="col-12 text-center q-mt-md ">


          <q-btn unelevated  type="sunmit" color="primary center" class="q-mt-lg" label="Submit" />



        </div>

      </div>
      </form>





    </q-card-section>
        <q-inner-loading :showing="visible">
          <q-spinner-puff size="50px" color="primary" />
        </q-inner-loading>
    <h6 class="text-center q-pa-none q-mt-md q-mb-sm"> {{test2}}</h6>
  </q-card>




</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import {Loading, Notify, QSpinnerPuff} from "quasar";



  export default {
    name: 'Record',
    props:['id'],
    data () {
     return {
       visible:'',
       showData:false,
        test:0,
        item_in:0,
        total_in:0,
        total_out:0,
        sum:0,
        formData :
          {
            in : 0,
            out : 0,
            businessId : this.id,
            created:Date.now()
          },
    }
  },

  methods:{

    ...mapActions('LedgerStore',['firebaseAddRecord','firebaseGetRecordList','firebaseStopGettingRecordList']),

    onSubmit(){
      if (this.$refs.out.hasError || this.$refs.in.hasError) {
        console.log(parseInt(this.formData.in))
        console.log('has error')
        Notify.create({
          type: 'warning',
          message: 'Invalid number'
        })

      }else{

        this.formData.in = parseInt(this.formData.in)
        this.formData.out = parseInt(this.formData.out)
        this.firebaseAddRecord(this.formData);

        this.closeModal()

      }
    },
    closeModal(){
      this.$emit('closeModal',1)
      this.firebaseStopGettingRecordList()

    },
    showLoading () {
      this.visible = true
      this.showData = false
      setTimeout(() => {
        this.visible = false
        this.showData = true

      }, 800)
    }

  },
  computed:{
    ...mapGetters('LedgerStore', ['recordListGetter']),

    formattedRecorData(){
      this.firebaseGetRecordList({
        businessId: this.id
      })
    },
    test2(){
      this.showLoading()
      let total_in = 0
      let out = 0
      Object.keys(this.recordListGetter).forEach( key => {

        // let businessName = this.$store.state.LedgerStore.businessList[bkey].name,
        total_in += parseInt(this.recordListGetter[key].in)
        out += parseInt(this.recordListGetter[key].out)
        let bkey = this.recordListGetter[key].businessId

      })
      this.total_in = total_in;
      this.total_out = out;
      this.sum = total_in - out;
      console.log(this.loading)
      return this.$store.state.LedgerStore.businessList[this.id].name
    }
  },
    mounted() {
      this.firebaseStopGettingRecordList()
      this.formattedRecorData
      setTimeout(()=>{
      }, 500)
      this.loading = false


    },
    watch: {
      id: function(newVal, oldVal) { // watch it
      },
    },

  }
</script>
<style >
  .pull-right{
    float: right;
  }
  .my-card{

  }
  .my-width{
    min-width:  100vw;
  }
  .center{
    margin:0px auto;
  }
</style>
