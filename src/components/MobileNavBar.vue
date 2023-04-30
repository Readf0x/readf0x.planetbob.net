<script setup>
import NavButton from './NavButton.vue'
import NavSearch from './NavSearch.vue'
import Logo from './Logo.vue'
import Cookies from '/node_modules/js-cookie/dist/js.cookie'
</script>

<script>
export default {
    data() {
        return {
            scrollPosition: null,
            cookieClicker: 0,
            menu: false
        }
    },
    props: {
        hero: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onScroll() {
            this.scrollPosition = window.scrollY
        },
        unHide() {
            try {
                document.querySelector('.easter-egg').classList.replace('easter-egg', 'unhidden')
                // eslint-disable-next-line no-empty
            } catch (err) {}
            this.cookieClicker++
            if (this.cookieClicker > 4) {
                Cookies.remove('fatass')
            } else {
                console.log((5 - this.cookieClicker).toString() + ' clicks to go!~')
            }
        },
        showMenu() {
            this.menu = !this.menu
            
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
        if (this.hero) {
            document.querySelector('.navbar').style.position = 'fixed'
        }
    }
}
</script>

<template>
    <nav class="navbar" :class="{ active: scrollPosition > 50 || !hero }">
        <logo />
        <div class="easter-egg" @click="unHide()">:3</div>
        <div>
            <button class="nav-menu" @click="showMenu()"><i class="bi bi-filter-right"></i></button>
        </div>
    </nav>
    <div v-if="menu" class="buttons btn-group-vertical" style="position: fixed;">
        <nav-button icon="columns-gap" link="/projects/">Projects</nav-button>
        <nav-button icon="info-circle" link="/about/">About Me</nav-button>
        <nav-button icon="envelope" link="/contact/">Contact</nav-button>
        <nav-search />
    </div>
</template>

<style lang="scss">
@import '../node_modules/nord/src/sass/nord.scss';
@keyframes expand {
    0%{top: -200px}
    100%{top: 0;}
}
.easter-egg {
    color: transparent;
    &:hover {
        color: $nord10;
        cursor: none;
    }
}
.unhidden {
    color: $nord11;
}
.nav-menu {
    background: none;
    border: none;
    color: $nord4;
    height: 43px;
    transition: color 0.1s;
    &:active {
        color: $nord6;
    }
    .bi {
        font-size: 32px;
    }
}
.buttons {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    z-index: 2;
    right: 0;
    animation: expand 0.5s;
    .btn {
        width: 100%;
    }
}
</style>
