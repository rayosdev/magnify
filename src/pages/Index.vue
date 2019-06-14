<template>
  <q-page>
    <TopPitch />
    <Recognition />
    <Gamefy />
    <Focus />


  </q-page>
</template>

<script>
import TopPitch from "../components/index/TopPitch"
import Recognition from "../components/index/Recognition"
import Gamefy from "../components/index/Gamefy"
import Focus from "../components/index/Focus"

export default {
  name: "PageIndex",
  components: {
    TopPitch,
    Recognition,
    Gamefy,
    Focus
  }
}
</script>

<style lang="stylus" scoped>

.q-page
  margin-bottom 100vh







</style>
