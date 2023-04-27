<script>
import { nextTick } from 'vue'

export default {
    data() {
        return {
            dateTime: Date.now()
        }
    },
    methods: {
        age() {
            let today = new Date()
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            this.dateTime = date+' '+time
        }
    },
    mounted() {
        nextTick(() => {
            this.dateTime = Date.now()
        })
    }
}
</script>

<template>
    <div class="age-timer">
        <div class="left">As you are reading this, I am currently</div>
        <!-- TODO: complete date function -->
        <div class="big">{{ dateTime }}</div>
        <div class="right">old.</div>
    </div>
</template>

<style lang="scss">
    .age-timer {
        align-self: center;
        font-size: 24px;
    }
</style>