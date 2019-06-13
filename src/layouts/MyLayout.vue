<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <div class="header header-contianer">


        <div class="header__logo-decoration-container">
          <a class="header__logo" clickable tag="a" target="_blank" href="https://www.google.com/">
            <img src="~assets/header-logo.svg" alt="">
          </a>

          <div class="header__leader-board-card-head-decoration">
            <img src="~assets/leaderboard-cards-header-decortaion.svg" alt="">
          </div>
        </div>

        <nav class="header-nav">
          <ul class="header-nav__list">
            <li class="header-nav__list-item header-nav__list-item--active">
              <a class="header-nav__link" href="">OM MAGNIFY</a>
            </li>
            <li class="header-nav__list-item">
              <a class="header-nav__link" href="">Produkt</a>
            </li>
            <li class="header-nav__list-item">
              <a class="header-nav__link" href="">Kontakt/Support</a>
            </li>
            <li class="header-nav__list-item">
              <button clickable tag="a" class="header-nav__button">
                logg inn
              </button>
            </li>
          </ul>
        </nav>


      <!-- <q-toolbar>
        
      </q-toolbar> -->
      </div>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>

  .q-header
    background: linear-gradient(270.89deg, #050505 72.35%, #3D3D3D 103.66%);
    min-height: 169px;
    width 100%

    .header-contianer
      // border #F00 solid 4px
      width 100%
      min-height: 169px;
      margin 0 auto
      max-width $big-desktop-width
      display flex
      align-items center
      justify-items center
      justify-content space-between

    
    .header

      &__logo-decoration-container
        display flex
        
        .header__logo
          align-self center
          max-width 187px
          width 100%
          margin-left 40px
          margin-right 100px


        .header__leader-board-card-head-decoration
          height: 169px;
          display flex
          align-items flex-end

    .header-nav
    
      &__list
        display flex
        flex-direction row
        align-items center
    
      &__list-item
        width 100%
        height 100%
        font-size 15px
        text-transform uppercase
        margin 0 1vw
        white-space: nowrap

        &--active
          color red!important
          display grid
          position relative

          &::after
            content ""
            position absolute
            height 2px
            width 85%
            justify-self center
            bottom -10px
            background #fff

      &__link
        &:hover
          transition 0.5s
          opacity 0.8

      &__button
        cursor pointer
        background: #F84B40;
        border none
        border-bottom 2px solid #fff
        border-radius: 4px;
        font-weight: bold;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.075em;
        text-transform: uppercase;
        
        color #fff
        padding 10px 20px
        margin-right 30px
        transition 0.2s

        &:hover
          transition 0.5s
          background #8F2D27               

</style>
