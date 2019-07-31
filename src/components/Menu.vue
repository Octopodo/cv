<template>
<div>
    <v-layout
      :row="row"
      :column="column || !row"
      class="transparent"
    >
      <v-flex
        v-for="(menu, name) in menus"
        :key="name"
      >
        <v-btn 
          v-if="row" 
          :to="`/${$i18n.locale}/${name}`"
          @click.prevent="setMenu(name)" 
          class="sidebar-link align-end horizontal-menu-btn" 
          text
        >
          {{ name }}
        </v-btn>
        <v-btn 
          v-else 
          :to="`/${$i18n.locale}/${name}`"
          @click.prevent="setMenu(name)" 
          class="sidebar-link align-end vertical-menu-btn justify-end"
          text 
          block
        >
          {{ name }}
        </v-btn>
      </v-flex>
    </v-layout>
</div>
</template>

<script>
import LangMenu from '@/components/LangMenu.vue'
export default {
  props: {
    row: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    buttonType(){
      let type = this.row ? 'horizontal-menu-btn' : this.column ? 'vertical-menu-btn' : 'horizontal-menu-btn';
      return type
    },
  },
  data() {
    return {
      menus: this.$store.state.menu        
    }
  },
  methods: {
    locMenu(name) {
      return this.$t(`nav.${name}.text`)
    },
    setMenu(wich){
      this.$store.commit('setMenu', wich)
    }
  }
}
</script>

<style lang="sass" scoped>
.vertical-menu-btn
  color: white!important
  text-decoration: none!important
  width: auto
  // display: block
  height: 60px!important
  border-radius: 0px 
  border-right: 5px solid rgba(255, 255, 255, 0.2)
  // padding-bottom: 5px!important

  cursor: pointer
  &:hover
    background-color: rgba(255, 255, 255, 0.2)
    border-right: 5px solid rgba(0, 209, 229, 0.4)

  &:focus
    border-right: 5px solid  rgba(0, 209, 229, 0.4)

.focused
  border-right: 5px solid  rgba(0, 209, 229, 0.4)


.horizontal-menu-btn
  color: white!important
  text-decoration: none!important
  width: auto
  height: 60px!important
  border-radius: 0px 
  border-bottom: 5px solid rgba(255, 255, 255, 0.2)
  // padding-bottom: 5px!important

  cursor: pointer
  &:hover
    background-color: rgba(255, 255, 255, 0.2)
    border-bottom: 5px solid rgba(255, 255, 255, 0.4)

  &:focus
    border-bottom: 5px solid  rgba(0, 209, 229, 0.4)

.focused
  border-bottom: 5px solid  rgba(0, 209, 229, 0.4)


</style>