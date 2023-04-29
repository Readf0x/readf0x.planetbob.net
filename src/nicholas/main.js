import { createApp } from 'vue'
import App from './App.vue'

import '../main.scss'
import './main.scss'
import '../components/NavButton.scss'
import '../components/NavSearch.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import 'highlight.js/scss/nord.scss'

createApp(App).mount('#app')

// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import 'dompurify/dist/purify'
import '/node_modules/js-cookie/dist/js.cookie'
