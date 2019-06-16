<template>
    <div class="gamefy-container">
      <div id="link-target-gamefy" style="position:relative; top: -310px"></div>
      <div class="gamefy-section__top-cutout top-cutout">
        <div class="top-cutout__left-background"></div>
        <div class="top-cutout__center-background"></div>
        <div class="top-cutout__right-background"></div>
      </div>

      <div class="gamefy-container__center gamefy">
        <img class="gamefy__cutout-up" src="~assets/gamefy/cutout-up-gamefication.svg" alt="">

        <img class="gamefy__arrow-down" src="~assets/gamefy/arrow-down.svg" alt="">
        
        <div class="gamefy__head-container">
          <h3 class="gamefy__head-header">
            Hvorfor bruker vi gamification? 
          </h3>
          <p class="gamefy__head-paragraph">
            Enten vi vil det eller ei, er vi daglig omringet av gamification. Vi fostår at gamification, uansett hvilken arena, har en positiv effekt for forbrukeren i henhold til økt insentiv til å prestere bedre. 
          </p>
        </div>

        <div class="gamefy__card-container">

          <div 
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-anchor-placement="top-center" 
            class="gamefy__card"
            >
            <h2 class="gamefy__card-header">Progresjon</h2>
            <img class="gamefy__card-image" src="~assets/gamefy/progress-bar.svg" alt="">
            <p class="gamefy__card-paragraph">
              Et kjent sitat sier “When performance is measured, performance improves”. Vi er interessert i å effektivisere medarbeiderne og har derfor gjort det enkelt å holde oversikt over frengangen, enten det er på -individ, -team eller bedriftsnivå. 
            </p>
          </div>
          
          <div 
            data-aos="fade-down"
            data-aos-offset="250"
            data-aos-anchor-placement="top-center" 
            class="gamefy__card"
            >
            <h2 class="gamefy__card-header">Konkurranser</h2>
            <img class="gamefy__card-image" src="~assets/gamefy/competition-cars.svg" alt="">
            <p class="gamefy__card-paragraph">
              Våre kjerneverdier handler om å skape mer motivasjon, bedre fokus og økt prodoktivitet. Med disse verdiene i tankene har vi skreddersydd konkurransemulighetene i MAGNIFY til å komplimentere nettopp disse verdiene, og styrer vekk fra konkurranseformer som ødelegger for disse verdiene. 
            </p>
          </div>
          
          <div 
            data-aos="fade-down"
            data-aos-offset="400"
            data-aos-anchor-placement="top-center" 
            class="gamefy__card"
            >
            <h2 class="gamefy__card-header">Markeringer</h2>
            <img class="gamefy__card-image" src="~assets/gamefy/medal-runner.svg" alt="">
            <p class="gamefy__card-paragraph">
              Vi har et ekslusivt sett med markeringen som gir medarbeiderne tydlige milepæler å jobbe etter. “EarlyBird-markeringen” er et eksempel hvor medarbeideren blir belønnet for å ha fått inn et salg før et klokkeslett satt av teamleder.
            </p>
          </div>
        
        </div>
      
        <img class="gamefy__cutout-down" src="~assets/gamefy/cutout-down.svg" alt="">

      </div>
    </div>
</template>

<script>
    export default {
        name: "Gamefy"
    }
</script>

<style lang="stylus" scoped>

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
    // mask url('../../assets/gamefy/cutout-mask-down.svg')
    // mask-size cover auto

  &__right-background
    grid-row 1/2
    grid-column 3/4
    width 100%
    height 100%
    background: linear-gradient(180deg, #B63830 0%, #C23B33 100%);

.gamefy-container
  background: #333333;

  &__center
    min-height: 1150px;
    margin 0 auto
    max-width $big-desktop-width
    display grid
    grid-template-columns 1fr 1fr
    height 100%

.gamefy

  &__cutout-up
    // border solid 3px #00f
    grid-row 1/2
    grid-column 1/3
    justify-self center
    position relative
    top -50px


  &__head-container
    grid-row 1/2
    grid-column 1/3

    width 490px
    justify-self center
    // margin-top -10px
    display grid

    align-content start
    padding-top 20px
    z-index 10

    font-family: Open Sans;
    font-size: 16px
    line-height: 229.69%;

    text-align: center;
    letter-spacing: 0.11em;

    color: #FFFFFF;

  &__head-header
    font-size: 17px;
    margin 0
    margin-bottom 10px

  &__head-paragraph
    margin 0
  
  &__arrow-down
    grid-row 1/2
    grid-column 1/2
    position relative
    top 100px
    justify-self center

  &__card-container
    // margin 0 30px
    margin-top 120px
    grid-column 1/3
    display flex
    // border solid #f00 4px
    justify-content space-between

  &__card
    max-width 360px
    margin 0 30px
    padding 0 20px
    // max-height 500px
    display grid 
    grid-template-rows 1fr minmax(50px, 200px) 4fr
    text-align center
    justify-content center
    align-items center
    color #fff

  &__card-header
    font-family: Montserrat;
    font-size: 33.7584px;
    line-height: 167.69%;
    letter-spacing: 0.055em;
    margin-bottom 0

  &__card-image
    justify-self center
    align-self center
    margin 20px 0

  &__card-paragraph
    font-family: Open Sans Light
    font-size: 14px
    line-height: 229.69%;

    letter-spacing: 0.10em
    align-self start

  &__cutout-down
    position relative
    top 58px
    left -20px
    justify-self center
    align-self end
</style>