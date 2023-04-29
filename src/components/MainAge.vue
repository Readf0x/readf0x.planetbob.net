<script>
export default {
    data() {
        return {
            dateTime: this.age()
        }
    },
    methods: {
        age() {
            let today = new Date(Date.now() - 1163167265000)
            // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            return today.getSeconds()+" seconds, "+today.getMinutes()+" minutes, "+today.getHours()+" hours, "+today.getDate()+" days, "+today.getMonth()+" months, "+(today.getFullYear() - 1970)+" years"
        }
    },
    mounted() {
        setInterval(() => {
            this.dateTime = this.age()
        }, 1000);
    }
}
</script>

<template>
    <div class="age-timer container-md">
        <div class="left">As you are reading this, I am currently</div>
        <div class="big">{{ dateTime }}</div>
        <div class="right">old.</div>
        <div class='small'>(Closest estimate)</div>
    </div>
</template>

<style lang="scss">
@import '../node_modules/nord/src/sass/nord.scss';

.age-timer {
    align-self: center;
    font-size: 24px;
    // width: 60vw;
    display: flex;
    flex-direction: column;
    .big {
        font-family: 'Roboto Mono', monospace;
        align-self: center
    }
    .left {
        padding-left: 5%;
    }
    .right {
        align-self: flex-end;
        padding-right: 5%;
    }
    .small {
        align-self: center;
        font-size: .4em;
        color: $nord3;
        font-style: italic;
    }
}
</style>