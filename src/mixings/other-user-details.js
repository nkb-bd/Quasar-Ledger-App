export default {
  computed:{
    otherUserDetails (){
      if (this.$store.state.LedgerStore.users[this.$route.params.otherUserId]){
        return this.$store.state.LedgerStore.users[this.$route.params.otherUserId]
      }
      return {}
    }
  }
}
