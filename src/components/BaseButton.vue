<template>
  <button
    ref="button"
    @mouseover="hover(true)"
    @mouseleave="hover(false)"
    v-bind:style="{
            ...bgc,
            color: color,
            borderColor: lipColor
        }"
  >{{text}}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["text", "color", "bgColor", "hoverColor", "lipColor"],
  data() {
    return {
      bgc: {
        backgroundColor: this.bgColor
      }
    };
  },
  methods: {
    hover: function(isHovering) {
      if (isHovering) {
        this.bgc = { backgroundColor: this.hoverColor };
      } else {
        this.bgc = { backgroundColor: this.bgColor };
      }
    }
  },
  created() {
    console.log("button is here!§!!!!!!!!!");
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
    

    button
        font-family Sansation
        cursor pointer
        background: #333;
        border none
        border-bottom 2px solid 
        border-color #fff
        border-radius: 4px;
        font-weight: bold;
        line-height: 17px;;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        letter-spacing: 0.075em;
        text-transform: uppercase;
        font-size 15px
        
        color #fff
        padding 15px 20px
        transition 0.2s
        user-select none 
        -webkit-user-drag none
        

        &:hover
          transition 0.3s
          background #555    
</style>