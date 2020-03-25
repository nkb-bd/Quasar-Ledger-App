<template>
  <q-slide-transition  transition-show="slide-in " appear>

  <q-page class="q-pa-md" >

    <!-- business list -->
    <div class="row">

      <!--      add business-->
      <div class="col-6 q-pa-sm">
        <q-card class="my-card add-new   text-center col-6"  v-ripple  @click="showAddBusinessModal = true">
          <q-card-section>
            <div class="text-h6"> New Item </div>
          </q-card-section class="text-center">
          <div class=" center" >
            <q-btn flat round size="18px" color="" icon="add_circle_outline" class="inline " />


          </div>

          <q-card-section>
            &nbsp
          </q-card-section>

          <q-separator dark />

          <div class="q-pa-sm ">

          </div>
        </q-card>
      </div>
      <!--      card start-->

      <div class="col-6 q-pa-sm"  v-for="(business,key) in businessList" :key="business.businessId">
        <q-card class="my-card bg-primary text-center text-white "  v-ripple  @click="addRecord(key)">
          <q-card-section>
            <div class="text-h6">{{business.name}}</div>
          </q-card-section>

          <q-card-section>
            <div class="row">


              <div class="col text-center">
                <q-btn v-if="business.mobile!=''" flat round size="7px" icon="phone" class="inline " />

                {{business.mobile}}
              </div>
            </div>

          </q-card-section>

          <q-separator dark />

          <div class="q-pa-sm ">

            <div class=" center" >
              <i class="block fa fa-xs fa-plus-circle "></i>
            </div>

          </div>
        </q-card>
      </div>
      <!--      card end-->


      <q-dialog v-model="showRecordModal" persistent>
          <Record @closeModal="closeModal()" :key="businessId" :id="this.businessId"/>
      </q-dialog>

      <!--      add busniess-->
      <q-dialog v-model="showAddBusinessModal">
          <Business  @updated="refresh"/>
      </q-dialog>



    </div>
  </q-page>
  </q-slide-transition>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'BusinessList',
  data(){
    return{
      drawer:'',
      businessId: '',
      drawerR:'',
      visible: true,
      layout: false,
      tasks:[],
      showRecordModal: false,
      showAddBusinessModal: false
    }
  },
  methods :{
    ...mapActions('LedgerStore',['firebaseGetRecordList','firebaseStopGettingRecordList']),

    closeModal(){
      this.showRecordModal = false;
      this.firebaseStopGettingRecordList()
    },
    refresh(){
      this.showAddBusinessModal = false;
    },
    addRecord(id){
      this.showRecordModal =true;
      this.businessId =id;
      this.firebaseGetRecordList({
        businessId: id
      })
    }
  },
  computed:{

    businessList (){

      return this.$store.getters['LedgerStore/businessListGetter'];
    }
  },
  components: {
    Record: () => import('../components/Record'),
    Business: ()=> import('../components/Business')
  },
  mounted() {

  }

}
</script>
<style>
.center{
  text-align: center;
}
  .add-new{
    min-height: 130px;
    max-height: 136px;
  }
</style>
