<template>
  <div ref="sentance" class="overflow">
    <div v-if="type === 'h2'">
      <transition appear name="show">
        <h2 v-show="animate" class>{{text}}</h2>
      </transition>
    </div>
    <div v-if="type === 'h1'">
      <transition appear name="show">
        <div v-show="animate" class="specc-title">{{text}}</div>
      </transition>
    </div>
    <div v-if="type === 'h3'">
      <transition appear name="show">
        <h3 v-show="animate" class>{{text}}</h3>
      </transition>
    </div>
    <div v-if="type === 'p'">
      <transition appear name="show">
        <p v-show="animate" class>{{text}}</p>
      </transition>
    </div>
    <div v-if="type === 'li'">
      <transition appear name="show">
        <li v-show="animate" class>{{text}}</li>
      </transition>
    </div>
    <div v-if="type === 'div'">
      <transition appear name="show">
        <div class="title" v-show="animate">{{text}}</div>
      </transition>
    </div>
    <div v-if="type === 'div.text'">
      <transition appear name="show">
        <div class="text" v-show="animate">{{text}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import normalizeWheel from "normalize-wheel";
import { TweenLite, Power4 } from "gsap";
import { setTimeout } from "timers";

export default {
  name: "RevealText",
  props: ["text", "scroll", "type", "direction"],
  watch: {
    scroll: function(newVal) {
      if (newVal) {
        this.calcScroll(newVal, this.direction);
      }
    }
  },
  data: function() {
    return {
      animate: false
    };
  },
  methods: {
    calcScroll: function(_scroll, _direction) {
      const sentanceDimensions = this.$refs.sentance.getBoundingClientRect();

      if(window.innerWidth > 700) {

        if (_direction < 0) {
          console.log(sentanceDimensions.top);
          if (sentanceDimensions.top - window.innerHeight > 20) {
            this.animate = false;
          }
        } else {
          if (sentanceDimensions.top - window.innerHeight < 50) {
            this.animate = true;
          }
        }
      } else {
        this.animate = true
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.overflow {
  overflow: hidden;
  min-height: 1.3em;
}

.show-enter-active {
  transition: all 0.6s;
  transition-delay: 0.3s;
}

.overflow {
  overflow: hidden;
}

.title {
  color: #fff;
  font-weight: 700;
}

.text {
  font-size: 18px;
}

.specc-title {
  font-weight: 700;
  font-size: 5em;
  text-align: center;
}

p {
  font-size: 1.3em;
  font-family: 'Poppins';
  color: #e4e4e4;
  line-height: 1.5;
  margin: 0;
}

.show-leave-active {
  transition: all 0.4s;
}

.show-enter {
  transform: translateY(200%) rotateZ(7deg);
  opacity: 0;
}

.show-leave-to {
  transform: translateY(200%) rotateZ(-10deg);
  opacity: 0;
}

h2 {
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 40px;
  letter-spacing: 1.4px;
  font-weight: 800;
}

h3 {
  font-size: 1.3em;
  margin-bottom: 10px;
}

li {
  list-style: none;
  padding: 5px 0;
  color: #ccc;
  font-size: 1.1em;
}
</style>
