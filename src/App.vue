<script setup>
import Navbar from './components/NavBar.vue'
import Hero from './components/MainHero.vue'
import PageFooter from './components/PageFooter.vue'
import Age from './components/MainAge.vue'
import Marked from './components/Marked.vue'
import Cards from './components/MainSpot.vue'
</script>

<template>
    <navbar :hero="true" />
    <div class="content">
        <hero />
        <div class="welcomer container-md">
            <marked parse="Welcomer.md" />
        </div>
        <age />
        <cards />
    </div>
    <page-footer />
</template>
