<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"

export default {
  name: 'App',
  created(){
    AOS.init()
  }
}

// Vue.directive('test', {
//   bind(el, binding, vnode){
//     el.style.color = "red"
//   }
// })
</script>

<style>
</style>
