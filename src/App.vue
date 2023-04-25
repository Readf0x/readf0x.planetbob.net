<script setup>
import NavBar from './components/NavBar.vue'
import MainHero from './components/MainHero.vue'
import PageFooter from './components/PageFooter.vue';
</script>

<template>
    <NavBar :hero="true" />
    <div class="content">
        <MainHero />
        <PageFooter />
    </div>
</template>
