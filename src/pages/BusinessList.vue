<template>
    <q-slide-transition transition-show="slide-in " appear>
        <q-page class="q-pa-md">
            <!-- business list -->
          <div class="row justify-center  q-mb-md">

            <div class="row text-center  q-gutter-x-md ">

              <q-input
                outlined
                type="text"
                placeholder="Search Business"
                v-model="search"
                @change="businessList"
              >
                <template v-slot:append>
                  <q-icon  v-if="search==''" name="search" />
                  <q-btn   v-if="search!=''" @click="search=''" round icon="close" dense flat  />
                </template>

              </q-input>

              <q-btn
                v-ripple
                @click="showAddBusinessModal = true"
                color="secondary"
                icon-right="plus" class="text-center" icon="add_circle_outline"  unelevated label="Add Business" />
            </div>


          </div>

            <div class="row justify-center q-gutter-x-md q-col-gutter-xl">

                <!--      card start-->

                <div
                    class="col-6 col-md-4 col-sm-12"
                    v-for="(business, key) in businessList"
                    :key="business.businessId"
                >
                    <q-card class="my-card q-gutter-x-md" flat bordered >
                        <q-card-section horizontal>
                            <q-card-section class="q-pt-xs">
                                <div class="text-overline">Business :  {{ business.name }}  </div>
                                <div class="text-h5 q-mt-sm q-mb-xs">

                                  {{ business.owner }}
                                </div>
                                <div class="text-caption text-grey">

                                </div>
                            </q-card-section>
                        </q-card-section>

                        <q-separator inset />

                        <q-card-actions>

                          <q-btn unelevated outline color="primary"  :to="/business/+key"  >
                            View
                          </q-btn>
                            <q-btn
                                @click="addRecord(key)"
                                unelevated outline
                                icon="add"
                                color="accent"
                            >
                                Add Record
                            </q-btn>
                            <q-btn v-if="business.mobile != ''"  icon="phone" unelevated outline >
                            {{ business.mobile }}
                            </q-btn>

                        </q-card-actions>
                    </q-card>
                </div>

                <!--      card end-->

                <q-dialog v-model="showRecordModal" persistent>
                    <Record
                        @closeModal="closeModal()"
                        :key="businessId"
                        :id="this.businessId"
                    />
                </q-dialog>

                <!--      add busniess-->
                <q-dialog v-model="showAddBusinessModal">
                    <Business @updated="refresh" />
                </q-dialog>
            </div>
        </q-page>
    </q-slide-transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "BusinessList",
    data() {
        return {
            drawer: "",
            businessId: "",
            drawerR: "",
            visible: true,
            layout: false,
            tasks: [],
            showRecordModal: false,
            showAddBusinessModal: false,
            search:''
        };
    },
    methods: {
        ...mapActions("LedgerStore", [
            "firebaseGetRecordList",
            "firebaseStopGettingRecordList",
        ]),

        closeModal() {
            this.showRecordModal = false;
            this.firebaseStopGettingRecordList();
        },
        refresh() {
            this.showAddBusinessModal = false;
        },
        addRecord(id) {
            this.showRecordModal = true;
            this.businessId = id;
            this.firebaseGetRecordList({
                businessId: id,
            });
        },
    },
    computed: {
        businessList() {
          let list = this.$store.getters["LedgerStore/businessListGetter"];
          let result = {};
          if(this.search != ''){
            for (const key in list ) {
              if( list[key].owner.toLowerCase().includes(this.search.toLowerCase())){
                result[key] = list[key] ;
              }
            }
            return result;
          }
          return list;


        },
    },

    components: {
        Record: () => import("../components/Record"),
        Business: () => import("../components/Business"),
    },
    mounted() {},
};
</script>
<style>
.center {
    text-align: center;
}
.add-new {
    min-height: 130px;
    max-height: 136px;
}
</style>
