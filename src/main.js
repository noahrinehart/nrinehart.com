import Vue from 'vue'

import App from './App/index.vue'

import './assets/sass/main.scss'
import './assets/css/animate.css'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
