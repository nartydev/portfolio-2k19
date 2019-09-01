<template>
<div>
    <div class="content-anim"><div class="circle" :class="showRound ? 'active' : ''"></div></div>
    <div class="about" ref="contentAbout" v-hammer:pan.vertical="magicScroll">
      <div class="container">
        <transition appear name="fade">
          <h1 v-show="animationOn === true">Hi, I'm Kérian Pelat</h1>
        </transition>
        <transition appear name="translate-right">
        <svg v-show="animationOn === true" xmlns="http://www.w3.org/2000/svg" class="text-translate" width="4100px" height="280px">
          <text x="10"  y="180"
                style="font-family: Poppins;
                      font-size: 187px;
                      font-weight:900;
                      stroke: rgb(255, 255, 255);
                      stroke-width: 3px;
                      letter-spacing:6px;
                      ">
            WEB DEVELOPER
          </text>
        </svg>
        </transition>
        <div class="content-right">
          <transition  appear name="desc-fade">
          <p v-show="animationOn === true" class="anim-text">I'm Kérian Pelat, a 19-year-old french front end developer based in Paris. Currently in second year at HETIC, I am looking for new opportunities and new challenges as a freelancer.</p>
          </transition>
        </div>
        <div class="clear"></div>
      </div>
      <div class="container-about">
        <div ref="contactleft" class="fix">
          <div class="about-me-title">
            About
          </div>
        </div>
        <div class="text-about">
          <h2>Introduction</h2>
          <p>
            Very soon attracted to the digital world, I started to learn web development on my own at the age of 11. Over the years I acquired skills, experience and I discovered new aspects of the web that I like a lot, such as design and mobile application development. I make the most of the experience that I have acquired by  getting very involved in each of my projects. I am curious by nature and I enjoy  discovering new technologies and creating new tools. 

            <br/><br/>
            Today I have the chance to work as a freelance for large groups such as RCI Banks & Services (Renault Group), YSL (Yves Saint Laurent) or startups like Goodvie or Memento.
          </p>
          <h2 class="spacing-about">What I do </h2>
          <div class="flex-between">
            <div>
              <h3>Front-end development</h3>
              <ul class="content-skill">
                <li>HTML/CSS/JS ES6</li>
                <li>Vue.js & React.js & Gatsby</li>
                <li>Wordpress theme development</li>
              </ul>
            </div>
            <div>
              <h3>Back-end development</h3>
              <ul class="content-skill">
                <li>PHP</li>
                <li>Node.js</li>
                <li>SQL/MongoDB</li>
              </ul>
            </div>
            <div>
              <h3>Others</h3>
              <ul class="content-skill">
                <li>Create project</li>
                <li>UX Design</li>
                <li>Mobile development (React Native)</li>
              </ul>
            </div>
          </div>
          <h2 class="spacing-about">What I'm interested in </h2>
          <div class="flex-between">
            <div>
              <h3>Front-end development</h3>
              <ul class="content-skill">
                <li>WebGL</li>
              </ul>
            </div>
            <div>
              <h3>Back-end development</h3>
              <ul class="content-skill">
                <li>Node.js</li>
                <li>Symfony</li>
              </ul>
            </div>
            <div>
              <h3>Others</h3>
              <ul class="content-skill">
                <li>IoT</li>
                <li>TensorFlow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-copy">
        <div class="title-contact">Let's work together</div>
          <div class="flex-space">

            <div>
              <a @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="mailto:kerian.pelat@hetic.net" target="_blank" title="Mail">
              Mail
              </a>
              </div>
              <div>
              <a  @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="https://www.malt.fr/profile/kerianpelat1" target="_blank" title="Malt">
              Malt
              </a>
              </div>
              <div>
              <a  @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="https://github.com/nartydev" target="_blank" title="Github">
              Github
              </a>
              </div>
              <div>
              <a  @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="https://www.linkedin.com/in/kpelat/" target="_blank" title="Linkedin">
              Linkedin
              </a>
              </div>
              <div>
              <a  @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="https://twitter.com/nartydev" target="_blank" title="Twitter">
              Twitter
              </a>
              </div>
          </div>
      </div>
      <div class="container-copy">
        <div class="copy"> Copyright &copy; 2019 - Code and design by Kérian Pelat</div>
      </div>
    </div>
      
