<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import hljs from 'highlight.js'
import { marked } from 'marked'
</script>
<script>
export default {
    data() {
        return {
            markedData: ''
        }
    },
    props: {
        parse: String
    },
    mounted() {
        fetch('/src/markdown/' + this.parse)
            .then((response) => response.text())
            .then((text) => {
                document.querySelector('.marked').innerHTML = marked.parse(text)
                this.markedData = marked.parse(text)
                hljs.highlightAll()
            })
    }
}
</script>

<template>
    <div class="marked"></div>
    <!-- <div class='test'>{{ markedData }}</div> -->
</template>

<style lang="scss">
@import '../node_modules/nord/src/sass/nord.scss';

.head-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px 40px 10px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    .head {
        font-weight: 800;
    }
    .subhead {
        font-weight: 400;
        font-style: italic;
        color: #4c566a;
        word-break: break-all;
    }
    .green {
        color: #a3be8c;
        position: relative;
        bottom: 0.1em;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }
    .blue {
        color: #88c0d0;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }
}
pre {
    border-radius: 20px;
    width: fit-content;
    code {
        background-color: $nord1 !important;
        width: fit-content;
    }
}
</style>
