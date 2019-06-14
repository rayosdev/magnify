<template>
  <q-page>
    <TopPitch />
    <Recognition />
    <div class="gamefy-container">
      <div class="gamefy-section__top-cutout top-cutout">
        <div class="top-cutout__left-background"></div>
        <div class="top-cutout__center-background"></div>
        <div class="top-cutout__right-background"></div>
      </div>

      <div class="gamefy-container__center">
        <img src="~assets/gamefy/arrow-down.svg" alt="">
      </div>
    </div>
    

  </q-page>
</template>

<script>
import TopPitch from "../components/index/TopPitch"
import Recognition from "../components/index/Recognition"

export default {
  name: "PageIndex",
  components: {
    TopPitch,
    Recognition
  }
}
</script>

<style lang="stylus" scoped>

.q-page
  margin-bottom 100vh



.gamefy-container
  height: 1300px;

  background: #333333;

.top-cutout
  display grid
  grid-template-columns auto minmax(100px,max-content) auto
  height 90px


  &__left-background
    grid-row 1/2
    grid-column 1/2
    width 100%
    height 100%
    background: linear-gradient(180deg, #B63830 0%, #C23B33 100%);

  &__center-background
    grid-row 1/2
    grid-column 2/3
    width $big-desktop-width
    height 100%
    background: linear-gradient(180deg, #B63830 0%, #C23B33 100%);
    mask url('../assets/gamefy/cutout-mask-down.svg')
    mask-size cover auto

  &__right-background
    grid-row 1/2
    grid-column 3/4
    width 100%
    height 100%
    background: linear-gradient(180deg, #B63830 0%, #C23B33 100%);


  &__center
    margin 0 auto
    max-width $big-desktop-width
    display grid
    grid-template-columns 1fr 1fr

</style>
