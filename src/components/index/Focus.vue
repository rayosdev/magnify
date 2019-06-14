<template>
    <div class="container">
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
            For fremgang må du se hvor du har vært og hvor du skal hen
        </p>

        <div class="focus-article focus-article--article1">
          <h2 class="focus-article__header">
            Mål Påmindelse
          </h2>
          <img class="focus-article__image" src="~assets/focus/reminder-finger.svg" alt="">
          <p class="focus-article__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          </p>
        </div>

        <div class="focus-article focus-article--article2">
          <h2 class="focus-article__header">
            Progresjon over tid
          </h2>
          <img class="focus-article__image" src="~assets/focus/progression-graph.svg" alt="">
          <p class="focus-article__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
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
    font-family: Open Sans Semi Bold;
    font-size: 23px;
    line-height: 167.69%;
    letter-spacing: 0.055em;

    color: #333333;

    width 550px
    text-align center
    justify-self center
    padding 0 20px
    margin-top 10px

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
    letter-spacing: 0.055em;

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
    align-self start
    grid-row 4/5
    grid-column 2/3

.block-decorations
  margin-top -100px
  grid-row 4/5
  grid-column 1/2
  align-self center
  justify-self center

</style>