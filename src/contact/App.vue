<script setup>
import NavBar from '../components/NavBar.vue'
import Marked from '../components/Marked.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>
    <NavBar />
    <div class="content container-md">
        <Marked parse="Contact.md" />
    </div>
    <PageFooter />
</template>
