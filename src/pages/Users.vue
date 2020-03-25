
<template>
  <q-page class="flex q-pa-md">
    <q-list
      class="full-width"
      separator>

      <q-item  v-for="(user, key) in users" :key="key" clickable v-ripple :to="'/chat/' + key">


        <q-avatar color="primary" text-color="white">
          {{ user.name.charAt(0) }}
        </q-avatar>
        <q-item-section>
          <q-item-label class="q-ml-md">{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge
            :color="user.online ? 'light-green-6' : 'grey-4'">
            {{ user.online ? 'Online' : 'Offline' }}
          </q-badge>
        </q-item-section>


      </q-item>



    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('LedgerStore', ['users'])
    }
  }
</script>

<style>
</style>


