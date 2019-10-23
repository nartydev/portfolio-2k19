<script>
    /* eslint-disable */
</script>

<template>
    <div class="content-project" :class="project.id == idFirst ? 'active' : ''">
        <div class="min-content">
          <div class="overflow">
            <transition appear name="fade">
                <div v-show="idFirst === project.id" class="title">{{ project.title }}</div>
            </transition>
          </div>
          <div class="overflow-desc">
            <transition appear name="desc-fade">
                <div v-show="idFirst === project.id" class="description">{{ project.category }}</div>
            </transition>
          </div>
    
                <div class="content-view" ref="viewContent" @mouseover="callback('enter')" @mouseleave="callback('leave')" v-show="idFirst === project.id">
                        <router-link class="view" :to="project.slug">
                            <div ref="viewButton" >
            <transition appear name="round-fade">
                            <div v-show="idFirst === project.id">View</div>
            </transition>
                            </div>
                        </router-link>
                </div>
            <transition appear name="fade">
                <div v-show="idFirst === project.id" class="year-project">{{ project.year }}</div>
            </transition>
            <div class="content-counter">
                <div class="overflow-number">
                    <transition appear name="slide-right-left">
                        <div v-show="idFirst === project.id" class="number-project">{{ project.id +1 }}</div>
                    </transition>
                </div>
                <div v-show="idFirst === project.id" class="total-project">4</div>
            </div>
        </div>
    </div>
</template>

<script>

 import {
    TweenLite, Power4
  } from "gsap"
  
    export default {
    
        // Mettre tout en visible et gérer dans chaque component l'affichage via l'id
        name: "Project",
        props: ['project', 'nextProject', 'id', 'successAnim', 'displayContent'],
        data: function() {
            return {
                idFirst: this.id,
                show: false,
                viewHover: '',
                cursor: {
                    x: 0,
                    y: 0
                }
            }
        },
        mounted: function() {
            this.show = true
            document.body.addEventListener("mousemove", this.setCoords)
        },
        beforeDestroy: function() {
            document.body.removeEventListener("mousemove", this.setCoords)
        },
        watch: {
            successAnim: function(newVal) {
                if (newVal) {
                    this.idFirst = -1
                }
            },
            displayContent: function(newVal) {
                if(newVal) {
                    this.idFirst = -1
                }
            }, 
            id: function(newVal) {
                this.idFirst = newVal
            }
        },
        methods: {
            callback: function(state) {
                if(state === 'leave') {
                    TweenLite.to('.view > div', 0.5, {
                        x: 0,
                        y: 0,
                        ease: Power4.easeOut
                    })
                }
                this.viewHover = state
                this.$emit('viewHover', state)
            },
            setCoords: function(_event) {
                this.cursor.x = _event.clientX
                this.cursor.y = _event.clientY
                if(this.viewHover === 'enter') {
                    const el = this.$refs.viewContent.getBoundingClientRect();
                    const x = _event.clientX - el.left; //x position within the element.
                    const y = _event.clientY - el.top;  //y position within the element.
                    TweenMax.to('.view > div', 0.05, {x: x - el.width/2, y: y - el.height/2})
                    if((x - el.width/2) > el.width/2 || -(x - el.width/2) > el.width || (y - el.height/2) > el.height || -(y - el.height/2) > el.height) {
                        this.callback('leave')
                    }
                }
            }
        },
    
    };
    /* eslint-disable */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active 
    transition: all .5s
    transition-delay:.5s


.fade-leave-active 
    transition: all .5s


.fade-enter 
    transform:translateY(-200%) rotateZ(15deg)
    opacity:0

.fade-leave-to 
    transform:translateY(-100%) rotateZ(-10deg)
    opacity:0


.round-fade-enter-active, .round-fade-leave-active 
    transition: all .5s
    transition-delay:1s


.round-fade-leave-active 
    transition: all .5s

