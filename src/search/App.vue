<script setup>
import Navbar from '../components/NavBar.vue'
import MobileNav from '../components/MobileNavBar.vue'
import PageFooter from '../components/PageFooter.vue'
import SearchResults from '../components/SearchResults.vue'
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
        <SearchResults />
    </div>
    <PageFooter />
</template>
