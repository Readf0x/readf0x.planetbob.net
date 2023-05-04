<script>
export default {
    data() {
        return {
            query: this.getQueryVariable('q'),
            index: json,
            results: {},
            ltg: "You are a worthless, bitch ass nigga. Your life literally is as valuable as a summer ant. I'm just gonna stomp you and you're gonna keep coming back, imma seal up all my cracks, you're gonna keep coming back. Why? Cause you smellin the syrup. You worthless bitch ass nigga.\n\nYou gonna stay on my dick until you die. You serve no purpose in life. Your purpose in life is to be on my stream sucking on my dick daily. Your purpose in life is to be in that chat blowing the dick daily.\n\nYour life is nothing, you serve zero purpose.\n\nYou should kill yourself, NOW.\n\nAnd give somebody else a piece of that oxygen, and ozone layer, that's covered up so that we can breathe inside this blue trash bubble.\n\nCause what are you here for? To worship me? Kill yourself. I mean that, with a 100%, with a 1000%. I've never seen somebody so worthless in my life. Im deadass. I've not seen such a more worthless nigga, in my life.\n\nIf he has kids? Oh my god, Imagine if a nigga like that has kids. Like imagine. Imagine if somebody like that actually has kids. I would feel so sorry for his children cause the nigga literally serves no fucking purpose.\n\nImagine a father, now we got lots of niggas with, wives and kids and shit that suck my dick daily on the internet. But imagine if this nigga actually had children. This nigga is devoting the time he could be spending with his kids, checking out a black man on stream, cucking over him relentlessly. It's crazy.\n\nI've never seen someone so relentless to be seen. Somebody, somebody, somebody's value so worthless that they'll come into a fucking stream, and keep coming in this bitch over and over and over and over and over and over again. We keep banning you. Nigga let me, let me, let's do you a favor.\n\nLet's go to the 99-cent store, let's pick out a rope together. I'm gonna give you an assisted suicide. Let's pick out a rope together right, and we're gonna take all the greatest troll clips, put a TV screen right in front of you. Im gonna hang that rope on top of the motherfucking garage.\n\nWe're gonna force feed you. Pry your eyes open. Probably dont need to do that cause you're already on my dick daily. We're gonna pry your eyes open, until you consistenly watch clips over and over and over and over and over again. Till you're gonna be like \"oh this is fucking torture\". You're gonna start going crazy, you're gonna start feeling crazy. Just, your eyes are gonna bleed, the retinas are gonna just start pouring out, pouring out blood and crack open veins, and the reitnas are just going to start engaging and bulging.\n\nThen im gonna grab that rope and say are you ready? And you're gonna say yes and im just gonna PULL IT. While you BEG me, BEG me and I mean BEG me to kill you. And choke you, choke the worthless life out of your sorry ass."
        }
    },
    mounted() {
        this.searchIndex()
        this.displayResults()
    },
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
            if(this.query == 'kys') {
                let title = document.createElement('a')
                title.innerHTML = 'Secret:'
                title.classList.add('result-title')
                div.appendChild(title)
                let itemWrapper = document.createElement('div')
                itemWrapper.classList.add('item-wrapper')
                let item = document.createElement('a')
                item.innerHTML = this.ltg
                item.classList.add('result-item')
                item.classList.add('ps-3')
                itemWrapper.appendChild(item)
                div.appendChild(itemWrapper)
            } else {
                for (const file in this.results) {
                    console.log(file)
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
                        if (file == 'Main') {
                            item.href = '/#:~:text=' + resultClean
                        } else {
                            item.href = '/' + file.toLowerCase() + '/#:~:text=' + resultClean
                        }
                        item.innerHTML = result + '...'
                        item.classList.add('result-item')
                        item.classList.add('ps-3')
                        itemWrapper.appendChild(item)
                        div.appendChild(itemWrapper)
                    })
                }
            }
        }
    }
    }
</script>

<script setup>
import json from '/public/markdown/markdown.json'
</script>

<template>
    <div class="search-results container-md">
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
    max-width: 500px;
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
