<template>
  <div class="global-header">
    <div @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" class="content-name">
      <router-link to="/" :class="nameRoute ? 'active' : ''" class="name" title="Kérian">
        Kérian.
        <span :class="nameRoute ? 'active' : ''" class="line"></span>
      </router-link>
    </div>
    <div @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" class="content-about">
      <router-link to="/about" :class="nameRoute ? 'active' : ''" title="About" class="about">About</router-link>
      <div class="circle-about--hover"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import normalizeWheel from "normalize-wheel"
import { TweenLite, Power4 } from "gsap"

export default {
  name: "Header",
  props: ["name", "stateHover"],
  watch: {
    name: function(newVal, oldVal) {
      this.nameRoute = newVal;
    },
    stateHover: function(newVal, oldVal) {
      this.stateHover = newVal;
    }
  },
  data: function() {
    return {
      scrollNumber: 0,
      nameRoute: this.name
    };
  },
  created: function() {
    if (this.$route.name == "about" || this.$route.name == "work") {
      this.nameRoute = true;
    } else {
      this.nameRoute = false;
    }
    document.body.addEventListener("mousewheel", this.changeActive);
  },
  methods: {
    updateHover: function(state) {
      this.$emit("updateValue", state);
    },
    changeActive: function(_event) {
      const normalized = normalizeWheel(_event);
      if (this.$route.name == "work") {
        this.scrollNumber += normalized.pixelY;
        if (this.scrollNumber > window.innerHeight - 30) {
          this.nameRoute = false;
        } else {
          this.nameRoute = true;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@keyframes showName {
  0% {
    transform: translateY(-100%)
  }

  100% {
    transform: translateY(0%)
  }
}

@keyframes showBar {
  0% {
    transform: scaleX(0)
  }

  100% {
    transform: scaleX(1)
  }
}

.about.active, .name.active {
  color: #fff
}

.name.router-link-active.active + line {
  background: #fff
  transform-origin: left
  transform: scaleX(0)
  transition: 0.4s 0.7s ease-in-out
  animation: showBar 0.7s 1.3s ease-in-out forwards
}

.global-header {
  position: relative
  z-index: 11111111
}

.bg-round-white {
  width: 50px
  height: 50px
  border-radius: 50%
  z-index: 1114
  background: #fff
  transition: 0.5s ease-in-out
}

.content-name {
  overflow: hidden
  position: absolute
  top: 50px
  left: 50px
  width: 60px
  height: 36px

}
.content-name:hover .line {
  transform:scaleX(0);
}

.content-about {
  position: absolute
  top: 50px
  right: 50px
  width: 51px
  height: 24px
}

.name {
  position: absolute
  top: 0px
  left: 0px
  font-family: 'Circular Medium'
  z-index: 1
  font-size: 18px
  position: relative
  transform: translateY(-100%)
  animation: showName 0.4s 0.7s ease-in-out forwards
  text-decoration: none
  color: #000
  transition: 0.7s ease-in-out
}

.line {
  content: ''
  width: 56px
  position: absolute
  top: 20px
  left: 1px
  height: 2px
  border-radius: 2px
  background: #000
  transform-origin: left
  transform: scaleX(1)
    transition: 0.7s ease-in-out
}

.content-name:hover line {
  transform-origin: left
  transform: scaleX(0)
  animation: none
  transition: 0.7s ease-in-out
}

.about {
  position: absolute
  top: 0px
  left: 0px
  font-family: 'Circular Medium'
  z-index: 1
  font-size: 18px
  position: relative
  transform: translateX(-100%)
  animation: showName 0.4s 0.7s ease-in-out forwards
  text-decoration: none
  color: #000
  transition: 0.5s ease-in-out
}

.content-about:hover .circle-about--hover {
  transform:scale(1)
}

.content-about:hover .about {
  color:#fff;
}

.circle-about--hover {
  background:rgba(0,0,0,1)
  border-radius:50%
  height:100px
  width:100px
  position:absolute
  left:50%
  top:50%
  transform:scale(0)
  margin-left: -50px
  transition:.4s ease-in-out;
  margin-top: -50px
}

@media screen and (max-width: 700px) {
  .content-name {
    left: 20px
    top: 20px
  }

  .content-about {
    right: 20px
    top: 20px
  }
}

.line.active {
  background: #fff
}
</style>
