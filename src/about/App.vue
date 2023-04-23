<script setup>
import NavBar from '../components/NavBar.vue'
import Marked from '../components/Marked.vue'
</script>

<template>
    <NavBar />
    <div class="content container-md">
        <Marked parse='About.md' />
    </div>
</template>
