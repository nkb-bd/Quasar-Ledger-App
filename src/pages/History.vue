<template>
  <div class="q-pa-md" >
    <div v-if="showList">
      <p>Select</p>

      <q-list  bordered separator>
        <q-item v-for="(b, key) in businessList" :key="b.businessId" clickable v-ripple @click="showTable(key)">
          <q-item-section>
            <q-item-label>{{b.name}}</q-item-label>
            <q-item-label caption>{{b.owner}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </div>


    <div  v-if="visibleTable">
      <q-btn
        flat
        class="bg-blue-grey-1 q-mt-md"
        label="Back"
        @click="hideTable()"
     />
      <q-input outlined  class="q-mb-sm q-mt-sm"  dense debounce="300" v-model="filter" clear-icon="close" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>


      <q-list  bordered separator>

        <q-item >
          <q-item-section>
            <q-item-label >Name</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label caption> In</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>Out</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>Date</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-for="(b, key) in this.recordListGetter" :key="key" clickable v-ripple @click="showTable(key)">
          <q-item-section>
            <q-item-label >{{businessList[b.businessId].name}}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>{{b.in}}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>{{b.out}}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>{{ b.created  }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-table>


     Total : {{getRowsNumberCount}}
    </div>


  </div>
</template>
<script>
  import { mapActions , mapGetters } from 'vuex'
  import {date} from "quasar";

  export default {
    data () {
      return {
        showList :true,
        visibleTable :false,
        filter: '',
        loading: false,
      }
    },
    mounted () {
      this.firebaseStopGettingRecordList()


    },
    methods: {
      ...mapActions('LedgerStore',['firebaseGetRecordList','firebaseStopGettingRecordList']),
      showTable(key){

        this.firebaseGetRecordList({
          businessId: key
        })
        console.log('xxxx xx')
        this.showList =false;
        this.visibleTable = true;
      },
      hideTable(){
        this.data = []
        this.visibleTable =false
        this.showList =true;
        this.firebaseStopGettingRecordList()

      },

      toggleTable(){

        this.showList =!this.showList;
        this.showTable =!this.showTable;
      },

      mydateformat(timestamp){
        let timeStamp = Date.now()
        return date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')

      },

    },
    computed:{
      ...mapGetters('LedgerStore', ['recordListGetter','businessList']),
      businessList (){
        return this.$store.getters['LedgerStore/businessListGetter'];
      },
      getRowsNumberCount () {

        let count = 0

        Object.keys(this.recordListGetter).forEach( key => {
            count++;
        })
        return count
      }



    }
  }
</script>
