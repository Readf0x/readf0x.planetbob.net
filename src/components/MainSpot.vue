<script setup>
import Card from './MainCard.vue'
</script>

<template>
    <div class="cards-content-wrapper container-md">
        <div class="cards-title ps-3">
            <h2>My Pride and Joy</h2>
        </div>
        <div class="cards-scroll-wrapper" style="overflow-x: scroll;">
            <div class="cards-wrapper" style="width: max-content">
                <card image="20221127_170721.avif">He is in his natural<br />habitat</card>
                <card image="PXL_20210214_184243047.avif"
                    >He is <i>NOT</i> in his natural habitat</card
                >
                <card image="IMG_20200621_092356.avif">Chillin in the<br />dishie squasher</card>
                <card image="PXL_20210304_160430798.avif">My goofy ahh boy</card>
                <card image="PXL_20220826_014932812.avif"><i>Staaaare</i></card>
                <card image="PXL_20220808_024011052.avif">He eepy</card>
                <card image="PXL_20211113_205854162.avif">He had to go the<br />doctor 😢</card>
            </div>
        </div>
    </div>
</template>
