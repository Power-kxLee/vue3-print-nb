/*
 * @Author: lee
 * @Date: 2021-05-10 16:20:49
 * @LastEditors: lee
 * @LastEditTime: 2021-05-11 11:19:14
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Print from './print'
const app = createApp(App)
app.use(Print)
app.mount('#app')
