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
    <form class="btn btn-search">
        <i class="bi bi-search" />
        <input class="form-control" type="text" placeholder="Search..." />
    </form>
</template>
