<!--
 * @Author: lee
 * @Date: 2021-05-10 16:20:49
 * @LastEditors: lee
 * @LastEditTime: 2021-05-11 14:21:22
 * @Description: file content
-->
<template>

  <div id="printMe">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
  <button v-print="printSetting">打印</button>
  <div v-show="pringLoading"> loading....</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      pringLoading: false,
      printSetting: {
        id: 'printMe',
        beforeOpenCallback (vue) {
          vue.pringLoading = true
        },
        openCallback (vue) {
        },
        closeCallback (vue) {
          vue.pringLoading = false
        }
      },
      count: 0
    }
  }
}
</script>
