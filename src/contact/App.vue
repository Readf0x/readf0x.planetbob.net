<script setup>
import Navbar from '../components/NavBar.vue'
import MobileNav from '../components/MobileNavBar.vue'
import PageFooter from '../components/PageFooter.vue'
import MobileDetect from 'mobile-detect/mobile-detect'
import Contact from '../components/pug/Contact.vue'
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
        <contact />
    </div>
    <PageFooter />
</template>
