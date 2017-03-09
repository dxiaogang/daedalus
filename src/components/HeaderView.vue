<template>
  <mt-header title="这是标题">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
</template>

<script>
import { Header } from 'mint-ui'
import Vue from 'vue'
Vue.component(Header.name, Header)

export default {

}
</script>

<style lang="css">
</style>
