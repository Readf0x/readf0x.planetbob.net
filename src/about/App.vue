<script setup>
import Navbar from '../components/NavBar.vue'
import MobileNav from '../components/MobileNavBar.vue'
import Marked from '../components/Marked.vue'
import PageFooter from '../components/PageFooter.vue'
import MobileDetect from 'mobile-detect/mobile-detect'
import PageBanner from '../components/PageBanner.vue'
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
    <div class='fuck-you-hudson'>
        <h2><div class="head-wrapper">
            <span class="head pe-1" style="font-size: 5vmax">Me, Myself, and I</span>
        </div></h2>
    </div>
    <page-banner />
    <div class="content container-md">
        <Marked parse="/markdown/About.md" />
    </div>
    <PageFooter />
</template>

<style lang="scss">
.fuck-you-hudson {
    display: flex;
    justify-content: center;
    background-color: #3B4252;
}
</style>
