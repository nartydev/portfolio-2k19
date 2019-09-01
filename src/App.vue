<template>
  <div id="app">
    <Header @updateValue="updateState" :stateHover="stateHover" :name="name"/>
    <transition>
        <router-view @updateValue="updateState" />
    </transition>
    <div ref="cursorPoint" class="cursor-point"></div>
    <div ref="cursor" class="cursor">
      <svg width="43" height="40"  viewBox="0 0 200 200" class="svg-indicator cursor-circle">
          <polygon 
                  points="136.737609507049,188.692435121084 63.2623904929514,188.692435121084 11.3075648789165,136.737609507049 11.3075648789165,63.2623904929514 63.2623904929513,11.3075648789165 136.737609507049,11.3075648789165 188.692435121084,63.2623904929513 188.692435121084,136.737609507049" />
      </svg>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { TweenLite, Power4 } from 'gsap'

export default {
  name: "home",
  components: {
    Header
  }, 
  data:function() {
    return {
      name: null,
      cursorMain: {
          x: 0,
          y: 0
      },
      stateHover: ''
    }
  },
  beforeDestroy: function() {
    document.body.removeEventListener("mousemove", this.setCoords)
  },
  mounted: function() {
    document.body.addEventListener("mousemove", this.setCoords)
  },
  watch: {
    '$route' (to) {
      if(to.name == "about" || to.name == "work") {
        this.name = true
      } else {
        this.name = false
      }
    }
  },
  methods: {
    setCoords: function(_event) {
      this.cursorMain.x = _event.clientX
      this.cursorMain.y = _event.clientY
      this.$refs.cursor.style.transform = `translate(${this.cursorMain.x}px, ${this.cursorMain.y}px)`;
      this.$refs.cursorPoint.style.transform = `translate(${this.cursorMain.x}px, ${this.cursorMain.y}px)`;
    },
    updateState: function(state) {
      this.stateHover = state
      if(this.stateHover === 'enter') {
        TweenLite.to('.cursor-point', 0.4, {
          opacity:0,
          ease: Power4.easeOut
        })
        TweenLite.to('.cursor-circle', 0.4, {
          scale:1.9,
          ease: Power4.easeOut
        })
      } else {
        TweenLite.to('.cursor-point', 0.4, {
            opacity:1,
            ease: Power4.easeOut
        })
        TweenLite.to('.cursor-circle', 0.4, {
            scale:1,
            ease: Power4.easeOut
        })
      }
    }
  }
};

</script>

<style lang="stylus">

html 
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;

@font-face 
  font-family: 'Circular Regular'
  src: url(./assets/fonts/CircularStd-Book.woff)

@font-face 
  font-family: 'Circular Medium'
  src: url(./assets/fonts/CircularStd-Medium.woff)

@font-face 
  font-family: 'Circular Bold'
  src: url(./assets/fonts/CircularStd-Bold.woff)

body 
  margin: 0
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-family: 'Poppins'
  overflow:hidden
  touch-action: none;
  background:#070808

.cursor 
  transition:transform 50ms ease-in-out
  position:absolute
  will-change: transform
  left: -18px;
  top: -18px;
  user-select: none
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;


.cursor-point
  height:5px;
  background:#ccc;
  width:5px;
  border-radius:50%;
  position:absolute
  margin-top:-2.5px;
  margin-left:-2.5px;
  left:0
  top:0
  transition:60ms ease-in-out;


.svg-indicator 
  margin-left: -3px
  margin-top: -1px
  polygon
    fill: none
    stroke-width: 3px
    stroke: #ccc
    transform-origin: center    
    position:absolute

@media screen and (max-width:700px)
  .cursor, .cursor-point
    display:none

</style>
