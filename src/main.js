import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Page from '@/components/Pagination'
import { DatePicker, Breadcrumb, BreadcrumbItem, Form, Select, Option, Input, Button, Pagination, FormItem, Calendar, Dialog, Upload } from 'element-ui'
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
Vue.component(Dialog.name, Dialog)
Vue.component(Upload.name, Upload)
Vue.component(Page.name, Page)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  store,
  router
}).$mount('#app')
