<template>
    <div class="simple-container">
      <div id="link-target-gamefy" style="position:relative; top: -310px"></div>
      <div class="simple-container__center simple">

        
        <div class="header-card-container">
          <div 
            class="header-card"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-anchor-placement="top-center"
          >
            <img class="header-card__image" src="~assets/simple/screens-image.jpg" alt="">
            <div class="header-card__title-background">
              <h1 class="header-card__title-text">Enkelt å tilpasse </h1>
            </div>
          </div>
          <p class="header-card__byline">
              Skreddersy løsninger som passer deres arbeidsplass
          </p>
        </div>
        
        <div class="simple-article__container">
          <img class="simple-article__testris-graphic" src="~assets/simple/testris-blocks.svg" alt="">
          <p class="simple-article__paragraph">
            Vi er opptatt av at MAGNIFY skal være et “less is more” produkt. Derfor har vi valgt å kutte ned innhold som ikke gir verdi til brukeren. På den måten kan vi levere et produkt til en god pris, samtidig som vi etterlever våre kjerneverdier: Mer motivasjon, bedre fokus og økt effektivitet. 
          </p>
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
            <p class="final-pitch__contact-paragraph">
              I et uforpliktende møte med en av våre spesialister kan vi se nærmere på hvordan dette kan integreres på deres arbeidsplass. 
            </p>

            <router-link 
              to="/contact-support"    
              class="final-pitch__contact-button" 
            >
              <BaseButton
                class="final-pitch__contact-button" 
                color="#8F2D27"
                bgColor="#fff"
                hoverColor="#FF948D"
                lipColor="#050505"
                text="Ta Kontakt"
              />
            </router-link>
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
    name: "Simple",
    components: {
      BaseButton
    }
}
</script>

<style lang="stylus" scoped>


.simple-container
  background: #333333;

  &__center
    min-height: 1650px;
    margin 0 auto
    max-width $big-desktop-width
    display grid
    grid-template-columns 1fr 1fr
    height 100%


  &__cutout-up
    // border solid 3px #00f
    grid-row 1/2
    grid-column 1/3
    justify-self center
    position relative
    top -50px



.header-card-container
  // position relative
  // margin-left 40px
  grid-row 1/2
  grid-column 2/3
  justify-self end
  margin-right 60px
  position relative
  top -25px

.header-card
  width 550px
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display grid

  &__image
    grid-row 1/2
    grid-column 1/2
    min-height 366px
    width 100%

  &__title-background
    grid-row 1/2
    grid-column 1/2
    height 150px
    width 100%
    background rgba(248, 75, 64, 0.756)
    align-self end
    display flex
    justify-content center
    align-items center

  &__title-text
    font-family: Sansation;
    font-style: normal;
    font-weight: bold;
    font-size: 30.5642px;
    line-height: 34px;
    letter-spacing: 0.075em;
    text-transform: uppercase;

    color: #FFFFFF

  &__byline
    font-family: Open Sans;
    font-weight: normal;
    font-size: 23px;
    line-height: 167.69%;
    letter-spacing: 0.055em;

    color: #FFFFFF;

    width 550px
    text-align center
    padding 0 20px
    margin-top 50px

    grid-row 2/3




.simple-article

  &__container
    grid-row 1/2
    grid-column 1/2

    max-width 490px

    justify-self center
    display grid
    grid-template-rows 1fr 3fr
    margin-top 30%

  &__testris-graphic
    justify-self center
    align-self center

  &__paragraph

    justify-self start

    font-family: Open Sans;
    font-weight: normal;
    font-size: 15.905px;
    line-height: 229.69%;
    text-align: center;
    letter-spacing: 0.11em;

    color: #FFFFFF;


.final-pitch__container
  grid-column 1/3
  grid-row 2/3
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
    font-size: 15.905px;
    line-height: 229.69%;text-align: center;
    letter-spacing: 0.11em;

    color: #FFFFFF;


  &__contact-paragraph
    grid-column 1/2
    grid-row 1/2
    margin-top -50px
    max-width: 460px
    max-height 150px

  &__contact-button
    grid-column 1/2
    grid-row 1/2
    margin-top 120px
    align-self start
    justify-self center
    width 220px
    height 61px



</style>