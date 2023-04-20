<script setup>
import navitem from './NavButton.vue'
import logo from './Logo.vue'
import search from './NavSearch.vue'
</script>

<template>
    <nav class="navbar">
        <logo />
        <div>
            <navitem icon="columns-gap" class="ms-2">Projects</navitem>
            <navitem icon="info-circle" class="ms-2">About Me</navitem>
            <navitem icon="envelope" class="ms-2">Contact</navitem>
            <search class="ms-2" />
        </div>
    </nav>
</template>
