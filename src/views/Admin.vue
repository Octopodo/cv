<template>
  <div>
    Admin
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'
  export default {
    methods: {
      logout(){
        firebase.auth().signOut().then(() => this.$router.replace('overview'))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>