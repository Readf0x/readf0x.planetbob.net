<script setup>
import Marked from '../components/Marked.vue'
import NavBar from '../components/NavBar.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>
    <NavBar />
    <div class="content container-md">
        <Marked parse="/markdown/License.md" />
    </div>
    <PageFooter />
</template>
