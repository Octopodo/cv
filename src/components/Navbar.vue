<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      disable-resize-watcher
      color="dark-glass-9"
      class="hidden-md-and-up"
    >
    <Menu :column="true"/>
    </v-navigation-drawer>
<!-- Añadir 'outlined en caso de problemas con la transparencia' -->
    <v-toolbar
      flat
      class="dark-glass-8 pa-0"
      fixed
      :height="60"
      absolute
      style=" border-bottom: 5px solid rgba(255, 255, 255, 0.4)"
    >
        <v-icon  @click.prevent="drawer = !drawer" class="white--text hidden-md-and-up align-end mt-9 mr-5 pl-0">reorder</v-icon>
        <router-link :to="`/${$i18n.locale}/home`" class="flat-link">
        <v-toolbar-title class="title mt-9 pointer">
          <span class=" font-weight-light white--text display-2 fascinate--text headline">miguel</span>
          <span class="font-weight-light grey--text headline">de</span>
          <span class="text-uppercase white--text headline">mendoza</span>
        </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>
      <v-toolbar-items >
        <Menu :row="true" class="pr-9 hidden-sm-and-down"/>
        <LangMenu class ="mt-9"/>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
import Menu from '@/components/Menu.vue'
import LangMenu from '@/components/LangMenu.vue'
export default {
  components:{
    Menu,
    LangMenu
  },
  data() {
    return {
      drawer: false,
      language: 'esp',
      languages: [
        {text: 'Español'},
        {text: 'English'}
      ]
    }
  },
  }
</script>

<style lang="sass" scoped>

.margin-fix
  margin-top: 27px!important
  
</style>



