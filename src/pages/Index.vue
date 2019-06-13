<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <div class="container">

      <div class="top-pitch-container">
        
        <div class="top-pitch">
          <h1 class="top-pitch__header-text">magnify gir ditt team</h1>
          <img class="top-pitch__arrow" src="~assets/about/home-magnify-arrow-top-section.svg" alt="">
          <ol class="top-pitch__order-list">
            <li class="top-pitch__list-item">
              <h2>1. Mer Motivasjon</h2>
            </li>
            <li class="top-pitch__list-item">
              <h2>2. høyere fokus</h2>
            </li>
            <li class="top-pitch__list-item">
              <h2>3. Økt prodktivitet</h2>
            </li>
          </ol>
          <button>SE HVORDAN</button>
        </div>
      </div>

      <div class="leaderboard-container">
        <div class="leaderboard">
          <img class="leaderboard__ground-shadow" src="~assets/about/leaderboard-ground-shadow.svg" alt="">
          <img class="leaderboard__background" src="~assets/about/leaderborad -background.png" alt="">
          <div class="leaderboard__card-container">
            <img class="leaderboard__card" src="~assets/about/leaderboard-card.png" alt="">
            <img class="leaderboard__card-shadow" src="~assets/about/leaderboard-card-shadow.svg" alt="">
          </div>
          <div class="leaderboard__card-plain-container">
            <img class="leaderboard__card-plain-shadow" src="~assets/about/leaderboard-card-shadow.svg" alt="">
            <img class="leaderboard__card-plain" src="~assets/about/leadboard-card placeholders.png" alt="">
          </div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="stylus" scoped>

  .container
    max-width $big-desktop-width
    margin 0 auto

    display grid
    grid-template-columns 3fr 1fr
    // border solid #f00 4px



  .top-pitch-container

  .top-pitch
    // background #dfd
    display grid
    justify-items center
    align-content center
    position relative

    grid-column 1/2

    &__header-text
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 35.1808px;
      line-height: 146.91%;
      /* identical to box height, or 52px */

      text-align: center;
      letter-spacing: 0.14em;
      text-transform: uppercase;

      color: #050505;
    
    &__arrow
      position absolute
      top 70px
      right 10px
    
    &__order-list
      // list-style-type decimal!important
      // color red 

    &__list-item
      font-family: Montserrat;
      font-style: normal;
      font-weight: medium;
      font-size: 27.8134px;
      line-height: 146.91%;
      /* or 41px */

      letter-spacing: 0.14em;
      text-transform: uppercase;

      color: #F84B40;





  .leaderboard-container
    // background #ddf
    grid-column 2/3
    
    perspective 2000px
    // transform translateY(100px)
    // transform-origin: center right;

  .leaderboard
    max-width 500px
    display grid
    justify-items center
    align-items center
    transform rotateY(-60deg) rotateZ(15deg) rotateX(-8deg) translateY(100px) translateX(-200px)

    &__card-container
      grid-row 1/2
      grid-column 1/2

      display grid

      // transform-origin: center right;
      transform translateY(-150px) 
      perspective 400px
    
    &__card
      user-select: none
      grid-row 1/2
      grid-column 1/2

      width 310px
      transform translateX(-60px) translateZ(100px) translateY(40px)

    &__card-shadow
      user-select: none
      grid-row 1/2
      grid-column 1/2
      

    &__card-plain-container
      user-select: none
      grid-row 1/2
      grid-column 1/2

      display grid

      transform translateY(-50px)
      perspective 600px
      
    &__card-plain
      user-select: none
      width 303px
      grid-row 1/2
      grid-column 1/2
      transform translateX(-20px) translateZ(100px) translateY(40px)
    
    &__card-plain-shadow
      user-select: none
      grid-row 1/2
      grid-column 1/2


    &__background
      user-select: none
      grid-row 1/2
      grid-column 1/2

      width  444px

    &__ground-shadow
      user-select: none
      // grid-row 1/2
      // grid-column 1/2
      transform translateY(-160px)
      opacity 0.7
      z-index -1


  // .leaderboard-container
  //   padding-bottom 400px!important
</style>
