<script setup>
import Navbar from '../components/NavBar.vue'
import MobileNav from '../components/MobileNavBar.vue'
import PageFooter from '../components/PageFooter.vue'
import MobileDetect from 'mobile-detect/mobile-detect'
import PageBanner from '../components/PageBanner.vue'
import About from '../components/pug/About.vue'
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
    <navbar v-if="md.mobile() == null" />
    <mobile-nav v-if="md.mobile() != null" />
    <page-banner title="Me, Myself, and I">Hey, I'm Davis Forsythe, but I go by readf0x online. I'm 16 and currently studying information technology at Desoto County Career Tech West. Some of my hobbies include custom keyboards and front end web development. I'm autistic with ADHD (not a very fun combination, believe me) and I try my best to keep up with school. I enjoy games like Portal 2, Half-Life 2, Fallout 4, H3VR, Unpacking, and ULTRAKILL.</page-banner>
    <div class="content container-md">
        <about />
    </div>
    <PageFooter />
</template>
