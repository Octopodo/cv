<template>
  <v-app style="background: #212121">
    <Navbar/>
    <v-content>
      <MainCarrousel/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import MainCarrousel from '@/components/MainCarrousel'
export default {
  name: 'App',
  components: {
    Navbar,
    MainCarrousel
  },
  data () {
    return {
      //
    }
  }
}
</script>


<style lang="sass">
.dark-glass-9
  background-color: rgba(0, 0, 0, 0.95)!important
  color: white!important

.dark-glass-8
  background-color: rgba(0, 0, 0, 0.8)!important
  color: white!important

.dark-glass-6
  background-color: rgba(0, 0, 0, 0.6)!important
  color: white!important

.dark-glass-2
  background-color: rgba(0, 0, 0, 0.2)!important
  color: white!important

.pointer
  cursor: pointer

.flat-link
  text-decoration: none

</style>
