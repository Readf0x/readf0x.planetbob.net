<script setup>
import Navbar from './components/NavBar.vue'
import MobileNav from './components/MobileNavBar.vue'
import Hero from './components/MainHero.vue'
import PageFooter from './components/PageFooter.vue'
import Cards from './components/MainSpot.vue'
import MobileDetect from 'mobile-detect/mobile-detect'
import Welcomer from './components/pug/Welcomer.vue'
</script>

<script>
export default {
    data() {
        return {
            md: new MobileDetect(window.navigator.userAgent)
        }
    }
}
</script>

<template>
    <navbar :hero="true" v-if="md.mobile() == null" />
    <mobile-nav :hero="true" v-if="md.mobile() != null" />
    <div class="content">
        <hero />
        <div class="welcomer container-md">
            <welcomer />
        </div>
        <cards />
    </div>
    <page-footer />
</template>
