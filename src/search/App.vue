<script setup>
import NavBar from '../components/NavBar.vue'
import PageFooter from '../components/PageFooter.vue';
import SearchResults from '../components/SearchResults.vue';
</script>

<template>
    <NavBar />
    <div class="content container-md">
        <SearchResults />
    </div>
    <PageFooter />
</template>
