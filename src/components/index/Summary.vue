<template>
    <div class="container">
      <div id="link-target-summary"></div>
      <div class="container__center">

        <img class="cutout-up" src="~assets/summary/cutout-up.svg" alt="">
        <img
          data-aos="zoom-out-left"
          data-aos-offset="500" 
          class="arrow" 
          src="~assets/summary/arrow.svg" 
          alt=""
        >

        <div class="top-article__container">
          <h1 class="top-article__header">Magnify</h1>
          <p class="top-article__paragraph">
            Gir teamet ditt anarkjendelse og fokus igjennom verktøy som gamefikasjon
          </p>
        </div>

        <div class="summary-card__container">

          <div class="summary-card summary-card--card1">
            <img class="summary-card__icon" src="~assets/summary/achivement-magaglass-icon.svg" alt="">
            <h2 class="summary-card__header">
              anarkjenelse
            </h2>
            <p class="summary-card__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <a class="summary-card__link" href="link-target-recognition">Se mer</a>
            </p>
          </div>
          
          <div class="summary-card summary-card--card2">
            <img class="summary-card__icon" src="~assets/summary/gamefication-icon.svg" alt="">
            <h2 class="summary-card__header">
              Gamefikasjon
            </h2>
            <p class="summary-card__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <a class="summary-card__link" href="link-target-gamefy">Se mer</a>
            </p>
          </div>
          
          <div class="summary-card summary-card--card3">
            <img class="summary-card__icon" src="~assets/summary/focus-icon.svg" alt="">
            <h2 class="summary-card__header">
              Fokus
            </h2>
            <p class="summary-card__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <a class="summary-card__link" href="link-target-focus">Se mer</a>
            </p>
          </div>

        </div>

        <div class="final-pitch__container">
          <img 
            data-aos="fade-up-right"
            data-aos-offset="500"
            class="final-pitch__decorations-left" 
            src="~assets/summary/block-decorations-pillers-left.svg" 
            alt=""
            >
          <div class="final-pitch__content-container">
            <p class="final-pitch__product-paragraph">
              Se ditaljer om produktet 
              <a 
                class="final-pitch__product-paragraph-link" 
                href="#link-target-"
              >her</a>
            </p>
            <p class="final-pitch__contact-paragraph">
              For å sett opp en avtale eller få mer dikrekte info 
            </p>
            <BaseButton
              class="final-pitch__contact-button" 
              color="#fff"
              bgColor="#050505"
              hoverColor="#818181"
              lipColor="#F84B40"
              text="Ta Kontakt"
            />
          </div>
          <img
            data-aos="fade-up-left"
            data-aos-offset="500"
            class="final-pitch__decorations-right" 
            src="~assets/summary/block-decorations-pillers-right.svg" 
            alt=""
            >
        </div>

      </div>
    </div>
</template>

<script>
import BaseButton from "../../components/BaseButton"

    export default {
        name: "Summary",

        components: {
            BaseButton
        }
    }
</script>

<style lang="stylus" scoped>

  
#link-target-summary
  // border solid 43px #00f
  top -300px
  position relative
  

.container  
  background: linear-gradient(180deg, #C13B33 0%, #8F2D27 34.68%);

  &__center
    position relative
    margin 0 auto
    height: 1840.18px;
    max-width $big-desktop-width
    
    display grid
    grid-template-columns 1fr 1fr
    grid-template-rows 1fr 3fr 2fr


.cutout-up
  grid-row 1/2
  grid-column 2/3
  justify-self center
  position relative
  top -65px
  left -60px

.arrow
  grid-row 1/2
  grid-column 2/3
  justify-self center
  position relative
  top -15px
  left -200px


.top-article

  &__container
    grid-row 1/2
    grid-column 1/3
    justify-self center
    margin-top 30px
    margin-bottom 200px

  &__header
    font-family: Sansation;
    font-weight: bold;
    font-size: 38.3561px;
    line-height: 43px;
    text-align: center;
    letter-spacing: 0.075em;
    text-transform: uppercase;

    color: #FFFFFF;

  &__paragraph
    font-family: Open Sans;
    font-size: 23px;
    line-height: 167.69%;
    text-align: center;
    letter-spacing: 0.055em;

    color: #FFFFFF;

    margin-top 70px
    max-width 460px

.summary-card__container
  grid-column 1/4
  grid-row 2/3
  align-self start
  margin 0 70px
  display grid

.summary-card
  display grid
  grid-template-columns 0.5fr 2fr 4fr
  grid-gap 20px
  margin-bottom 100px

  &__icon
    grid-row 1/2
    grid-column 1/2


  &__header
    grid-row 1/2
    grid-column 2/3
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 33.76px;
    line-height: 41px;
    letter-spacing: 0.075em;
    text-transform: uppercase;

    color: #FFFFFF;
    margin-top 0
    margin-right 40px

  &__paragraph
    grid-row 1/2
    grid-column 3/5

    font-family: Open Sans;
    font-size: 15.905px;
    line-height: 202.19%;

    letter-spacing: 0.11em;

    color: #FFFFFF;

  &__link
    display block
    width 100px
    font-family: Open Sans;
    font-weight: bold;
    font-size: 15.905px;
    line-height: 202.19%;

    letter-spacing: 0.11em;
    text-decoration-line: underline;

.final-pitch__container
  grid-column 1/4
  grid-row 3/4
  display grid
  justify-self center


.final-pitch

  &__decorations-left
    grid-column 1/2
    grid-row 1/2

  &__decorations-right
    grid-column 3/4
    grid-row 1/2

  &__content-container
    grid-column 2/3
    grid-row 1/2
    display grid
    height 100%
    box-sizing: border-box

    margin 0 11vw
    margin-top 20px
    align-self start

    font-family: Open Sans;
    font-weight: normal;
    font-size: 23px;
    line-height: 167.69%;
    text-align: center;
    letter-spacing: 0.055em;

    color: #FFFFFF;

  &__product-paragraph

    &-link
      font-weight: bold;
      text-decoration-line: underline;

  &__contact-paragraph
    margin-top -50px
    max-width: 460px

  &__contact-button
    margin-top -120px
    align-self start
    justify-self center
    width 220px
    height 61px

</style>