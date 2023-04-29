<script setup>
import NavButton from './NavButton.vue'
import NavSearch from './NavSearch.vue'
import Logo from './Logo.vue'
import Cookies from '/node_modules/js-cookie/dist/js.cookie'
</script>

<script>
export default {
    data() {
        return {
            scrollPosition: null,
            cookieClicker: 0
        };
    },
    props: {
        hero: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onScroll() {
            this.scrollPosition = window.scrollY
        },
        unHide() {
            try {
                document.querySelector(".easter-egg").classList.replace("easter-egg", "unhidden")
            // eslint-disable-next-line no-empty
            } catch (err) {}
            this.cookieClicker++
            if(this.cookieClicker > 4) {
                Cookies.remove('fatass')
            } else {
            console.log((5-this.cookieClicker).toString()+' clicks to go!~')
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
        if(this.hero) {document.querySelector(".navbar").style.position = "fixed"}
    }
}
</script>

<template>
    <nav class="navbar" :class="{ active: scrollPosition > 50 || !hero }">
        <logo />
        <div class="easter-egg" @click="unHide()">
            :3
        </div>
        <div>
            <nav-button icon="columns-gap" class="ms-2" link="/projects/">Projects</nav-button>
            <nav-button icon="info-circle" class="ms-2" link="/about/">About Me</nav-button>
            <nav-button icon="envelope" class="ms-2" link="/contact/">Contact</nav-button>
            <nav-search class="ms-2" />
        </div>
    </nav>
</template>

<style lang="scss">
@import '../node_modules/nord/src/sass/nord.scss';
    .easter-egg {
        color: transparent;
        &:hover {
            color: $nord10;
            cursor: none;
        }
    }
    .unhidden {
        color: $nord11;
    }
</style>
