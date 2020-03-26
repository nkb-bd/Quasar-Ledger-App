<template>
    <q-layout view="lHh Lpr lFf">
        <q-header>
            <q-toolbar>
                <q-btn
                    v-if="userDetails.userId"
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    icon="account_box"
                />
                <br />

                <q-btn
                    v-if="$route.path != '/' && userDetails.userId"
                    v-go-back.single
                    icon="arrow_back"
                    flat
                    dense
                    label="Back"
                />

                <q-toolbar-title>
                    <q-btn flat exact to="/"> Ledger App </q-btn>
                </q-toolbar-title>

                <div v-if="!userDetails.userId">
                    <q-btn
                        exact
                        to="/auth"
                        outline
                        clickable
                        v-ripple
                        icon-right="account_box"
                        label="Login"
                    >
                    </q-btn>
                </div>
                <div v-if="userDetails.userId">
                    <q-btn
                        @click="logoutUser"
                        outline
                        clickable
                        v-ripple
                        icon-right="exit_to_app"
                    >
                        Logout
                    </q-btn>
                </div>
            </q-toolbar>

            <div class="q-px-lg q-pt-md q-mb-md">
                <q-fab
                    v-model="fab1"
                    label-position="left"
                    color="white"
                    square
                    dense
                    class="my-fab-btn q-mb-sm"
                    outline
                    icon="menu"
                    direction="right"
                >
                    <q-item exact to="/" clickable v-ripple>
                        <q-item-section class="q-pa-sm q-ml-none">
                            <q-icon name="list" />
                            Dashbaord
                        </q-item-section>
                    </q-item>

                    <q-item exact to="/history" clickable v-ripple>
                        <q-item-section class="q-pa-sm">
                            <q-icon name="history" />

                            History
                        </q-item-section>
                    </q-item>

                    <q-item exact to="/users" clickable v-ripple>
                        <q-item-section class="q-pa-sm">
                            <q-icon name="supervised_user_circle" />

                            Users
                        </q-item-section>
                    </q-item>
                </q-fab>
                <div class="text-h5">
                    {{ title }}
                </div>
                <div class="text-subtitle-1">
                    {{ todaysDate }}
                </div>
            </div>
            <q-img
                :src="'statics/mountain.jpg'"
                class="header-image absolute-top"
            />
            <div class="absolute-bottom-right z-max">
                {{ loggedInUser }} @created by lukman.nakib@gmail.com
            </div>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            :width="200"
            :breakpoint="400"
            elevated
            overlay
        >
            <q-scroll-area
                style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd"
            >
            </q-scroll-area>

            <q-img
                class="absolute-top"
                :src="'statics/mountain.jpg'"
                style="height: 185px"
            >
                <div class="absolute-bottom bg-transparent">
                    <q-avatar size="56px" class="q-mb-sm">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                    <div v-if="userDetails.userId" class="text-weight-bold">
                        {{ userDetails.name }}

                        <div>{{ userDetails.email }}</div>
                    </div>
                </div>
            </q-img>
            <div v-if="leftDrawerOpen">
                <div
                    class="q-mini-drawer-hide absolute"
                    style="top: 15px; right: -12px"
                >
                    <q-btn
                        dense
                        round
                        unelevated
                        color="accent"
                        icon="chevron_left"
                        @click="leftDrawerOpen = false"
                    />
                </div>
            </div>
        </q-drawer>

        <q-page-container>
            <keep-alive>
                <q-inner-loading v-if="loading">
                    <q-spinner-gears size="50px" color="primary" />
                </q-inner-loading>

                <transition name="slide" mode="out-in">
                    <router-view />
                </transition>
            </keep-alive>
        </q-page-container>
    </q-layout>
</template>

<script>
import { date, Notify } from "quasar";
import { mapState, mapActions, mapGetters } from "vuex";
import mixingOtherUserDetails from "src/mixings/other-user-details.js";
import VueRouter from "vue-router";

export default {
    name: "MyLayout",
    mixins: [mixingOtherUserDetails],
    data() {
        return {
            loading: true,
            fab1: false,
            leftDrawerOpen: false
        };
    },
    methods: {
        ...mapActions("LedgerStore", ["logoutUser"]),
        showNotification(text, type) {}
    },
    computed: {
        ...mapState("LedgerStore", ["userDetails", "loggedInUser"]),
        todaysDate() {
            let timeStamp = Date.now();
            return date.formatDate(timeStamp, "dddd, DD MMMM ");
        },
        title() {
            let currentPath = this.$route.path;
            if (currentPath == "/") return "Ledger App ";
            if (currentPath == "/users") return "User List ";
            if (currentPath == "/history") return "Record History ";
            if (currentPath.includes("/chat"))
            {
              return this.otherUserDetails.name;
            }
            if (currentPath == "/auth") return "Login ";
        }
    },
    mounted() {
        this.leftDrawerOpen = false;
        this.$router.beforeEach((to, from, next) => {
            if (to.meta.requiresAuth) {
                console.log("xxx");
                console.log(this.userDetails);
                if (this.userDetails.userId) {
                    next();
                } else {
                    Notify.create({
                        type: "warning",
                        message: "Login first"
                    });
                    // next('/auth')
                }
            } else {
                next();
            }
        });

        this.loading = false;
    }
};
</script>
<style>
.header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    /*filter: grayscale(100%);*/
}

.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}

.my-fab-btn .q-btn--fab .q-btn__wrapper {
    min-height: unset;
    margin: 0px;
    padding: 8px;
}

.my-fab-btn .q-toolbar__title {
    font-size: 17px;
}

.q-item.q-router-link--active,
.q-item--active {
    background-color: #7ac70c !important;
    color: white;
    border-radius: 5px;
}

.my-fab-btn. a {
    max-height: 40px;
    min-height: 44px;
    border-radius: 5px;
}

.my-fab-btn .q-item {
    font-weight: 500;
    min-height: 12px;
    max-height: 80px;
    height: 40px;
    background: #2738407d;
    border-radius: 5px;
    margin-right: 5px;
    padding-left: 0px;
}

.my-item-menu {
    max-width: 20px;
}
</style>
