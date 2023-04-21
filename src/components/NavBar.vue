<script setup>
import NavButton from './NavButton.vue'
import NavSearch from './NavSearch.vue'
import Logo from './Logo.vue'
</script>

<template>
    <nav class="navbar" :class="{ active: scrollPosition > 50 || !hero }">
        <logo />
        <div>
            <nav-button icon="columns-gap" class="ms-2">Projects</nav-button>
            <nav-button icon="info-circle" class="ms-2">About Me</nav-button>
            <nav-button icon="envelope" class="ms-2">Contact</nav-button>
            <nav-search class="ms-2" />
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            scrollPosition: null
        }
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
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    }
}
</script>
