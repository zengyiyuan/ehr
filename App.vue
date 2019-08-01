<template>
  <div id="app">
    <top-bar></top-bar>
    <side-bar></side-bar>
    <section id="main" class="main">
      <router-view/>
    </section>
    <Footer></Footer>
    <back-to-top
        transitionName="fade"
        :visibilityHeight="300"></back-to-top>
  </div>
</template>

<script>
import SideBar from './common/components/SideBar.vue'
import TopBar from './common/components/Topbar.vue'
import BackToTop from './common/components/BackToTop'
import Footer from 'library/components/Footer.vue'

export default {
    name: 'App',
    components: {
        TopBar,
        BackToTop,
        SideBar,
        Footer
    },
    created () {
        this.$store.dispatch('updateGlobalConfig')
    },
    methods: {

    }
}
</script>

<style lang="scss">
  @import './assets/scss/main';
</style>
