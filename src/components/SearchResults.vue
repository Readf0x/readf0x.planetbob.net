<script setup>
import { marked } from 'marked'
</script>

<script>
export default {
    methods: {
        getQueryVariable(variable) {
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (const element of vars) {
                let pair = element.split("=");
                if (pair[0] === variable) {
                    return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
                }
            }
        }
    },
    data() {
        return {
            query: this.getQueryVariable("q")
        }
    },
    mounted() {
        fetch('../src/markdown/About.md')
            .then(response => response.text())
            .then(text => document.querySelector('.marked').innerHTML = marked.parse(text))
        
    }
}
</script>

<template>
    <div>
        <p>{{ query }}</p>
    </div>
    <div class='marked'>
    </div>
</template>
