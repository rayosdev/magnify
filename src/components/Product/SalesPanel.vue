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
              <img class="header-card__image" src="~assets/recognition/image-man-with-headset.jpg" alt="">
              <div class="header-card__title-background">
                <h1 class="header-card__title-text">anErkjeNnelse</h1>
              </div>
            </div>
          </div>
        <p class="header-card__byline">
            Nøkkelen til økt motivasjon og arbeidsglede
        </p>
          
          <img class="block-decoration" src="~assets/recognition/block-decoration.svg" alt="">

          <div class="recognition-article">
            <img class="recognition-article__magnaglass-image" src="~assets/recognition/achivement-magaglass.svg" alt="">
            <h4 class="recognition-article__title">Hvorfor anerkjenne?</h4>
            <p class="recognition-article__paragraph">
              En fellesnevner for alle medarbeidere enten de ønsker det eller ikke er at anerkjennelse påvirker. Effekten av anerkjennelsen avhenger mye av medarbeidernes preferanser, utførelse av leder osv. 
            </p>
            <p class="recognition-article__paragraph">
              Ved bruk av MAGNIFY vil ledere bedre kunne skreddersy løsninger for hvordan å anerkjenne sine medarbeidere, samtidig som programmet sørger for at standard prestasjoner blir markert.
            </p>
          </div>

          <img
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-anchor-placement="top-center" 
            class="gamefication-title-graphic" 
            src="~assets/recognition/gamefication-title-graphic.svg" a
            lt=""
            >
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "SalesPanel"
        
    }
</script>

<style lang="stylus" scoped>

.content-container
  height 1200px
  background: linear-gradient(180deg, #8F2D27 63.45%, #B63830 100%)

  &__center
    margin 0 auto
    max-width $big-desktop-width
    display grid
    grid-template-columns 1fr 1fr


.header__cutout-down
  grid-row 1/2
  grid-column 2/3
  margin-left 130px
  // left 
  // border solid 45px #00f


.header-card-container
  // position relative

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
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 167.69%;
    /* or 39px */

    // display: flex;
    // align-items: center;
    // text-align: center;
    letter-spacing: 0.055em;

    color: #FFFFFF;

    width 550px
    text-align center
    padding 0 20px
    margin-top 50px

    grid-row 2/3

.block-decoration
  justify-self center
  margin-bottom -130px
  margin-right 80px
  grid-column 1/2
  grid-row 3/5
  

.recognition-article
  grid-column 2/3
  grid-row 2/5

  justify-self center
  
  padding 0 120px
  display grid
  align-items center
  justify-items center

  &__magnaglass-image
    width 150px
    

  &__title
    font-family: Open Sans Bold
    font-size: 15.905px;
    line-height: 229.69%;
    /* or 37px */

    letter-spacing: 0.11em;

    color: #FFFFFF;

    margin 40px 0


  &__paragraph

    font-family: Open Sans;
    font-size: 15.905px;
    line-height: 229.69%;
    /* or 37px */

    text-align: center;
    letter-spacing: 0.11em;

    color: #FFFFFF;

    margin-bottom 60px


.gamefication-title-graphic
    margin-top 40px
    grid-column 1/3
    grid-row 5/6

    z-index 10
    justify-self center


</style>