<template>
    <div class="gamefy-container">
      <div class="gamefy-section__top-cutout top-cutout">
        <div class="top-cutout__left-background"></div>
        <div class="top-cutout__center-background"></div>
        <div class="top-cutout__right-background"></div>
      </div>

      <div class="gamefy-container__center gamefy">
        <img class="gamefy__arrow-down" src="~assets/gamefy/arrow-down.svg" alt="">
        <p class="gamefy__head-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
          
          <div 
            data-aos="fade-down"
            data-aos-offset="250"
            data-aos-anchor-placement="top-center" 
            class="gamefy__card"
            >
            <h2 class="gamefy__card-header">Konkurranser</h2>
            <img src="~assets/gamefy/competition-cars.svg" alt="" class="gamefy__card-image">
            <p class="gamefy__card-paragraph">
              Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
          
          <div 
            data-aos="fade-down"
            data-aos-offset="450"
            data-aos-anchor-placement="top-center" 
            class="gamefy__card"
            >
            <h2 class="gamefy__card-header">Markeringer</h2>
            <img src="~assets/gamefy/medal-runner.svg" alt="" class="gamefy__card-image">
            <p class="gamefy__card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  et dolore magna aliqua. 
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
    mask url('../../assets/gamefy/cutout-mask-down.svg')
    mask-size cover auto

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

  &__head-paragraph
    grid-row 1/2
    grid-column 1/3
    width 490px
    font-family: Open Sans;
    font-size: 15.9px;
    line-height: 229.69%;

    text-align: center;
    letter-spacing: 0.11em;
    justify-self center
    margin-top 40px

    color: #FFFFFF;
  
  &__arrow-down
    grid-row 1/2
    grid-column 1/2
    position relative
    top 100px
    justify-self center

  &__card-container
    margin 0 70px
    margin-top 120px
    grid-column 1/3
    display flex
    // border solid #f00 4px
    justify-content space-between

  &__card
    max-width 350px
    max-height 500px
    display grid 
    grid-template-rows 1fr 2fr 4fr
    text-align center
    justify-content center
    align-items center
    color #fff

  &__card-header
    font-family: Montserrat;
    font-size: 33.7584px;
    line-height: 167.69%;
    letter-spacing: 0.055em;

  &__card-image
    justify-self center

  &__card-paragraph
    font-family: Open Sans Light
    font-size: 15.9px;
    line-height: 229.69%;

    letter-spacing: 0.18em;

  &__cutout-down
    position relative
    top 58px
    left -20px
    justify-self center
    align-self end
</style>