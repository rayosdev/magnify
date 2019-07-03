<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      v-bind:class="{'q-header--small':smallHeader}">
      <div
        v-scroll="handelScroll"
        v-bind:class="{'header--small':smallHeader}"
        class="header header-contianer"
        >


        <div class="header__logo-container">
          <anchor-router-link class="header__logo" :to="{hash: '#link-target-top-pitch'}">
            <!-- <router-link to="/">
            </router-link> -->
              <img src="~assets/header-logo.svg" alt="">
          </anchor-router-link>

          <div
            class="header__cards-decoration-container"
            v-bind:class="{'header__cards-decoration-container--small':smallHeader}"
            >
            <img
              class="header__cards-decoration-image"
              v-bind:class="{'header__cards-decoration-image--small':smallHeader}"
              src="~assets/leaderboard-cards-header-decortaion.svg" alt="">
          </div>
        </div>

        <nav class="header-nav" v-if="isWebPapge">
          <ul class="header-nav__list">
            <li 
              :class="getListItemClass(1)"
            >
              <anchor-router-link :to="{hash: '#link-target-top-pitch'}">
                <router-link to="/">
                  <a  
                    @click="changeActivePageLink(1)"
                    class="header-nav__link" 
                    href=""
                  >OM MAGNIFY</a>
                </router-link>
              </anchor-router-link>
            </li>
            
            <li 
              :class="getListItemClass(2)"
              
            >
              <anchor-router-link :to="{hash: '#link-target-top-pitch'}">
                <router-link to="/product">
                  <a
                    @click="changeActivePageLink(2)"
                    class="header-nav__link"
                    href=""
                  >PRODUKT</a>
                </router-link>
              </anchor-router-link>
            </li>

            <li 
              :class="getListItemClass(3)"
            >
              <router-link to="/contact-support">
                <a 
                  @click="changeActivePageLink(3)"
                  class="header-nav__link" 
                  href=""
                >Kontakt/Support</a>
              </router-link>
            </li>

            <li 
              class="header-nav__list-item"
              @click="changeActivePageLink(4)"
            >
              <router-link to="/login">
                <BaseButton
                    class="header-nav__button"
                    color="#fff"
                    bgColor="#F84B40"
                    hoverColor="#8F2D27"
                    lipColor="#fff"
                    text="Logg inn"
                  />
              </router-link>
            </li>
          </ul>
        </nav>

      </div>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { openURL } from 'quasar'
import { constants } from 'crypto';
import BaseButton from '../components/BaseButton'
import AnchorRouterLink from 'vue-anchor-router-link'

export default {
  name: 'MyLayout',
  components: {
    BaseButton,
    AnchorRouterLink
  },
  data () {
    return {
      smallHeader: false,
      isWebPapge: true,
      activePageLink: 1, 

    }
  },
  methods: {
    openURL,
    handelScroll: function(evt, el) {
      if(window.scrollY > 50){
        // console.log("active", window.scrollY)
        this.smallHeader = true
      }else{
        // console.log("deactive", window.scrollY)
        this.smallHeader = false
      }
    },

    getListItemClass: function(number) {
      if (number == this.activePageLink) {
        return [
          "header-nav__list-item",
          "header-nav__list-item--active"
        ]
      }else{
        return [
          "header-nav__list-item"
        ]
      }
      
    },
    changeActivePageLink: function(number){
      this.activePageLink = number
    }

  },
  directives: {
    test: {
      inserted: function(el){
        el.style.color = "green"
      }
    },
    scroll: {
      inserted: function(el, binding){
        let f = function(evt){
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }

  },
  created() {
    
    if(this.$router.currentRoute.path.includes('/app')){
      this.smallHeader = true
      this.isWebPapge = false
    }
    else{
      this.isWebPapge = true
    }
  },
}
</script>

<style lang="stylus" scoped>

  $morph-time = 0.3s

  .q-header
    background: linear-gradient(270.89deg, #050505 72.35%, #3D3D3D 103.66%);
    // min-height: 169px;
    width 100%
    transition $morph-time

    &--small
      transition $morph-time
      

    .header-contianer
      // border #F00 solid 4px
      width 100%
      height: 169px;
      margin 0 auto
      max-width $big-desktop-width
      display flex
      align-items center
      justify-items center
      justify-content space-between
      transition $morph-time


    .header

      &--small
        transition $morph-time
        height 75px
        // background red

      &__logo-container
        display flex

      &__logo
        align-self center
        max-width 187px
        width 100%
        margin-left 40px
        margin-right 100px


      &__cards-decoration-container
        height: 169px;
        display flex
        align-items flex-end
        opacity 0.3
        transition $morph-time

        &--small
          opacity 0
          height 75px
          transition $morph-time

      &__cards-decoration-image
        height 90px
        transition $morph-time

        &--small
          height 45px
          transition $morph-time


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
        margin-right 30px
        // cursor pointer
        // background: #F84B40;
        // border none
        // border-bottom 2px solid #fff
        // border-radius: 4px;
        // font-weight: bold;
        // line-height: 17px;
        // display: flex;
        // align-items: center;
        // text-align: center;
        // letter-spacing: 0.075em;
        // text-transform: uppercase;

        // color #fff
        // padding 10px 20px
        // transition 0.2s

        // &:hover
        //   transition 0.5s
        //   background #8F2D27

</style>
