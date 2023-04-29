<script setup>
import Cookies from '/node_modules/js-cookie/dist/js.cookie'
</script>

<script>
export default {
    methods: {
        eatYourCookieFatassBecauseImDeletingTheButton() {
            Cookies.set('fatass', true)
            location.reload()
        }
    }
}
</script>

<template>
    <div class="nicholas container">
        <p class="p-3">Here you go, fatass. Here's your fucking dropdown menu. Are you happy now? Are you jumping for joy? Good. Because you only get to use it once. Fuck you. Pick wisely.</p>
        <div class="dropdown">
            <button class="btn btn-navbar dropdown-toggle" type="button" data-bs-toggle="dropdown" :disabled="Cookies.get('fatass') == 'true'" aria-expanded="false">
                Dropdown Menu
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="eatYourCookieFatassBecauseImDeletingTheButton()">That's right,</a></li> <!-- ʕ •ᴥ•ʔ -->
                <li><a class="dropdown-item" @click="eatYourCookieFatassBecauseImDeletingTheButton()">you only get</a></li>  <!-- =^._.^= ∫ -->
                <li><a class="dropdown-item" @click="eatYourCookieFatassBecauseImDeletingTheButton()">to click one.</a></li> <!-- ₍ᐢ･ܫ･ᐢ₎ -->
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '../node_modules/nord/src/sass/nord.scss';

.nicholas {
    display: flex;
    flex-direction: column;
    .dropdown {
        align-self: center;
        align-items: center;
        justify-content: center;
        display: flex;
        height: 40vh;
    }
}
.dropdown-toggle::after {
    position: relative;
    top: .14em;
    &:active {
        background-color: $nord3 !important;
    }
}
.dropdown-menu {
    background-color: $nord0 !important;
    border-color: $nord4 !important;
    border-radius: 20px !important;
    overflow: hidden;
    .dropdown-item {
        color: $nord6;
        &:hover {
            background-color: $nord3;
            color: $nord4;
        }
    }
}
</style>
