<template>
  <q-page>
    <TopPitch />
    <Recognition />
    <Gamefy />
    <Focus />
    <Summary />

    <footer class="footer-container">
      <div class="footer-container__center">

        <div class="logo-and-terms-container">
          <img class="logo-small" src="~assets/footer/logo-small.svg" alt="">
          <a class="terms-link" href="">view term of service</a>
        </div>
        <p class="signature">laget av isaksen tech</p>

      </div>
    </footer>


  </q-page>
</template>

<script>
import TopPitch from "../components/index/TopPitch"
import Recognition from "../components/index/Recognition"
import Gamefy from "../components/index/Gamefy"
import Focus from "../components/index/Focus"
import Summary from "../components/index/Summary"

import BaseButton from "../components/BaseButton"

export default {
  name: "PageIndex",
  components: {
    TopPitch,
    Recognition,
    Gamefy,
    Focus,
    Summary,

    BaseButton
  }
}
</script>

<style lang="stylus" scoped>

.q-page
  // margin-bottom 100vh

.footer-container
  background: linear-gradient(93.58deg, #050505 75.32%, #363636 99.49%);

  &__center
    height 283px
    margin 0 auto
    max-width $big-desktop-width
    display flex
    justify-content space-between
    align-items flex-end
    padding-bottom 30px 

.logo-and-terms-container
  display flex

.logo-small
  margin-right 40px

.terms-link
  font-family: Open Sans;
  font-weight: normal;
  font-size: 15.905px;
  line-height: 202.19%;
  letter-spacing: 0.11em;
  text-decoration-line: underline;

  color: #FFFFFF;

.signature
  font-family: Open Sans Italic;
  font-style: italic;
  font-weight: 300;
  font-size: 16.4858px;
  line-height: 167.69%;
  letter-spacing: 0.12em;
  color: #FFFFFF;

  opacity: 0.52;
  margin-bottom 0
    

</style>
