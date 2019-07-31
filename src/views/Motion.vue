<template>
  <div>
    <MainCarrousel :height="500"/>
    <v-container text-left fill-width fill-height>
      <!-- <Carrousel/> -->
      <v-layout wrap justify-center align-center>
        <v-flex xs-4>
          <div class="white--text" >
            {{ $t('home')}}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MainCarrousel from '@/components/MainCarrousel.vue'

export default {
  components: {
    MainCarrousel
  },
  methods: {
      log(){
        let msg = this.$i18n.messages;
        return JSON.stringify(msg, null, 4, 4)
      }
    }
}
</script>

<style lang="sass" scoped>
.content
  margin-top: 100px!important
  width: 600px!important
</style>