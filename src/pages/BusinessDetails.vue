<template>
  <div class="q-pa-md">

    <div class="row justify-center  q-mb-md">

      <div class="col-sm-8 col-xs-12 text-center  q-gutter-x-md ">
        <q-table
          title="Record Log"
          :data="rows"
          :columns="columns"
          row-key="name"
          :pagination.sync="pagination"
          hide-pagination
          flat
          bordered
        />

      </div>


    </div>

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
        v-if="this.rows.length>rowsPerPage"
      />
    </div>
  </div>
</template>

<script>
  import  { firebaseDb , firebaseAuth } from "../boot/firebase";
  import { mapState, mapActions, mapGetters } from "vuex";
  import {date} from "quasar";


  export default {
    data () {
      return {
        pagination: {
          sortBy: 'desc',
          descending: false,
          page: 1,
          rowsPerPage: 5,
          currentBusiness:''
          // rowsNumber: xx if getting data from a server
        },

        columns: [

          { name: 'businessId', align: 'center', label: 'ID', field: 'businessId', sortable: true },
          { name: 'name', align: 'center', label: 'Business Name', field: 'name' },
          { name: 'created', align: 'center', label: 'Added', field: 'created', sortable: true },
          { name: 'in', align: 'center', label: 'Income', field: 'in', sortable: true },
          { name: 'out', align: 'center', label: 'Expense', field: 'in', sortable: true },

        ],

        rows: []
      }
    },
    computed: {
      ...mapState("LedgerStore", ["userDetails", "loggedInUser"]),
      getBusinessName(){
        let businessList = this.$store.state.LedgerStore.businessList;
        let currentBusiness = this.$route.params.key ;
        console.log(currentBusiness)
        console.log(businessList)
        console.log('test', businessList[currentBusiness])
        return businessList[currentBusiness].name
      },
      pagesNumber () {
        return Math.ceil(this.rows.length / this.pagination.rowsPerPage)
      }
    },
    methods:{
      getRecords(){
        let name = this.getBusinessName;
        firebaseDb.ref('entry_records/'+this.currentBusiness).once('value', snapshot => {
          let recordList = snapshot.val() ;
          let object = recordList;
          var test = [];

          for (const key in object) {

            let values = Object.values(object[key]) ;
            test.push({
                        name : name,
                        businessId : object[key].businessId,
                        in : object[key].in,
                        out : object[key].out,
                        created : this.mydateformat(object[key].created),
                      });
          }

          this.rows = test;


        });

      },

      mydateformat(timestamp){
        return date.formatDate(timestamp, 'DD-MM-YYYY')

      },
    },

    mounted() {
      this.currentBusiness =  this.$route.params.key;
      this.getRecords();

    },
    watch: {
      // whenever question changes, this function will run
      currentBusiness: function (newVal, old) {
        console.log(newVal)
        console.log(old)
        this.getRecords()
      }
    },

  }
</script>
