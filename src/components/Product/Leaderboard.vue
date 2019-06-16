<template>
  <!-- <q-page class="flex flex-center"> -->

    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <div class="container">
      <div id="link-target-leaderboard" style="position:absolute; top: -100px"></div>
      <div class="leaderboard-container">
        
        <div class="product-intro__container">
            <h1 class="product-intro__header-text">magnify sOM pLATFORM</h1>
            <p class="product-intro__paragraph">
                Vårt mål er at MAGNIFY skal kunne bidra til mer motivasjon, bedre fokus og 
                økt produktivitet på din arbeidsplass uten at det trenger å være dyrt! 
            </p>
            <p class="product-intro__paragraph">
                Produktet består av to hoveddeler: Et “Leaderboard” og selgerpanelet. 
            </p>
        </div>
        <div class="leaderboard-explained__container">
            <h2 class="leaderboard-explained__header">
                Leaderboard
            </h2>
            <p class="leaderboard-explained__paragraph">
                Se for deg at du har jobbet et par timer og dermed er det på tide med en kaffepause. Du går opp til kaffemaskinen, ser deg over skulderen på TV-skjermen som viser at Espen nettopp har fått en ny salgsrekord. 
            </p>
        </div>
        <div class="leaderboard-demo__container">
            <img class="leaderboard-demo__image" src="~assets/leaderboard/leaderboard-demo.jpg" alt="">
            <p class="leaderboard-demo__byline">
                Hovedmålet med “leaderboardet” er at medarbeidere skal enkelt kunne få oversikt over de råeste medarbeiderne og få oppdateringer på sekundet når noen oppnår en viktig milepæl. 
            </p>

            <anchor-router-link 
                class="leaderboard-demo__action-button"
                :to="{hash: '#link-target-summary'}"
            >
                <base-button
                    color="#fff"
                    bgColor="#050505"
                    hoverColor="#818181"
                    lipColor="#F84B40"
                    text="FÅ EN GRATIS DEMO"
                />
            </anchor-router-link>
        </div>
      
      </div>
    </div>
</template>

<script>
import BaseButton from "../BaseButton";
import AnchorRouterLink from 'vue-anchor-router-link'


export default {
  name: "Leaderboard",
  components: {
    BaseButton,
    AnchorRouterLink
  }
};
</script>

<style lang="stylus" scoped>

.container
    max-width $big-desktop-width
    margin 0 auto
    margin-bottom 180px


.leaderboard-container
    display grid
    grid-template-columns 1fr 1fr
    // border solid 4px #00f
    grid-gap 20px
    margin 0 50px

.product-intro

    &__container
        grid-column 1/3

        margin 150px 0
        // background #dfd
        display grid
        justify-items center
        align-content center
        
        text-align: center;
        color: #050505;


    &__header-text
        font-family: Montserrat Bold;
        font-weight: bold;
        font-size: 35.1808px;
        line-height: 146.91%;
        letter-spacing: 0.14em;
        text-transform: uppercase;

        margin-bottom 5px
        
    &__paragraph
        font-family: Open Sans;
        font-weight: normal;
        font-size: 23px;
        line-height: 167.69%;
        letter-spacing: 0.055em;
        
        max-width 612px
        margin-top 30px

.leaderboard-explained

    &__container
        grid-row 2/3
        grid-column 1/2
        display grid
        grid-template-rows minmax(80px,120px) 4fr
        justify-self start



    &__header
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 33.7584px;
        text-align: center;
        line-height: 167.69%;
        letter-spacing: 0.055em;

        color: #8F2D27;
        justify-self center
        margin-right 80px
        max-height 50px
    
    &__paragraph
        font-family: Open Sans;
        font-weight: normal;
        font-size: 15.905px;
        line-height: 229.69%;
        letter-spacing: 0.11em;

        color: #050505;

        max-width 450px
        justify-self center
        align-self start

.leaderboard-demo
    
    &__container
        justify-self end
        grid-row 2/3
        grid-column 2/3

        display grid

    &__image
        justify-self end
        width 100%

    &__byline
        justify-self end

        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15.905px;
        line-height: 229.69%;
        /* or 37px */

        letter-spacing: 0.11em;

        color: #050505;

        max-width 600px


    &__action-button
        justify-self center
        margin-top 130px


</style>
