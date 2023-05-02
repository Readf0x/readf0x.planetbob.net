<script setup>
import Marked from '../components/Marked.vue'
import Navbar from '../components/NavBar.vue'
import MobileNav from '../components/MobileNavBar.vue'
import PageFooter from '../components/PageFooter.vue'
import MobileDetect from 'mobile-detect/mobile-detect'
import PageBanner from '../components/PageBanner.vue'
</script>

<script>
export default {
    data() {
        return {
            md: new MobileDetect(window.navigator.userAgent)
        };
    },
    components: { PageBanner }
}
</script>

<template>
    <navbar v-if="md.mobile() == null" />
    <mobile-nav v-if="md.mobile() != null" />
    <page-banner title="Projects">I've worked on quite a few projects over the years, all of the notable ones being web-based. I actually no longer have access to quite a few "failed" projects, because if I didn't succeed in making whatever I was trying to make, I tended to nuke the source code. Big mistake, I know, but there's not much I can do about it now... Because of the non-existence of all failed projects, I don't have much to show on this page, But I'll show what I can. Also, if you're on the school's network, I'm pretty sure they blocked github.io, which is what my old site is hosted on. So if you see a couple "webpage failed to load" or something of a similar nature underneath here, just know that it's because the school is blocking it.</page-banner>
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
