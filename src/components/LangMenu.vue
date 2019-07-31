<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }" >
        <div
          class="white--text font-weight-thin custom-btn"
          v-on="on"
        >Language</div>
        <!-- <v-btn
          class="transparent white--text mt-12 font-weight-thin"
          v-on="on"
          text
        >
          Language
        </v-btn> -->
      </template>
      <v-list class="dark-glass-8">
        <v-list-item
          v-for="lang in languages"
          :key="lang.text"
          @click="switchLang(lang.value)"
        >
          <v-list-item-title class="white--text">{{ lang.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        languages: {
          esp: {text:'Español', value: 'es'},
          eng: {text:'English', value: 'en'}
        }
      }
    },
    methods: {
      switchLang(lang) {
        this.$i18n.locale = lang;
        this.$router.push({
          params: {lang: lang}
        })
      }
    }
  }
</script>

<style lang="sass" scoped>

.custom-btn
  cursor: pointer
  border-radius: 0px

</style>