<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { marked } from 'marked';
</script>
<script>
export default {
    mounted() {
        fetch('../src/markdown' + this.parse)
            .then(response => response.text())
            .then(text => document.querySelector('.marked').innerHTML = marked.parse(text))
        // document.querySelector('head-wrapper')
        
    },
    props: {
        parse: {
            type: String,
            default: '404.md'
        }
    }
}
</script>

<template>
    <div class="marked">
    </div>
</template>