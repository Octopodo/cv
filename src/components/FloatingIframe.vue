<template>
  <div>
    <v-layout @click.stop="play" class="text-center">
      <video v-if="isVideo"  autoplay loop muted class="floating-video-placeholder">
        <v-btn >
          <v-icon >{{buttonIcon}}</v-icon>
        </v-btn>
        <source :src="placeholder">
        
      </video>
      <v-img v-else
        :src="placeholder"
        :height="height"
        :width="width"
        class="text-center align-center justify-center"
      >
      
        <v-btn >
          <v-icon >{{buttonIcon}}</v-icon>
        </v-btn>
      </v-img>
      <v-dialog v-model="showcase" width="920" @click:outside="pause">
        <v-card class="dark-glass-8">
          <iframe id="vimeo-iframe" :src="`${icontent}?autoplay=1`" frameborder="0" allow="autoplay" width="920" height="540"></iframe>
        </v-card>
      </v-dialog>
    </v-layout>

  </div>
</template>

<script>
  export default {
    computed: {
      overlay(){
        this.showcase = !this.showcase;
        
      },
      width(){
        this.height * 1.7778
      },
      isVideo(){
        let split = this.placeholder.split('.');
        let ext = split[split.length-1];
        let isVideo = false;
        let match = /mp4|avi|mov/g
        ext.replace(match, m=>{
          isVideo = true
        })
        return isVideo
      }
    },
    methods: {
      pause(){
        let iframe = document.querySelector('#vimeo-iframe');
        let player = new Vimeo.Player(iframe);
        player.pause();
        player.setCurrentTime(0)
      },
      play(){
        this.showcase = true;
        let iframe = document.querySelector('#vimeo-iframe');
        if(iframe){
          let player = new Vimeo.Player(iframe);
          player.play();
        }
      }
    },
    props: {
      placeholder: {
        type: String,
        required: true,
        default: true
      },
      buttonIcon: {
        type: String,
        required: false,
        default: 'play_circle_filled'
      },
      icontent: {
        type: String,
        required: true,
        default: ''
      },
      height: {
        type: Number,
        required: false,
        default: 1080
      }
    },
    data() {
      return {
        showcase: false,
        zIndex: 0
      }
    },
  }
</script>

<style lang="sass" scoped>
.floating-video-placeholder
  height: 100%
  cursor: pointer
</style>