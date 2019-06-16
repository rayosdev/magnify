<template>
  <q-page>
    <TopPitch />
    <Recognition />
    <Gamefy />
    <Focus />
    <Summary />
    <Footer />
    
    


  </q-page>
</template>

<script>
import TopPitch from "../components/index/TopPitch"
import Recognition from "../components/index/Recognition"
import Gamefy from "../components/index/Gamefy"
import Focus from "../components/index/Focus"
import Summary from "../components/index/Summary"

import Footer from "../components/Footer"


export default {
  name: "PageIndex",
  components: {
    TopPitch,
    Recognition,
    Gamefy,
    Focus,
    Summary,
    
    Footer,

 

  }
}
</script>

<style lang="stylus" scoped>

.q-page
  // margin-bottom 100vh


    

</style>
