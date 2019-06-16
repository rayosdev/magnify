<template>
    <div class="container">
      <div id="link-target-focus" style="position:relative; top: -150px"></div>
      <div class="container__center">

        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-anchor-placement="top-center"
          class="header-card-container"
        >
          <div class="header-card">
            <img class="header-card__image" src="~assets/focus/image-man-with-surface.jpg" alt="">
            <div class="header-card__title-background">
              <h1 class="header-card__title-text">Fokus</h1>
            </div>
          </div>
        </div>
        <p class="header-card__byline">
            Hardt arbeid uten fokus gir minimalt med resultater. 
        </p>

        <div class="focus-article focus-article--article1">
          <h2 class="focus-article__header">
            Mål Påmindelse
          </h2>
          <img class="focus-article__image" src="~assets/focus/reminder-finger.svg" alt="">
          <p class="focus-article__paragraph">
            Gjennom MAGNIFY sitt enkle system vil brukeren få oversikt over sine personlige og team-mål. Ettersom studier har vist at et mål krever fokus fra brukeren, gir systemet en rask påminnelse av brukerens mål og progresjon ved oppstart. 
          </p>
        </div>

        <div class="focus-article focus-article--article2">
          <h2 class="focus-article__header">
            Utvikling
          </h2>
          <img class="focus-article__image" src="~assets/focus/progression-graph.svg" alt="">
          <p class="focus-article__paragraph">
            Positiv utvikling i omsetningen av bedriften har ofte korelasjon med positiv utvikling av medarbeidere. Vi gjør det til et poeng å fremstille dataen til brukeren slik at man selv kan få innsikt i hvor det er høyest potesniale for vektst.  
          </p>
        </div>

        <img class="block-decorations" src="~assets/focus/block-decorations.svg" alt="">

      </div>
    </div>
</template>

<script>
    export default {
        name:"Focus"
    }
</script>

<style lang="stylus" scoped>

.container

    &__center
        margin 0 auto
        max-width $big-desktop-width
        display grid
        grid-gap 50px
        grid-template-columns 1fr 1fr

.header-card-container
  justify-self center
  grid-column 2/3

.header-card
  position relative
  top -20px
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
    font-size: 23px;
    line-height: 167.69%;
    letter-spacing: 0.1em;

    color: #333333;

    width 550px
    text-align center
    justify-self center
    padding 0 20px
    margin-top -20px

    grid-row 2/3
    grid-column 2/3


.focus-article
  justify-self center
  align-self center

  max-width 411px
  display grid
  grid-template-rows 1fr 2fr 4fr


  &__header
    justify-self center
    font-family: Montserrat Medium;
    font-size: 33.7584px;
    line-height: 167.69%;
    text-align: center;
    letter-spacing: 0.05em;

    color: #8F2D27;

  &__image
    justify-self center
    align-self center

  &__paragraph
    font-family: Open Sans Semi Bold
    font-size: 15.905px;
    line-height: 229.69%;
    text-align: center;
    letter-spacing: 0.11em;

    color: #333333;

  &--article1
    margin-top 100px
    grid-row 2/4
    grid-column 1/2
    align-self start


  &--article2
    margin-top -300px
    margin-bottom 150px
    align-self start
    grid-row 4/5
    grid-column 2/3

.block-decorations
  margin-top -350px
  grid-row 4/5
  grid-column 1/2
  align-self center
  justify-self center

</style>