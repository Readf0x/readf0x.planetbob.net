<script>
export default {
    data() {
        return {
            nav: document.querySelector(".navbar")
        }
    }
}
</script>

<template>
    <div class="hero">
        <div class="text container-md">
            <h1>Davis Forsythe</h1>
            <p>
                Front-end web development with a side of salt
            </p>
        </div>
        <div class="gradient"></div>
    </div>
</template>

<style lang="scss">
.hero {
    background-image: url('../assets/hero.png');
    background-size: cover;
    background-position: bottom;
    height: 65vh;
    display: grid;
    .text {
        align-self: center;
        justify-self: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        h1 {
            font-weight: 600;
            font-size: 96px;
            background: linear-gradient(90deg, #bf616a 25%, #5e81ac 75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        p {
            font-size: 32px;
        }
    }
    .gradient {
        position: absolute;
        align-self: flex-end;
        width: 100%;
        height: 15vh;
        background: linear-gradient(180deg, rgba(46, 52, 64, 0) 0%, #2e3440 100%);
    }
}
</style>
