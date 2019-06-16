<template>
    <div class="container">
      <div id="link-target-recognition" style="position:relative; top: -150px"></div>
      <div class="content-container">
        <div class="content-container__center">
          <img class="header__cutout-down" src="~assets/recognition/cutout-down-recognition.svg" alt="">

          <div
            class="header-card-container"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-anchor-placement="top-center"
          >
            <div class="header-card">
              <img class="header-card__image" src="~assets/sales-panel/salespanel-two-emplyes.jpg" alt="">
              <div class="header-card__title-background">
                <h1 class="header-card__title-text">SelgerPanel</h1>
              </div>
            </div>
          </div>
            <p class="header-card__byline">
                Et verktøy som motiverer og effektiviserer medarbeidere på individnivå. 
            </p>
            
            <div class="sales-panel-article__container">
                <img class="sales-panel-article__panel-image" src="~assets/sales-panel/interactive prototype - sales-user homescreen.jpg" alt="">
                <p class="sales-panel-article__paragraph">
                    Selgerpanelet til MAGNIFY blir et verktøy som skal effektivisere medarbeiderne på individnivå. Ved hjelp av panelet kan du registrere salg, holde oversikt over personlige mål, invitere til konkurranser med andre medarbeidere og holde oversikt over salgstall.
                </p>
            </div>
            
            <div 
                class="sales-panel-pitch__container"
                data-aos="fade-up"
            >
                <h3 class="sales-panel-pitch__header">
                    Ta kontakt for å stille spørsmål eller spør oss om en gratis demo
                </h3>
                <BaseButton
                    class="sales-panel-pitch__button"
                    color="#8F2D27"
                    bgColor="#fff"
                    hoverColor="#FF948D"
                    lipColor="#8F2D27"
                    text="SE HVORDAN"
                />
            </div>
            

                <img class="sales-panel__lower-cutout-up" src="~assets/sales-panel/cutout-up.svg" alt="">
        </div>

      </div>
    </div>
</template>

<script>
import BaseButton from "../BaseButton";

export default {
    name: "SalesPanel",

    components: {
        BaseButton
    }
    
}
</script>

<style lang="stylus" scoped>

.content-container
//   height 1200px
  background: linear-gradient(180deg, #8F2D27 63.45%, #B63830 100%)

  &__center
    margin 0 auto
    max-width $big-desktop-width
    display grid
    grid-template-columns 1fr 2fr


.header__cutout-down
  grid-row 1/2
  grid-column 2/3
  margin-left 130px
  // left 
  // border solid 45px #00f


.header-card-container
  // position relative
  margin-left 40px

.header-card
  position relative
  top -15px
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
    margin-left 45px


  



.sales-panel-article

    justify-self center
    
    &__container
        grid-column 1/3
        grid-row 3/4

        padding 0 60px
        display grid
        grid-gap 180px
        // align-items center
        // justify-items center
        margin-top 100px

    &__panel-image
        grid-column 2/3
        grid-row 1/2
        align-slef center
        justify-self center
        box-shadow: 0px 3.1775px 3.1775px rgba(0, 0, 0, 0.25);


    &__paragraph

        font-family: Open Sans;
        font-weight: normal;
        font-size: 15.905px;
        line-height: 229.69%;
        letter-spacing: 0.11em;

        color: #FFFFFF;

        max-width 450px
        justify-self center
        padding 50px 0

.sales-panel-pitch

    &__container
        grid-column 1/3
        grid-row 4/5

        max-width 320px        
        display grid
        justify-self center
        margin-top 200px
        margin-bottom 200px

    &__header
        justify-self center

        font-family: Open Sans;
        font-weight: normal;
        font-size: 16px;
        line-height: 167.69%; text-align: center;
        letter-spacing: 0.055em;

        color: #FFFFFF;

    &__button 
        margin-top 20px
        max-width 167px
        justify-self center

.sales-panel__lower-cutout-up
    grid-column 1/2
    grid-row 5/6
    justify-self center
    position relative
    bottom -10px

</style>