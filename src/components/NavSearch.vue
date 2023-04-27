<script>
export default {
    methods: {
        searchRedir(data) {
            let url = new URL(window.location.href)
            if (!url.toString().endsWith('/')) {
                url += '/'
            }
            let params = new URLSearchParams(url.search)
            params.append('s', data)
        }
    }
}
</script>

<template>
    <form action="/search/" method="get" class="btn btn-search me-1">
        <button class="bi bi-search" type="submit" />
        <input class="form-control" name="q" placeholder="Search..." autocomplete="off" />
    </form>
</template>
