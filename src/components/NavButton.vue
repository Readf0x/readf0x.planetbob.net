<script>
export default {
    props: {
        icon: {
            type: String,
            default: "plus-square"
        },
        text: {
            type: String,
            default: "Button"
        },
        link: {
            type: String
        }
    },
}
</script>

<template>
<a class="btn btn-navbar" :href="link">
    <i :class='"bi-"+icon'></i> {{ text }}
</a>
</template>