</div>
</template>

<script>
  import { TweenLite } from 'gsap'
  import normalizeWheel from 'normalize-wheel';


  export default {
    name: "about",
    data: function() {
      return {
        animationOn: true,
        scroll: 0,
        showRound: false,
        valueScrollText: 0
      }
    },
    beforeDestroy: function() {
      document.body.removeEventListener("DOMMouseScroll", this.magicScroll)
      document.body.removeEventListener("mousewheel", this.magicScroll)
      document.body.removeEventListener("keydown", this.magicScroll)
    },
    mounted: function() {
      setTimeout(() => {
      document.body.addEventListener('DOMMouseScroll', this.magicScroll)
      document.body.addEventListener('mousewheel', this.magicScroll)
      document.body.addEventListener('keydown', this.magicScroll)
        this.animationOn = true
      }, 500)
    },
     beforeRouteLeave(to, from, next) {
      this.scroll = 0,
      this.valueScrollText = 0
      TweenLite.to('.about', 0.7, {
          y: 0,
          ease: Power4.easeOut
      })
      TweenLite.to('.text-translate', .5, {
          x: -this.scroll,
      })
      TweenLite.to('.text-translate', .5, {
          y: this.valueScrollText,
      })
       setTimeout(() => {
        this.animationOn = false
      }, 700);
       setTimeout(() => {
        this.showRound = true
      }, 900);
      setTimeout(() => {
        next()
      }, 1700);
      
    },
    methods: {
      updateHover: function(state) {
        this.$emit('updateValue', state)
      },
      magicScroll: function(_event) {
          console.log(_event)
          const normalized = normalizeWheel(_event);
          console.log(normalized)
          if(normalized.pixelY == 30 || (normalized.pixelY === 0 && event.keyCode == 40)) {
              normalized.pixelY = 100
          } else if(normalized.pixelY == -30 || (normalized.pixelY === 0 && event.keyCode == 38)) {
              normalized.pixelY = -100
          } else if(_event.pointerType === 'touch') {
              normalized.pixelY /= -2
          }

            let boundingLeftContact = this.$refs.contactleft.getBoundingClientRect()
          if (normalized.pixelY > 0) {
                    
              if(boundingLeftContact.top < 400 && boundingLeftContact.top > -500 && this.valueScrollText < 500) {
                  this.valueScrollText += Math.floor(normalized.pixelY)  / 2
                  TweenLite.to('.fix', .5, {
                    y: this.valueScrollText,
                  })
              }
              if (this.scroll + normalized.pixelY > this.$refs.contentAbout.offsetHeight - window.innerHeight) {
                  this.scroll = this.$refs.contentAbout.offsetHeight - window.innerHeight
                  TweenLite.to('.about', 0.5, {
                      y: -this.scroll,
                  })
              } else {
                  this.scroll += Math.floor((normalized.pixelY))
                  TweenLite.to('.about', .5, {
                      y: -this.scroll,
                  })
                  TweenLite.to('.text-translate', .5, {
                      x: -this.scroll,
                  })
              }
          } else {
            console.log(boundingLeftContact, this.scroll)
              if (this.scroll + normalized.pixelY <= 0) {
                  this.scroll = 0
                  TweenLite.to('.about', 0.5, {
                      y: -this.scroll,
                  })
                  TweenLite.to('.text-translate', .5, {
                      x: -this.scroll,
                  })
              } else {
                  this.scroll += Math.floor((normalized.pixelY))
                  if(this.valueScrollText <= 0) {
                    this.valueScrollText = 0 
                  } else {
                    this.valueScrollText += Math.floor(normalized.pixelY) / 2
                  }
                  TweenLite.to('.about', .5, {
                      y: -this.scroll,
                  })
                  TweenLite.to('.text-translate', .5, {
                      x: -this.scroll,
                  })
                  TweenLite.to('.fix', .5, {
                      y: this.valueScrollText,
                  })
              }
          }
      }
    }
  
  };
</script>

<style scoped lang="stylus">
.circle
  position:fixed
  background:#fff
  height:50px
  width:50px
  left:50%
  top:50%
  margin-left:-25px
  border-radius:50%
  z-index:111
  margin-top:-25px
  transition:.7s ease-in-out
  transform:scale(0)

.circle.active
  transform:scale(68)

