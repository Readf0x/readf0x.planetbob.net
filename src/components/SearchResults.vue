<script>
export default {
    methods: {
        getQueryVariable(variable) {
            let query = window.location.search.substring(1)
            let vars = query.split('&')
            for (const element of vars) {
                let pair = element.split('=')
                if (pair[0] === variable) {
                    return decodeURIComponent(pair[1].replace(/\+/g, '%20'))
                }
            }
        },
        clamp(num, min, max) {
            return Math.min(Math.max(num, min), max)
        },
        searchIndex() {
            for (const file in this.index) {
                this.results[file] = []
                this.index[file].forEach((line) => {
                    // let resultIndex = line.search(new RegExp(`${this.query}`, "gi"))
                    let splitLine = line.split(' ')
                    let resultIndex = splitLine.findIndex((reg) => {
                        // console.log(reg)
                        return new RegExp(`${this.query}`, 'gi').test(reg)
                    })
                    console.log(resultIndex)
                    if (resultIndex > -1) {
                        // this.results.push(line.slice(this.clamp(resultIndex - 40, 0, line.length), this.clamp(resultIndex + this.query.length + 40, 0, line.length)))
                        this.results[file].push(
                            splitLine
                                .slice(
                                    this.clamp(resultIndex - 6, 0, splitLine.length),
                                    this.clamp(resultIndex + 8, 0, splitLine.length)
                                )
                                .join(' ')
                        )
                    }
                })
                if (this.results[file].length == 0) {
                    delete this.results[file]
                }
            }
        },
        displayResults() {
            let div = document.querySelector('.result-list')
            for (const file in this.results) {
                let title = document.createElement('a')
                if (file == 'Main') {
                    title.href = '/'
                } else {
                    title.href = '/' + file.toLowerCase() + '/'
                }
                title.innerHTML = file + ':'
                title.classList.add('result-title')
                div.appendChild(title)
                this.results[file].forEach((result) => {
                    let resultClean = result
                        .split(':')[0]
                        .replace(/,/g, '%2C')
                        .replace(/'/g, '%27')
                        .replace(/"/g, '%22')
                        .replace(/\./g, '%2E')
                    let itemWrapper = document.createElement('div')
                    itemWrapper.classList.add('item-wrapper')
                    let item = document.createElement('a')
                    item.href = '/' + file.toLowerCase() + '/#:~:text=' + resultClean
                    item.innerHTML = result + '...'
                    item.classList.add('result-item')
                    item.classList.add('ps-3')
                    itemWrapper.appendChild(item)
                    div.appendChild(itemWrapper)
                })
            }
        }
    },
    data() {
        return {
            query: this.getQueryVariable('q'),
            index: json,
            results: {}
        }
    },
    mounted() {
        this.searchIndex()
        this.displayResults()
    }
}
</script>

<script setup>
import json from '/public/markdown/markdown.json'
</script>

<template>
    <div class="search-results">
        <h2>Search results for: "{{ query }}"</h2>
        <!-- <p>{{ results }}</p> -->
        <div class="result-list"></div>
    </div>
</template>

<style lang="scss">
@import '../node_modules/nord/src/sass/nord.scss';

.result-title {
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
}
.item-wrapper {
    width: 50%;
    border-top: 1px solid $nord3;
    .result-item {
        display: block;
        color: inherit;
        text-decoration: none;
        width: fit-content;
        &:hover {
            color: $nord4;
        }
    }
}
</style>
