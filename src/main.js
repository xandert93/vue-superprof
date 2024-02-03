import { createApp } from 'vue'

import App from './App'
import router from './router'

import Card from './components/ui/Card.vue'
import Button from './components/ui/Button.vue'
import Badge from './components/ui/Badge.vue'
import CircularProgress from './components/ui/CircularProgress.vue'
import Dialog from './components/ui/Dialog.vue'

const app = createApp(App)

app.use(router)

app.component('Card', Card)
app.component('Button', Button)
app.component('Badge', Badge)
app.component('CircularProgress', CircularProgress)
app.component('Dialog', Dialog)

app.mount('#app')
