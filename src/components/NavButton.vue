<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'plus-square'
        },
        link: {
            type: String
        }
    }
}
</script>

<template>
    <a class="btn btn-navbar" :href="link"><i :class="'bi bi-' + icon"></i> <slot>Button</slot></a>
</template>
