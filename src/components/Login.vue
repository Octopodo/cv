<template>
  <v-form>
    <v-container>
      <v-text-field 
        label="E-mail"
        v-model="email"
        >
      </v-text-field>
      <v-text-field
        label="Pasword"
        v-model="password"
        type="password"
        placeholder=""
        >
      </v-text-field>
      <v-btn color="blue" @click="login()">Submit</v-btn>
    </v-container>
    <pre>
    {{ $data}}
  </pre>
  </v-form>
</template>

<script>
  import firebase from 'firebase/app'
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => this.$router.replace('admin'), error => console.log(error))

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>