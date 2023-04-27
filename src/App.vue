<script setup>
import NavBar from './components/NavBar.vue'
import MainHero from './components/MainHero.vue'
import PageFooter from './components/PageFooter.vue';
import MainAge from './components/MainAge.vue';
</script>

<template>
    <NavBar :hero="true" />
    <div class="content">
        <MainHero />
        <MainAge />
    </div>
    <PageFooter />
</template>
