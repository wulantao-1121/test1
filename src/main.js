import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { DatePicker, Breadcrumb, BreadcrumbItem, Form, Select, Option, Input, Button, Pagination, FormItem, Calendar } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.component(DatePicker.name, DatePicker)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Pagination.name, Pagination)
Vue.component(Calendar.name, Calendar)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
