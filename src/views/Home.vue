<template>
  <div class="home" ref="home">
    <Canvas
      :id="id"
      :successAnim="successAnim"
      :displayContent="displayContent"
      :coordsContent="coordsContent"
      class="global-canvas"
      :nextProject="nextProject"
    />
    <div v-for="project of dataProjects" class="global-project" :key="project.id">
      <Project
        v-if="id == project.id"
        @viewHover="updateHover"
        :project="project"
        :key="project.id"
        :id="id"
        :displayContent="displayContent"
        :successAnim="successAnim"
        :nextProject="nextProject"
      />
    </div>
    <Social @viewHover="updateHover"/>

    <div class="global-control-slide" :class="displayContent ? 'active' : ''">
      <div
        class="content-order"
        @mouseover="updateHover('enter')"
        @mouseleave="updateHover('leave')"
      >
        <div v-on:click="changeById(0)" class="confort-hover">
          <div class="point">
            <div :class="id == 0 ? 'active' : ''" class="line"></div>
          </div>
        </div>
        <div v-on:click="changeById(1)" class="confort-hover">
          <div class="point">
            <div :class="id == 1 ? 'active' : ''" class="line"></div>
          </div>
        </div>
        <div v-on:click="changeById(2)" class="confort-hover">
          <div class="point">
            <div :class="id == 2 ? 'active' : ''" class="line"></div>
          </div>
        </div>
        <div v-on:click="changeById(3)" class="confort-hover">
          <div class="point">
            <div :class="id == 3 ? 'active' : ''" class="line"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-animation">
      <div class="bg-round-yellow" :class="showRound ? 'active' : ''">
        <div class="bg-round-white"></div>
      </div>
    </div>

    <div
      class="bottom-left"
      @mouseover="updateHover('enter')"
      @mouseleave="updateHover('leave')"
      v-on:click="changeById(id+1 === 4 ? 0 : id+1)"
    >
      <div class="scroll">Scroll</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Canvas from "@/components/Canvas.vue";
import Project from "@/components/Project.vue";
import Social from "@/components/Social.vue";
import normalizeWheel from "normalize-wheel";

import dataProjects from "@/assets/data.json";

export default {
  name: "home",
  components: {
    Canvas,
    Project,
    Social
  },
  data: function() {
    return {
      id: 0,
      cursorMain: {
        x: 0,
        y: 0
      },
      lockMouseWheel: true,
      nextProject: false,
      dataProjects: dataProjects,
      successAnim: false,
      showRound: false,
      displayContent: false,
      activeChange: true,
      coordsContent: {
        x: 0,
        y: 0
      }
    };
  },
  mounted: function() {
    document.body.addEventListener("DOMMouseScroll", this.changeProject);
    document.body.addEventListener("mousewheel", this.changeProject);
    document.body.addEventListener("keydown", this.changeProject);
  },
  beforeDestroy: function() {
    document.body.removeEventListener("DOMMouseScroll", this.changeProject);
    document.body.removeEventListener("mousewheel", this.changeProject);
    document.body.removeEventListener("keydown", this.changeProject);
  },
  beforeRouteLeave(to, from, next) {
    // Set animation for route change
    if (to.name == "about") {
      this.showRound = true;
      this.displayContent = true;
      setTimeout(() => {
        this.showRound = false;
        this.displayContent = false;
        next();
      }, 2000);
    } else {
      this.successAnim = true;
      setTimeout(() => {
        this.successAnim = false;
        next();
      }, 1500);
    }
  },
  methods: {
    changeById: function(id) {
      // Change project by id
      if (this.activeChange) {
        this.id = id;
        this.nextProject = true;
        this.activeChange = false;
        this.lockMouseWheel = false;

        setTimeout(() => {
          this.activeChange = true;
          this.lockMouseWheel = true;
          this.nextProject = false;
        }, 1600);
      }
    },
    updateHover: function(state) {
      // Change state of cursor when hover
      this.$emit("updateValue", state);
    },
    changeProject: function(_event) {
      const normalized = normalizeWheel(_event);

      if (
        (normalized.pixelY >= 30 && this.lockMouseWheel) ||
        (_event.keyCode === 40 &&
          normalized.pixelY === 0 &&
          this.lockMouseWheel)
      ) {
        if (this.id == 3) {
          this.id = 0;
        } else {
          this.id++;
        }
        this.lockMouseWheel = false;
        this.nextProject = true;

        setTimeout(() => {
          this.lockMouseWheel = true;
          this.nextProject = false;
        }, 1600);
      } else if (
        (normalized.pixelY <= -30 && this.lockMouseWheel) ||
        (_event.keyCode === 38 &&
          normalized.pixelY === 0 &&
          this.lockMouseWheel)
      ) {
        if (this.id == 0) {
          this.id = 3;
        } else {
          this.id--;
        }
        this.lockMouseWheel = false;
        this.nextProject = true;

        setTimeout(() => {
          this.lockMouseWheel = true;
          this.nextProject = false;
        }, 1600);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.home {
  background: #fff;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

.about-animation {
  position: absolute;
  top: 15px;
  right: 34px;
}

.bg-round-yellow {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1111;
  background: #070808;
  transition: 1.2s 0.8s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
}

.bg-round-yellow.active {
  transform: scale(80);
}

.bg-round-white {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1114;
  background: #070808;
  transition: 0.5s ease-in-out;
}

.global-control-slide {
  width: 6%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 11111111;
  transition: 0.8s 0.8s ease-in-out;
}

.global-control-slide.active {
  transform: translateX(-100%) translateY(-50%);
  opacity: 0;
}

.confort-hover {
  cursor: pointer;
  padding: 1px 0;
}

.confort-hover:hover .point .line {
  animation: showLine 0.5s ease-in-out forwards;
}

.scroll {
  transform: rotateZ(-90deg);
  position: relative;
  height: 0;
  width: 0;
  cursor: pointer;
  z-index: 1111111;

  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 1px;
    background: #000;
    top: 11px;
    left: 53px;
  }
}

@keyframes showLine {
  0% {
    transform: scaleX(1);
  }

  49% {
    transform: scaleX(0);
    transform-origin: left;
  }

  50% {
    transform-origin: right;
    transform: scaleX(0);
  }

  100% {
    transform-origin: right;
    transform: scaleX(1);
  }
}

.point {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9c9c9c;
  margin: 15px 0;
  position: relative;

  .line {
    width: 20px;
    background: #000;
    position: absolute;
    height: 2px;
    border-radius: 10px;
    top: 50%;
    left: 20px;
    transform: scaleX(0) translateY(-50%);
    transition: 0.4s;
    transform-origin: left;
  }

  .line.active {
    transform: scaleX(1) translateY(-50%);
  }
}

.bottom-left {
  position: absolute;
  left: 42px;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-indicator {
  circle {
    fill: none;
    stroke-width: 2px;
    stroke: #FCDC4D;
    stroke-dasharray: 110px;
    transform-origin: center;
  }
}

.content-cursor {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
  z-index: 110;
}

@media screen and (max-width: 700px) {
  .bottom-left {
    display: none;
  }

  .global-control-slide {
    left: 10px;
  }

  .about-animation {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>