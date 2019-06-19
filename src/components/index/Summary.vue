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
          <h1 class="top-article__header">Hva er MAGNIFY?</h1>
          <p class="top-article__paragraph">
            MAGNIFY er et salgsverktøy som er laget for å øke motivasjon, effektivitet og arbeidsglede i bedrifter som arbeider med salg og kundeservice.
            Ved bruk av salgsverktøyet kan salgsteamet få full oversikt over ledertabeller. Det er også enkelt å sette felles eller personlige mål, arrangere konkurranser, måle fremgang og anerkjenne milepæler etter egne preferanser.
          </p>
        </div>

        <div class="summary-card__container">

          <div class="summary-card summary-card--card1">
            <img class="summary-card__icon" src="~assets/summary/achivement-magaglass-icon.svg" alt="">
            <h2 class="summary-card__header">
              Anerkjennelse
            </h2>
            <p class="summary-card__paragraph">
              Ved bruk av MAGNIFY vil ledere bedre kunne skreddersy løsninger for hvordan å anerkjenne sine medarbeidere, samtidig som programmet sørger for at standard prestasjoner blir markert.
              <anchor-router-link 
                class="summary-card__link"
                :to="{hash: '#link-target-recognition'}"
              >Se mer</anchor-router-link>
            </p>
          </div>
          
          <div class="summary-card summary-card--card2">
            <img class="summary-card__icon" src="~assets/summary/gamefication-icon.svg" alt="">
            <h2 class="summary-card__header">
              Gamification
            </h2>
            <p class="summary-card__paragraph">
              Enten vi vil det eller ei, er vi daglig omringet av gamification. Vi fostår at gamification, uansett hvilken arena, har en positiv effekt for forbrukeren i henhold til økt insentiv til å prestere bedre. 
              <anchor-router-link 
                class="summary-card__link"
                :to="{hash: '#link-target-gamefy'}"
              >Se mer</anchor-router-link>
            </p>
          </div>
          
          <div class="summary-card summary-card--card3">
            <img class="summary-card__icon" src="~assets/summary/focus-icon.svg" alt="">
            <h2 class="summary-card__header">
              Fokus
            </h2>
            <p class="summary-card__paragraph">
              Gjennom MAGNIFY sitt enkle system vil brukeren få oversikt over sine personlige og team-mål. Ettersom studier har vist at et mål krever fokus fra brukeren, gir systemet en rask påminnelse av brukerens mål og progresjon ved oppstart. 
              <anchor-router-link 
                class="summary-card__link"
                :to="{hash: '#link-target-focus'}"
              >Se mer</anchor-router-link>
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
              Se detaljer om produktet 
              <a 
                class="final-pitch__product-paragraph-link" 
                href="#link-target-"
              >her</a>
            </p>
            <p class="final-pitch__contact-paragraph">
              Ta kontakt for mer informasjon eller for å sette opp en uforpliktende samtale med en av våre spesialister
            </p>

            <router-link to="/contact-support">
            <BaseButton
              class="final-pitch__contact-button" 
              color="#fff"
              bgColor="#050505"
              hoverColor="#818181"
              lipColor="#F84B40"
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
import AnchorRouterLink from 'vue-anchor-router-link'

export default {
    name: "Summary",

    components: {
        BaseButton,
        AnchorRouterLink
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
  left 20px

.arrow
  grid-row 1/2
  grid-column 2/3
  justify-self center
  position relative
  top -15px
  left -100px


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
    font-size: 20px;
    line-height: 167.69%;
    text-align: center;
    letter-spacing: 0.055em;

    color: #FFFFFF;

    margin-top 70px
    max-width 860px

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