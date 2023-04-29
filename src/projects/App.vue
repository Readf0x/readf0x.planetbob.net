<script setup>
import Marked from '../components/Marked.vue'
import NavBar from '../components/NavBar.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>
    <NavBar />
    <div class="content container-md">
        <Marked parse="Projects.md" />
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
