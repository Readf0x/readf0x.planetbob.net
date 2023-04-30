<script setup>
import Marked from '../components/Marked.vue'
import Navbar from '../components/NavBar.vue'
import MobileNav from '../components/MobileNavBar.vue'
import PageFooter from '../components/PageFooter.vue'
import MobileDetect from 'mobile-detect/mobile-detect'
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
    <div class="content container-md">
        <Marked parse="/markdown/Projects.md" />
    </div>
    <PageFooter />
</template>

<style lang="scss">
.content iframe {
    background-color: white;
    width: 100%;
    height: 40vh;
    border-radius: 20px;
}
</style>
