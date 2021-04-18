import vue from "vue";
import { Notify, Loading, QSpinnerPuff, date } from "quasar";

import { firebaseDb, firebaseAuth } from "../boot/firebase";
import { uid } from "quasar";

let messageRef;
let recordRef;

const state = {
    userDetails: {},
    users: {},
    messages: {},
    businessList: {},
    records: {},
    errors: [],
};

const mutations = {
    addBusiness(state, payload) {
        vue.set(
            state.businessList,
            payload.businessId,
            payload.businessDetails
        );
    },
    addRecord(state, payload) {
        payload.recordDetails.created = date.formatDate(
            payload.recordDetails.created,
            "DD MMMM YYYY hh:mm A"
        );
        vue.set(state.records, payload.recordId, payload.recordDetails);
    },

    setUserDetails(state, payload) {
        state.userDetails = payload;
    },

    addUser(state, payload) {
        vue.set(state.users, payload.userId, payload.userDetails);
    },
    updateUser(state, payload) {
        Object.assign(state.users[payload.userId], payload.userDetails);
    },
    addMessage(state, payload) {
        vue.set(state.messages, payload.messageId, payload.messageDetails);
    },
    clearMessages() {
        state.messages = {};
    },
    clearRecords() {
        state.records = {};
    },
    setErrors(state, payload) {
        state.errors.push(payload);
    },
    clearError() {
        state.errors = [];
    },
};

const actions = {
    registerUser({}, payload) {
        firebaseAuth
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
                let userId = firebaseAuth.currentUser.uid;
                firebaseDb.ref("users/" + userId).set({
                    name: payload.name,
                    email: payload.email,
                    password: payload.password,
                    online: true,
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch("addErrorMessage", error);
                // return error.message
            });
    },
    loginUser({ commit, dispatch }, payload) {
        let errorMessage = "";
        firebaseAuth
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
                let userId = firebaseAuth.currentUser.uid;
            })
            .catch((error) => {
                dispatch("addErrorMessage", error);
            });
    },
    logoutUser() {
        firebaseAuth.signOut();
    },
    handleAuthChange({ commit, dispatch, state }) {
        this.$router.replace("/auth");

        firebaseAuth.onAuthStateChanged((user) => {
            Loading.show({
                spinner: QSpinnerPuff,
            });
            if (user) {
                // User is logged in.
                let userId = firebaseAuth.currentUser.uid;
                firebaseDb.ref("users/" + userId).once("value", (snapshot) => {
                    let userDetails = snapshot.val();
                    commit("setUserDetails", {
                        name: userDetails.name,
                        email: userDetails.email,
                        userId: userId,
                    });

                    Loading.hide();
                });
                dispatch("firebaseUpdateUser", {
                    userId: userId,
                    updates: {
                        online: true,
                    },
                });

                dispatch("firebaseGetBusiness", userId);
                dispatch("firebaseGetUsers");
                dispatch("clearErrorMessage");
            } else {
                // User is signed out.

                Loading.show({
                    spinner: QSpinnerPuff,
                });
                dispatch("firebaseUpdateUser", {
                    userId: state.userDetails.userId,
                    updates: {
                        online: false,
                    },
                });
                commit("setUserDetails", {});
                this.$router.replace("/auth");
                Loading.hide();
            }
        });
    },

    firebaseUpdateUser({}, payload) {
        if (payload.userId) {
            firebaseDb.ref("users/" + payload.userId).update(payload.updates);
        }
    },

    firebaseGetUsers({ commit }, payload) {
        firebaseDb.ref("users/").on("child_added", (snapshot) => {
            let userDetails = snapshot.val();
            let userId = snapshot.key;
            commit("addUser", {
                userId,
                userDetails,
            });
        });

        firebaseDb.ref("users/").on("child_changed", (snapshot) => {
            let userDetails = snapshot.val();
            let userId = snapshot.key;
            commit("updateUser", {
                userId,
                userDetails,
            });
        });
    },

    firebaseGetMessages({ commit, state }, otherUserId) {
        let userId = state.userDetails.userId;
        messageRef = firebaseDb.ref("chats/" + userId + "/" + otherUserId);
        messageRef.on("child_added", (snapshot) => {
            let messageDetails = snapshot.val();
            let messageId = snapshot.key;
            commit("addMessage", {
                messageId,
                messageDetails,
            });
        });
    },

    firebaseStopGettingMessages({ commit }) {
        if (messageRef) {
            messageRef.off("child_added");
        }
        commit("clearMessages");
    },

    firebaseSendMessage({ commit, state }, payload) {
        let userId = state.userDetails.userId;
        payload.message.created = Date.now();

        messageRef = firebaseDb
            .ref("chats/" + userId + "/" + payload.otherUserId)
            .push(payload.message);

        payload.message.from = "them";
        messageRef = firebaseDb
            .ref("chats/" + payload.otherUserId + "/" + userId)
            .push(payload.message);
    },

    firebaseAddBusiness({ commit, state }, businessData) {
        let userId = state.userDetails.userId;
        businessData.created = Date.now();
        firebaseDb.ref("business_list/" + userId).push(businessData);
    },

    firebaseGetBusiness({ commit, state }, userId) {
        Loading.show({
            spinner: QSpinnerPuff,
            message:
                '<b>Loading, please make sure you are connected to internet </b><br/><span class="text-primary">Thanks for checking this out...</span>',
        });

        firebaseDb
            .ref("business_list/" + userId)
            .on("child_added", (snapshot) => {
                let businessDetails = snapshot.val();
                let businessId = snapshot.key;
                commit("addBusiness", {
                    businessId,
                    businessDetails,
                });
            });
    },

    firebaseAddRecord({ commit, state }, recordData) {
        let userId = state.userDetails.userId;
        recordData.userId = userId;
        firebaseDb
            .ref("entry_records/" + recordData.businessId)
            .push(recordData);

        Notify.create({
            type: "positive",
            color: "positive",
            timeout: 600,
            position: "center",
            message: "Record saved.",
        });
    },
    firebaseGetRecordList({ commit, state }, payload) {
        let userId = state.userDetails.userId;
        recordRef = firebaseDb.ref("entry_records" + "/" + payload.businessId);
        recordRef.on("child_added", (snapshot) => {
            let recordDetails = snapshot.val();
            let recordId = snapshot.key;
            commit("addRecord", {
                recordId,
                recordDetails,
            });
        });
    },
    firebaseStopGettingRecordList({ commit }) {
        if (recordRef) {
            recordRef.off("child_added");
        }

        commit("clearRecords");
    },

    addErrorMessage({ commit }, payload) {
        let errorMessage = "";
        if (payload.code == "auth/wrong-password") {
            errorMessage = "Invalid User login info !";
            commit("setErrors", errorMessage);
        } else if (payload.code == "auth/user-not-found") {
            errorMessage = "No user found !";
        } else {
            errorMessage =
                "An error occurred please check your internet connection!";
        }

        commit("setErrors", errorMessage);
    },
    clearErrorMessage({ commit }) {
        commit("clearError");
    },
};

const getters = {
    users: (state) => {
        let usersFiltered = {};
        Object.keys(state.users).forEach((key) => {
            if (key != state.userDetails.userId) {
                usersFiltered[key] = state.users[key];
            }
        });
        return usersFiltered;
    },
    loggedInUser: (state) => {
        return state.userDetails;
    },
    businessListGetter: (state) => {
        return state.businessList;
    },
    recordListGetter: (state) => {
        return state.records;
    },
    getErrors: (state) => {
        return state.errors;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
