<script>
export default {
    methods: {
        getQueryVariable(variable) {
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (const element of vars) {
                let pair = element.split("=");
                if (pair[0] === variable) {
                    return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
                }
            }
        }
    }
}
</script>

<template>
    <div class=" container-md">
        <p>{{ getQueryVariable("q") }}</p>
    </div>
</template>
