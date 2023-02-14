import { createApp } from 'vue'
import { store } from './store'
import './index.css'
import App from './App.vue'
import router from "./router/index"
import { plugin, defaultConfig } from '@formkit/vue'
import {dateCustomRule} from "./utility/dateCustomRule"


createApp(App).use(plugin, defaultConfig({
    rules:{dateCustomRule}
})).use(router).use(store).mount('#app')
  