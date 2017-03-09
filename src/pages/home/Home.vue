<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Daedalus</h2>
    <router-link to="/person" >文章列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to daedalus App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
