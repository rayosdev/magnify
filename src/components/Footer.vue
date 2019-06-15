<template>
    <footer class="footer-container">
      <div class="footer-container__center">

        <div class="logo-and-terms-container">
          <img class="logo-small" src="~assets/footer/logo-small.svg" alt="">
          <a class="terms-link" href="">view term of service</a>
        </div>
        <p class="signature">laget av isaksen tech</p>

      </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>

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