.content-anim 
  position:absolute
  left:0
  right:0
  bottom:0
  top:0

.desc-fade-enter-active 
    transition: all .6s
    transition-delay:1s

.desc-fade-leave-active 
    transition: all .4s


.desc-fade-enter 
    transform:translateY(100%) rotateZ(15deg)
    opacity:0

.desc-fade-leave-to 
    transform:translateY(200%) rotateZ(-10deg)
    opacity:0

.fade-enter-active, .fade-leave-active 
    transition: all .5s

.fade-leave-active 
    transition: all .5s


.fade-enter 
    transform:translateY(-200%) rotateZ(15deg)
    opacity:0

.fade-leave-to 
    transform:translateY(-100%) rotateZ(-10deg)
    opacity:0

.translate-right-enter-active, .translate-right-leave-active 
    transition: all 1s
    transition-delay:.5s

.translate-right-leave-active 
    transition: all .5s


.translate-right-enter 
    transform:translateX(50%)
    opacity:0

.translate-right-leave-to 
    opacity:0


body
  background: #070808


.title-contact 
  font-weight: 700
  font-size: 5em
  margin-top: 87px
  margin-bottom: 20px
  text-align: center

.content-right 
  width:57%
  float:right

.anim-text 
  width:100%
  margin-top:290px
  font-weight:500;
  letter-spacing:0.5px

.flex-between 
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  > div
    flex:0.47
    min-width:47%
    
.flex-space 
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  > div 
    padding:30px
  
  > div > a
    padding:30px 0
    font-weight:600
    letter-spacing:0.5px
    position:relative
  > div > a::after
    position:absolute
    left:0
    right:0
    content:''
    top:53px
    height:0px
    border-bottom:1px solid #fff
    background:#fff
    transform-origin:left
    transition:.5s ease-in-out;
    transform:scaleX(1) 
  > div > a:hover::after
    transform:scaleX(0)
    
a{
  text-decoration:none;
  color:#fff;
}

.text-translate 
  text-transform: uppercase
  font-weight: bold
  font-size: 180px
  position: absolute
  left: -11px
  width: 4183px
  color: #1e1e1e

.content-skill
  margin:0
  padding:0

.content-skill li
  list-style:none
  padding:5px 0
  color: #ccc
  font-size:1.1em;

.spacing-about
  margin:90px 0 20px

h1 
  font-size:60px
  font-family:"Poppins"

h2
  font-size: 28px
  text-transform: uppercase
  margin-bottom:40px
  letter-spacing:1.4px
  font-weight:800

h3
  font-size: 1.3em
  margin-bottom:10px
p
  font-size: 1.3em
  font-family: "Poppins"
  color:#e4e4e4
  line-height:1.4


.container 
  color:#fff
  width:1100px
  margin:150px auto 0
  position:relative

.container-copy
  color:#fff
  width:1100px
  margin:0px auto 0
  padding:70px 0
  position:relative
  color:#fff


.container-about 
  color:#fff
  width:1100px
  margin:70px auto 0
  position:relative
  display: flex
  justify-content: space-between


.fix 
  flex:0.4

.about
  font-family:"Poppins"

.text-about 
  flex:0.57


.clear 
  clear:both

.about 
  position:absolute
  top:0
  left:0
  right:0
  z-index:11

.content-text 
  width:80%
  height:100vh
  display:flex
  justify-content:flex-end
  align-items:center
  margin:auto

.content-picture 
  position:absolute
  top:0
  left:0
  right:0
  bottom:0

.overflow-text 
  width:40%
  overflow:hidden

.anim-text 
  font-family:'Poppins'
  font-size:1.5em
  color:#fff
  will-change:opacity, transform

.about-me-title 
    writing-mode: vertical-rl
    transform: rotate(180deg)
    font-size: 16em
    font-weight: 800

.copy
  color:#ccc
  padding-bottom: 30px;

@media screen and (max-width:700px)
    *
      box-sizing: border-box;

    .fix
        display:none

    .container-about, .container, .container-copy
      width:100%
      padding:0 15px
    
    .text-about
      flex:1

    .content-right
      width:100%

    .title-contact
      font-size: 4em;
      line-height: 1;

    h1
      font-size:46px

    .text-translate
      display:none

    .anim-text
      margin-top:15px
</style>