.overflow
  overflow:hidden
  height: 60px;
  position: absolute;
  left: 0;
  top: 26%;

.round-fade-enter 
    opacity:0


.round-fade-leave-to 
    opacity:0


.content-counter
    position:absolute
    right: -120.5%
    top: 70%
    font-family: "ZCOOL XiaoWei"

.desc-fade-enter-active 
    transition: all .6s
    transition-delay:1s


.desc-fade-leave-active 
    transition: all .4s


.desc-fade-enter 
    transform:translateY(200%) rotateZ(-15deg)
    opacity:0

.desc-fade-leave-to 
    transform:translateY(200%) rotateZ(-10deg)
    opacity:0

.total-project 
  position:absolute
  top: 0
  left: 1px;
  &:after
    content: "";
    top: -38px;
    height: 30px;
    width: 1px;
    position: absolute;
    left: 60%;
    background: #000;
    transform-origin:top
    transform: scaleY(0)
    animation: updateScale 1s .4s ease-in-out forwards

@keyframes updateScale {
  0% {
    transform: scaleY(1)
  }
  49% {
    transform: scaleY(0)
    transform-origin:top
  }
  50% {
    transform-origin:bottom
    transform: scaleY(0)
  }
  100% {
    transform-origin:bottom
    transform: scaleY(1)
  }
}

.overflow-view 
    position: relative
    width: 100px
    height: 20px
    text-align: center


.view
    color: #000
    text-decoration: none
    font-family: "Circular Bold"
    opacity:1
    padding: 20px

.overflow-number {
    display: flex;
    width: 20px;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    top: -64px;
    left: -4px
}

.number-project 
  text-align:center
  position:relative
  font-family: "ZCOOL XiaoWei";

@keyframes showTop {
    0% {
        transform: translateY(100%) translateX(-50%);
        opacity:0
    }
    100% {
        transform: translateY(0%) translateX(-50%);
        opacity:1
    }
}

.content-view 
    height:120px
    widtho:90%
    margin-top:300px
    display:flex
    justify-content:center
    align-items:center
    position:relative


.title
    color:#000
    font-size:44px
    font-family:"ZCOOL XiaoWei"
    letter-spacing:1px

.overflow-desc
    position: absolute;
    left: 0;
    top: 32%;
    overflow:hidden
    margin-bottom: 200px


.min-content 
    width:40%

.year-project 
    position:absolute
    top:28%
    right: -123%
    font-family: "ZCOOL XiaoWei"
    z-index: 111
    font-size: 18px

.description 
    margin-top: 20px
    margin-left: 55px
    font-family: "Circular Regular"
    position: relative
    font-size: 18px

    &:before 
        content:''
        position:absolute
        top:50%
        transform: translateX(-100%) scaleX(0)
        transform-origin:left;
        animation: animate .6s 1.6s ease-in-out forwards;
        left: -10px
        width: 40px
        background: #000
        height: 1px

@keyframes animate {
    0% {
        transform: translateX(-100%) scaleX(0)
    }
    100%{
        transform: translateX(-100%) scaleX(1)
    }
}

.content-project
    flex-wrap: wrap
    width: 29%
    height: 100vh
    display: flex
    align-items: center
    position: absolute
    top: 0
    left:16%

.content-project.active
    z-index: 11111


.slide-right-left-enter-active, .slide-right-left-leave-active 
    transition: all .5s
    transition-delay:.4s


.slide-right-left-leave-active 
    transition: all .5s


.slide-right-left-enter 
    transform:translateX(-100%)
    opacity:0


.slide-right-left-leave-to 
    transform:translateX(100%)
    opacity:0

@media screen and (max-width: 700px)
    .content-counter, .year
        display:none

    .title
        font-size:25px
        
    .content-project
        width:78%
        height:65vh

    .year-project
      display:none

    .min-content
        width:100%

    .content-view
        position: absolute
        bottom: -39%
        left: 32%

</style>
