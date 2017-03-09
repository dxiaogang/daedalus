<template>
  <div id="app">
    <HeaderView></HeaderView>
    <LoadingView :show="loadingShow"></LoadingView>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderView from './components/HeaderView.vue'
  import LoadingView from './components/LoadingView.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {
      HeaderView,
      LoadingView
    },
    data() {
      return {
        firstShow: true,
        show: false
      }
    },
    computed: {
      ...mapState([
        'loadingShow'
      ])
    },
    methods: {
      isShow() {
        this.show = !this.show
      },
      hideDetail() {
        this.detailShow = false
      }
    }
  }
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#imge {
  width: 100px;
  height: 100px;
}
</style>
