<template>
  <div>
    <div v-for="project of dataProjects" :key="project.id">
      <div
        v-if="$route.params.slug == project.slug"
        class="content-work"
        v-hammer:pan.vertical="slide"
        ref="contentWork"
      >
        <div class="about-animation">
          <div class="bg-round-yellow" :class="showRound ? 'active' : ''">
            <div class="bg-round-white"></div>
          </div>
        </div>
        <img :src="require(`@/assets/${project.slug}.jpg`)" class="banner">
        <div class="fix-title">
          <div v-if="project.view_title" class="content-overflow">
            <h1
              :style="{ color: project.color }"
              :class="showRound ? 'no-anim' : ''"
            >{{project.title}}</h1>
          </div>
        </div>
        <div @mouseover="updateHover('enter')" @onclik="updateHover('enter')" @mouseleave="updateHover('leave')" class="content">
          <div class="col-8">
            <div class="title">DESCRIPTION</div>
            <span class="text-desc" v-html="project.description"></span>
          </div>
          <div class="col-4">
            <div class="title">TYPE</div>
            <p>{{ project.type }}</p>
            <div class="title">TASKS</div>
            <ul>
              <li class="description" v-for="task in project.task" :key="task.id">{{ task.message }}</li>
            </ul>
          </div>
        </div>
        <div class="list-img">
          <div class="content-img" ref="responsive1">
            <div v-if="project.images[0].url === '1.mp4'">
              <video muted autoplay loop>
                <source :src="require(`@/assets/projects/${project.slug}/1.mp4`)" type="video/mp4">
              </video>
            </div>
            <div v-else>
              <img
                :src="require(`@/assets/projects/${project.slug}/1.png`)"
                class="img-responsive img-1"
              >
            </div>
          </div>
          <div class="content-img" ref="responsive2">
            <div v-if="project.images[1].url === '2.mp4'">
              <video muted autoplay loop>
                <source :src="require(`@/assets/projects/${project.slug}/2.mp4`)" type="video/mp4">
              </video>
            </div>
            <div v-else>
              <img
                :src="require(`@/assets/projects/${project.slug}/2.png`)"
                class="img-responsive img-2"
              >
            </div>
          </div>
          <div class="content-img" ref="responsive3">
            <div v-if="project.images[2].url === '3.mp4'">
              <video muted autoplay loop>
                <source :src="require(`@/assets/projects/${project.slug}/3.mp4`)" type="video/mp4">
              </video>
            </div>
            <div v-else>
              <img
                :src="require(`@/assets/projects/${project.slug}/3.png`)"
                class="img-responsive img-3"
              >
            </div>
          </div>
          <div class="content-img" ref="responsive4">
            <div v-if="project.images[3].url === '4.mp4'">
              <video muted autoplay loop>
                <source :src="require(`@/assets/projects/${project.slug}/4.mp4`)" type="video/mp4">
              </video>
            </div>
            <div v-else>
              <img
                :src="require(`@/assets/projects/${project.slug}/4.png`)"
                class="img-responsive img-4"
              >
            </div>
          </div>
          <div class="content-img" ref="responsive5">
            <div v-if="project.images[4].url === '5.mp4'">
              <video muted autoplay loop>
                <source :src="require(`@/assets/projects/${project.slug}/5.mp4`)" type="video/mp4">
              </video>
            </div>
            <div v-else>
              <img
                :src="require(`@/assets/projects/${project.slug}/5.png`)"
                class="img-responsive img-5"
              >
            </div>
          </div>
        </div>
        <div v-show="project.helpby !== undefined" class="container-text">
          <div class="title">Thanks</div>
          <ul>
            <li
              class="description"
              v-for="user in project.helpby"
              :key="user.id"
            >{{ user.author }} - {{ user.role }}</li>
          </ul>
        </div>
        <div class="next-mobile" v-on:click="updateRoute('next')">
          <div class="txt-next">Next</div>
        </div>
        <div class="content-next-project">
          <nextWithCanvas
            :successAnim="nextProject"
            :updateColor="updateColor"
            :dataProjects="dataProjects"
          />
        </div>
      </div>
    </div>

    <div class="circle-transition" v-for="project of dataProjects" :key="project.slug">
      <div
        v-show="$route.params.slug === project.slug"
        class="circle-right"
        :class="slideChangeRouteActive ? 'active' : ''"
      ></div>
      <div
        v-show="$route.params.slug === project.slug"
        class="circle-left"
        :class="slideChangeRouteActiveReverse ? 'active' : ''"
      ></div>
    </div>

    <div class="bg-slide" :class="slideHome ? 'active' : ''"></div>
    <div class="bg-slide-black" :class="slideHome ? 'active' : ''"></div>

    <div class="content-link-project-right">
      <div @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" class="next">
        <div v-on:click="updateRoute('next')" class="link-next">
          <div class="big-word">Next</div>
        </div>
      </div>
    </div>
    <div class="content-link-project-left">
      <div @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" class="prev">
        <div v-on:click="updateRoute('prev')" class="link-prev">
          <div class="big-word">Prev</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import dataProjects from "@/assets/data.json";
