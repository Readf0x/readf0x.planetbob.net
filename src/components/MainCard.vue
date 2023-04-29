<script>
export default {
    props: {
        image: {
            type: String,
            default: 'defaultCard.jpg'
        }
    }
}
</script>

<template>
    <div class="card mx-3">
        <img :src="'/src/assets/' + image" :alt="image" />
        <div class="card-body">
            <p class="card-text"><slot>I love my pussycat &gt;w&lt;</slot></p>
        </div>
    </div>
</template>

<style lang="scss">
@import '../node_modules/nord/src/sass/nord.scss';

.card {
    max-width: fit-content;
    background-color: $nord1 !important;
    border-radius: 20px !important;
    img {
        height: 250px;
        min-width: 187.5px;
        max-width: 350px;
        object-fit: cover;
    }
    .card-body {
        text-align: center;
    }
}
</style>
