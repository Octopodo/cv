<template>
  <v-carousel
    v-model="getMenu"
    :height="height"
    :touch="touch"
    :input="log"
    hide-delimiters
  >
    <v-carousel-item 
      class="orange"
    >
    </v-carousel-item> 
    <v-carousel-item 
      class="blue lighten-1"
    >
    </v-carousel-item> 
    <v-carousel-item 
      class="yellow lighten-2"
    >
    </v-carousel-item>

  </v-carousel>
</template>


<script>
import FloatingIframe from '@/components/FloatingIframe.vue'
  export default {
    computed: {
      getMenu(){
        let menu = this.$store.state.curMenu;
        console.log(menu)
        return this.$store.state.menu[menu].index
      }
    },
    methods: {
      log(e){
        console.log(e)
      }
    },
    props: {
      height: {
        type: Number,
        required: false,
        default: 1080
      }
    },
    components:{
      FloatingIframe
    },
    data() {
      return {
        images: [
          {src: require('../assets/img/reel-placeholder.jpg')},
          {src: require('../assets/video/title-1.mp4')}
        ],
        touch: {
          left(){
            console.log('left')
          },
          right() {
            console.log('right')
          }
        }
      }
    }, 
  }
</script>

<style lang="sass" scoped>

.h_iframe iframe
  width:100%
  height:100%

.h_iframe
  height: 100%
  width:100%

</style>