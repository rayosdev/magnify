<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';


export default {
  name: 'App',
  created(){
    AOS.init()
  }
}


</script>

<style>
</style>