import nextWithCanvas from "@/components/nextWithCanvas.vue";
import { TweenLite, Power4, Circ } from "gsap";
import normalizeWheel from "normalize-wheel";

import router from "../router.js";

export default {
  name: "Work",
  components: { nextWithCanvas },
  data: function() {
    return {
      dataProjects: dataProjects,
      scroll: 0,
      prevLink: "",
      nextLink: "",
      updateColor: false,
      successAnim: false,
      nextProject: false,
      showRound: false,
      displayContent: false,
      slideHome: false,
      slideChangeRouteActive: false,
      slideChangeRouteActiveReverse: false,
      imgs: [false, false, false, false, false],
      sizes: { width: window.innerWidth, height: window.innerHeight }
    };
  },
  beforeDestroy: function() {
    document.body.removeEventListener("DOMMouseScroll", this.slide);
    document.body.removeEventListener("mousewheel", this.slide);
    document.body.removeEventListener("keydown", this.slide);
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "about") {
      this.showRound = true;
      this.displayContent = true;
      TweenLite.to(".content-work", 0.5, {
        y: 0,
        ease: Power4.easeOut
      });
      setTimeout(() => {
        this.showRound = false;
        this.displayContent = false;
        next();
      }, 2000);
    } else if (to.name == "home") {
      this.successAnim = true;
      TweenLite.to(".content-work", 0.5, {
        y: 0,
        ease: Power4.easeOut
      });
      setTimeout(() => {
        this.slideHome = true;
      }, 500);
      setTimeout(() => {
        this.successAnim = false;
        next();
      }, 1820);
    } else {
      setTimeout(() => {
        this.successAnim = false;
        next();
      }, 600);
    }
  },
  mounted: function() {
    document.body.addEventListener("DOMMouseScroll", this.slide);
    document.body.addEventListener("mousewheel", this.slide);
    document.body.addEventListener("keydown", this.slide);
    this.setLinks();
  },
  methods: {
    updateHover: function(state) {
      this.$emit("updateValue", state);
    },
    updateRoute: function(direction) {
      this.scroll = 0;
      this.nextProject = direction;
      this.imgs = [false, false, false, false, false];
      this.setLinks();
      this.updateColor = true;
      if (direction === "next") {
        setTimeout(() => {
          this.slideChangeRouteActive = true;
        }, 200);

        setTimeout(() => {
          router.push({ name: "work", params: { slug: this.nextLink } });
        }, 1000);

        setTimeout(() => {
          this.slideChangeRouteActive = false;
        }, 1000);
      } else {
        setTimeout(() => {
          this.slideChangeRouteActiveReverse = true;
        }, 200);

        setTimeout(() => {
          router.push({ name: "work", params: { slug: this.prevLink } });
        }, 1000);

        setTimeout(() => {
          this.slideChangeRouteActiveReverse = false;
        }, 1000);
      }
    },
    setLinks: function() {
      this.dataProjects.map((_project, index) => {
        if (this.$route.params.slug == _project.slug) {
          if (_project.id === 0) {
            this.prevLink = `${this.dataProjects[3].slug}`;
            this.nextLink = `${this.dataProjects[_project.id + 1].slug}`;
          } else if (_project.id === 3) {
            this.prevLink = `${this.dataProjects[_project.id - 1].slug}`;
            this.nextLink = `${this.dataProjects[0].slug}`;
          } else {
            this.prevLink = `${this.dataProjects[_project.id - 1].slug}`;
            this.nextLink = `${this.dataProjects[_project.id + 1].slug}`;
          }
        }
      });
    },
    slide: function(_event) {
      const normalized = normalizeWheel(_event);
      let bounding1 = this.$refs.responsive1[0].getBoundingClientRect();
      let bounding2 = this.$refs.responsive2[0].getBoundingClientRect();
      let bounding3 = this.$refs.responsive3[0].getBoundingClientRect();
      let bounding4 = this.$refs.responsive4[0].getBoundingClientRect();
      let bounding5 = this.$refs.responsive5[0].getBoundingClientRect();

      if (
        bounding1.top - window.innerHeight + 300 <= 0 &&
        this.imgs[0] == false
      ) {
        TweenLite.to(".img-1", 2.4, {
          opacity: 1,
          ease: Power4.easeOut
        });

        this.imgs[0] = true;
      }
      if (
        bounding2.top - window.innerHeight + 300 <= 0 &&
        this.imgs[1] == false
      ) {
        TweenLite.to(".img-2", 2.4, {
          opacity: 1,
          ease: Power4.easeOut
        });
        this.imgs[1] = true;
      }
      if (
        bounding3.top - window.innerHeight + 300 <= 0 &&
        this.imgs[2] == false
      ) {
        TweenLite.to(".img-3", 2.4, {
          opacity: 1,
          ease: Power4.easeOut
        });
        this.imgs[2] = true;
      }
      if (
        bounding4.top - window.innerHeight + 300 <= 0 &&
        this.imgs[3] == false
      ) {
        TweenLite.to(".img-4", 2.4, {
          opacity: 1,
          ease: Power4.easeOut
        });
        this.imgs[3] = true;
      }
      if (
        bounding5.top - window.innerHeight + 300 <= 0 &&
        this.imgs[4] == false
      ) {
        TweenLite.to(".img-5", 2.4, {
          opacity: 1,
          ease: Power4.easeOut
        });
        this.imgs[4] = true;
      }

      if (
        normalized.pixelY === 30 ||
        (normalized.pixelY === 0 && event.keyCode == 40)
      ) {
        normalized.pixelY = 100;
      } else if (
        normalized.pixelY == -30 ||
        (normalized.pixelY === 0 && event.keyCode == 38)
      ) {
        normalized.pixelY = -100;
      } else if (_event.pointerType === "touch") {
        normalized.pixelY /= -3;
      }

      if (normalized.pixelY > 0) {
        if (
          this.scroll + normalized.pixelY >
          this.$refs.contentWork[0].offsetHeight - window.innerHeight
        ) {
          this.scroll =
            this.$refs.contentWork[0].offsetHeight - window.innerHeight;
          TweenLite.to(".content-work", 0.5, {
            y: -this.scroll
          });
          TweenLite.to(".content-next-project", 0.5, {
            y: this.scroll
          });
        } else {
          this.scroll += Math.floor(normalized.pixelY);
          TweenLite.to(".content-work", 0.5, {
            y: -this.scroll
          });
          TweenLite.to(".content-next-project", 0.5, {
            y: this.scroll
          });
        }
      } else {
        if (this.scroll + normalized.pixelY < 0) {
          this.scroll = 0;
          TweenLite.to(".content-work", 0.5, {
            y: -this.scroll
          });
          TweenLite.to(".content-next-project", 0.5, {
            y: this.scroll
          });
        } else {
          this.scroll += Math.floor(normalized.pixelY);
          TweenLite.to(".content-work", 0.5, {
            y: -this.scroll
          });
          TweenLite.to(".content-next-project", 0.5, {
            y: this.scroll
          });
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.about-animation {
  position: absolute;
  top: 15px;
  right: 34px;
  z-index: 111;
}

.bg-slide {
  position: fixed;
  left: 0px;
  right: -1000px;
  top: 0;
  height: 100vh;
  transform: translateX(-100%);
  transition: 2.5s ease-in-out;
  background: #fff;
  opacity: 0;
  will-change: transform;
}

.bg-slide-black {
  position: fixed;
  right: -1000px;
  left: 0;
  top: 0;
  height: 100vh;
  transform: translateX(-100%);
  transition: 2.5s ease-in-out;
  background: #fff;
  opacity: 0;
  z-index: 111;
  will-change: transform;
}

.bg-slide-reverse {
  position: fixed;
  left: 0;
  right: -1000px;
  top: 0;
  height: 100vh;
  transform: translateX(100%);
  transition: 1s ease-in-out;
  background: #fff;
  opacity: 0;
  will-change: transform;
}

video {
  width: 100%;
}

.bg-slide-black-reverse {
  position: fixed;
  right: 0px;
  top: 0;
  left: 0;
  height: 100vh;
  transform: translateX(100%);
  transition: 1s ease-in-out;
  background: #000;
  opacity: 0;
  z-index: 111;
  will-change: transform;
}

.bg-slide.active {
  animation: moveSlide 1.3s ease-in-out forwards;
}

.bg-slide-black.active {
  animation: moveSlide 1.3s 0.1s ease-in-out forwards;
}

.bg-slide-reverse.active {
  animation: moveSlide 1.3s ease-in-out forwards reverse;
}

.bg-slide-black-reverse.active {
  animation: moveSlide 1.3s 0.1s ease-in-out forwards reverse;
}

@keyframes moveSlide {
  0% {
    opacity: 1;
    transform: translateX(-100%);
  }

  98% {
    opacity: 1;
    transform: translateX(0%);
  }

  99% {
    opacity: 0;
    transform: translateX(0%);
  }

  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}

.bg-round-yellow {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1111;
  background: #070808;
  transition: 1.2s 1.3s ease-in-out;
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

.container-text {
  width: 1100px;
  margin: 0 auto;
  padding: 0 0 50px;
}

.content-next-project {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: -11111;
}

.fix-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 11;
}

.mb-100 {
  padding-bottom: 100px;
}

.content-link-project-right {
  position: fixed;
  top: 0;
  width: 150px;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.content-link-project-left {
  position: fixed;
  top: 0;
  width: 150px;
  left: 0;
  bottom: 0;
  z-index: 1;
}

.prev, .next {
  position: absolute;
  top: 50%;
  width: 4%;
  text-align: center;
}

.big-word {
  font-size: 21px;
  margin-bottom: -25px;
}

.link-next {
  color: #fff;
  font-family: 'Poppins';
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
}

.link-prev {
  color: #fff;
  font-family: 'Poppins';
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
}

.next {
  right: 15px;
  transform: rotateZ(90deg) translateX(-25%) translateY(-50%);
  top: 48%;
}

.prev {
  left: 15px;
  transform: rotateZ(-90deg) translateX(25%) translateY(-50%);
  top: 52%;
}

.title {
  font-family: 'ZCOOL XiaoWei';
  margin-top: 30px;
  font-size: 32px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

ul {
  padding: 0;
  margin: 10px 0;

  li {
    list-style: none;
  }
}

.content-img {
  margin: 100px auto;
  width: 1100px;
  text-align: center;
  overflow: hidden;
}

.content-body {
  margin: 100px auto;
  width: 100%;
  text-align: center;
  overflow: hidden;
}

.img-responsive {
  width: 100%;
  will-change: transform, opacity;
  opacity: 0;
}

.content-overflow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.content-work {
  will-change: transform;
}

h1 {
  font-size: 100px;
  text-align: center;
  font-family: 'ZCOOL XiaoWei';
  color: #fff;
  padding: 10px;
  margin: 0;
  transition: 0.5s ease-in-out;
  animation: showTitle 0.4s 0.5s ease-in-out forwards;
  transform: translateY(100%);
}

@keyframes showTitle {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0%);
  }
}

p, .description {
  margin: 5px 0;
  font-family: 'Poppins';
  font-weight: 400;
}

.text-desc, p, .description {
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 1.6;
  font-size: 15px;
}

.content {
  margin: 70px auto;
  width: 1100px;
  display: flex;
  justify-content: space-between;
}

.container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  overflow-x: hidden;
  height: auto;
  margin: 0;
  will-change: transform;
}

.banner {
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
}

.col-8 {
  flex: 0.7;
  padding: 0 30px 0 0;
}

.col-4 {
  flex: 0.3;
  padding: 0 0 0 30px;
}

.no-anim {
  transform: translateY(0%);
  animation: hideTitle 0.5s 0.7s ease-in-out forwards;
}

@keyframes hideTitle {
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(100%);
  }
}

.circle-right {
  right: -100px;
  position: absolute;
  top: 50%;
  height: 150px;
  width: 150px;
  background: red;
  margin-top: -75px;
  margin-left: -75px;
  border-radius: 50%;
  transition: 0.8s ease-in-out;
  transform: scale(0);
  background: #000;
}

.circle-right.active {
  transform: scale(40);
}

.circle-left {
  background: #000;
  left: -100px;
  position: absolute;
  top: 50%;
  height: 150px;
  width: 150px;
  margin-top: -75px;
  margin-left: -75px;
  border-radius: 50%;
  transition: 0.8s ease-in-out;
  transform: scale(0);
}

.circle-left.active {
  transform: scale(40);
}

.next-mobile {
  background: #000;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 34px;
  display: none;
}

.txt-next {
  text-align: center;
}

@media screen and (max-width: 700px) {
  .content-counter, .year {
    display: none;
  }

  .title {
    font-size: 25px;
  }

  .content-project {
    width: 65%;
  }

  .next{
    display:none;
  }

  .prev {
    display:none;
  }

}

@media screen and (max-width: 700px) {
  .content-img {
    margin: 40px auto;
    width: 90%;
  }

  .next-mobile {
    display: block;
  }

  .content-link-project {
    z-index: -1;
  }

  .content {
    width: 90%;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .container-text {
    width: 90%;
  }

  .banner {
    height: 100%;
  }

  .content-work {
    background: #fff;
  }

  .content-overflow {
    width: 100%;
  }

  .fix-title {
    height: 9%;
  }

  .col-8, .col-4 {
    min-width: 100%;
    padding: 0;
  }

  .description {
    font-size: 14px;
  }

  h1 {
    font-size: 50px;
  }
}
</style>
