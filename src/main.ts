import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
const app = createApp(App)

app.use(PrimeVue)
app.component('DataTable', DataTable)
app.mount('#app')
