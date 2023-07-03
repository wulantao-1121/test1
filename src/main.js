import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Form, Pagination, Input, Button, FormItem, Table, TableColumn, Popover, Tag, Message, Dialog, Upload, Select, Option, DatePicker } from 'element-ui'
import API from '@/api'
Vue.config.productionTip = false
Vue.component(Form.name, Form)
Vue.component(Pagination.name, Pagination)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(FormItem.name, FormItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Popover.name, Popover)
Vue.component(Tag.name, Tag)
Vue.component(Dialog.name, Dialog)
Vue.component(Upload.name, Upload)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Message.name, Message)
Vue.prototype.$API = API
Vue.prototype.$message = Message
new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
