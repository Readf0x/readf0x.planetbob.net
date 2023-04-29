<template>
    <div class="nicholas">
        <p>And for my friend nicholas, here's a dropdown menu:</p>
        <div class="dropdown">
            <button class="btn btn-navbar dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown Menu
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">ʕ •ᴥ•ʔ</a></li>
                <li><a class="dropdown-item" href="#">=^._.^= ∫</a></li>
                <li><a class="dropdown-item" href="#">₍ᐢ･ܫ･ᐢ₎</a></li>
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
