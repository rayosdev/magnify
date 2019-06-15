<template>
  <!-- <q-page class="flex flex-center"> -->

    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <div class="container">
      <div class="top-pitch-container">
        <div class="top-pitch">
          <h1 class="top-pitch__header-text">magnify gir ditt team</h1>
          <div class="top-pitch__arrow-and-list-container">
            <img
              class="top-pitch__arrow"
              src="~assets/about/home-magnify-arrow-top-section.svg"
              alt
            >
            <ol class="top-pitch__order-list">
              <li class="top-pitch__list-item">1. Mer Motivasjon</li>
              <li class="top-pitch__list-item">2. høyere fokus</li>
              <li class="top-pitch__list-item">3. Økt prodktivitet</li>
            </ol>
          </div>
          <a class="top-pitch__link-target" href="#link-target-summary">
          <base-button
            class="top-pitch__button"
            color="#fff"
            bgcolor="#050505"
            hoverColor="#818181"
            lipColor="#F84B40"
            text="SE HVORDAN"
          />
          </a>
        </div>
      </div>

      <div class="leaderboard-container">
        <div class="leaderboard">
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            class="leaderboard__ground-shadow"
            src="~assets/about/leaderboard-ground-shadow.svg"
            alt
          >
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            class="leaderboard__background"
            src="~assets/about/leaderborad -background.png"
            alt
          >
          <div class="leaderboard__card-container">
            <img
              data-aos="fade-down"
              data-aos-delay="600"
              class="leaderboard__card"
              src="~assets/about/leaderboard-card.png"
              alt
            >
            <img
              data-aos="fade-up"
              data-aos-delay="600"
              class="leaderboard__card-shadow"
              src="~assets/about/leaderboard-card-shadow.svg"
              alt
            >
          </div>
          <div class="leaderboard__card-plain-container">
            <img
              data-aos="fade-up"
              data-aos-delay="850"
              class="leaderboard__card-plain-shadow"
              src="~assets/about/leaderboard-card-shadow.svg"
              alt
            >
            <img
              data-aos="fade-up"
              data-aos-delay="850"
              class="leaderboard__card-plain"
              src="~assets/about/leadboard-card placeholders.png"
              alt
            >
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BaseButton from "../BaseButton";

export default {
  name: "TopPitch",
  components: {
    "base-button": BaseButton
  }
};
</script>

<style lang="stylus" scoped>

  .container
    max-width $big-desktop-width
    margin 0 auto

    display grid
    grid-template-columns 3fr 1fr


  .top-pitch-container
    grid-row 1/2

  .top-pitch
    margin-top 150px
    // background #dfd
    display grid
    justify-items center
    align-content center
    


    &__header-text
      font-family: Montserrat Bold;
      font-style: normal;
      font-weight: bold;
      font-size: 35.1808px;
      line-height: 146.91%;
      /* identical to box height, or 52px */

      text-align: center;
      letter-spacing: 0.14em;
      text-transform: uppercase;

      color: #050505;
      margin-bottom 5px

    &__arrow-and-list-container
      position relative
    
    &__arrow
      position absolute
      top -10px
      left 100%
    
    &__order-list
      padding-left 0

    &__list-item
      font-family: Montserrat Medium
      font-size: 27.8134px;
      line-height: 146.91%;

      letter-spacing: 0.14em;
      text-transform: uppercase;

      color: #F84B40;

    &__button
      margin-top 30px




  .leaderboard-container
  
    -webkit-user-drag none
    user-select none
    grid-column 2/3
    
    perspective 2000px


  .leaderboard
    max-width 500px
    display grid
    justify-items center
    align-items center
    transform rotateY(-60deg) rotateZ(15deg) rotateX(-8deg) translateY(100px) translateX(-240px)

    &__card-container
      grid-row 1/2
      grid-column 1/2

      display grid

      transform translateY(-150px) 
      perspective 400px
    
    &__card
      user-select: none
      -webkit-user-drag none 
      position relative
      left -100px
      top 40px
      grid-row 1/2
      grid-column 1/2

      width 400px
      transform translateX(-60px) translateZ(100px) translateY(40px)

    &__card-shadow
      user-select: none
      -webkit-user-drag none 
      z-index -1
      grid-row 1/2
      grid-column 1/2
      

    &__card-plain-container
      grid-row 1/2
      grid-column 1/2

      display grid

      transform translateY(-10px)
      perspective 600px
      
    &__card-plain
      user-select: none
      -webkit-user-drag none 
      grid-row 1/2
      grid-column 1/2
      position relative
      left -50px
      top 10px
      width 343px
      transform translateX(-20px) translateZ(100px) translateY(40px)
    
    &__card-plain-shadow
      user-select: none
      -webkit-user-drag none 
      grid-row 1/2
      grid-column 1/2


    &__background
      user-select: none
      -webkit-user-drag none 
      grid-row 1/2
      grid-column 1/2

      width  444px

    &__ground-shadow
      user-select: none
      -webkit-user-drag none 
      position relative
      top -130px
      transform translateY(-130px)
      opacity 0
      z-index -1



</style>
