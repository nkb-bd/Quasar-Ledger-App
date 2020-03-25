<template>
  <q-page ref="pageChat" class="flex column page-chat">
    <q-banner class="fixed-top bg-grey-4 text-center" v-if="!otherUserDetails.online">
      {{otherUserDetails.name}} is offline.

      {{newMessage}}
    </q-banner>
    <div class="fixed-top bg-grey-4 text-center" v-if="!loading">
      <div class="q-gutter-md row justify-center">
        <q-spinner-puff
          color="primary"
          size="2em"
        />
      </div>
    </div>

    <div class="q-pa-md column col justify-end">


      <q-chat-message
        :class="{'invisible' : !showMessages}"
        v-for="(message,key) in messages"
        :key="message.key"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
        :bg-color="message.from == 'me' ? 'white': 'light-green-2'"
        :stamp="messageDate(message.created)"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form
          @submit="sendMessage"
          class="full-width">
          <q-input
            ref="chatInput"
            v-model="newMessage"
            @blur="scrollToBottom"
            bg-color="white"
            outlined
            rounded
            autofocus
            label="Message"
            dense>

            <template v-slot:after>
              <q-btn
                round
                dense
                flat
                @click="sendMessage"
                type="submit"
                color="white"
                icon="send" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
  import { mapActions , mapState } from 'vuex'
  import LedgerStore from "../store/LedgerStore";
  import  mixingOtherUserDetails  from 'src/mixings/other-user-details.js'
  import {date} from "quasar";
  export default {
    mixins: [mixingOtherUserDetails],
    data() {
      return {
        newMessage: '',
        showMessages: false,
        loading: true
      }
    },
    methods: {
      ...mapActions('LedgerStore',['firebaseGetMessages','firebaseStopGettingMessages','firebaseSendMessage']),
      sendMessage() {
        if(this.newMessage =='') {
          return
        }
        this.firebaseSendMessage({
          message:{
            text: this.newMessage,
            from: 'me'
          },
          otherUserId: this.$route.params.otherUserId

        })
        this.newMessage = ''
        this.$refs.chatInput.$el.focus();
      },
      scrollToBottom(){
        let pageChat  = this.$refs.pageChat.$el
        setTimeout(()=>{
          window.scrollTo( 0, pageChat.scrollHeight);

          },20)
      },
      messageDate(timestamp){

        return date.formatDate(timestamp, ' DD MMMM YYYY hh:mm A')
      }
    },
    computed:{
      ...mapState('LedgerStore', ['messages','userDetails']),

    },
    mounted() {
      this.firebaseGetMessages(this.$route.params.otherUserId)
      this.loading = false
    },
    destroyed() {
      this.firebaseStopGettingMessages()
    },
    watch:{
      messages: function(val){
        if(Object.keys(val).length){
          this.scrollToBottom();
          setTimeout(()=>{
           this.showMessages = true

          },100)
        }
      }
    }


  }
</script>

<style>
  .q-message-text--received {
    color: #406cb133;
    border-radius: 4px 4px 4px 0;
  }
  .page-chat{
    background: #e9ebee;
  }
  .page-chat:after{
    content: '';
    position: fixed;
    left: 0;right: 0;bottom: 0;top: 0;
    opacity: 0.1;z-index: 0;
    background:
      radial-gradient(black 3px, transparent 4px),
      radial-gradient(black 3px, transparent 4px),
      linear-gradient(#fff 4px, transparent 0),
      linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
      linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
      #fff;
    background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  }
  .q-message{
    z-index: 1;
  }
  .q-banner{
    top: 190px;
    opacity: .5;
    z-index: 2;
  }
</style>
