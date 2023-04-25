<script setup>
import json from "/src/markdown/markdown.json";
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
        },
        searchIndex() {
            for(const item of this.index.About) {
                let element = document.createElement("p")
                element.innerHTML = item
                document.querySelector(".search-results").appendChild(element)
            }
        }
    },
    data() {
        return {
            query: this.getQueryVariable("q"),
            index: json
        }
    }
}
</script>

<template>
    <div class="search-results">
        <button @click="searchIndex()">fuckery</button>
        <p>{{ query }}</p>
    </div>
</template>
