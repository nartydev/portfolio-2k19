<template>
  <div>
    <canvas ref="canvas" :width="sizes.width" :height="sizes.height"/>
  </div>
</template>

<script>
/* eslint-disable */
import RandomRound from "@/controller/RandomRound";
import Hermite_class from "hermite-resize";

export default {
  name: "Canvas",
  props: ["id", "nextProject", "successAnim", "displayContent"],
  data: function() {
    return {
      ctx: undefined,
      sizes: { width: window.innerWidth, height: window.innerHeight },
      cursor: {
        x: 0,
        y: 0,
        xPage: 0,
        yPage: 0,
        lastX: 0,
        lastY: 0,
        directionX: 0,
        directionY: 0,
        speedMouseX: 0,
        speedMouseY: 0
      },
      rounds: [],
      bigRounds: []
    };
  },
  mounted: function() {
    this.updateCanvas();
    window.addEventListener("resize", this.resize);

    /* Set mouse */

    window.addEventListener("mousemove", e => this.detectMouse(e));
    this.allPoint = [
      {
        contentPoint: [
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2,
          this.sizes.width / 2 + 35,
          this.sizes.height / 2
        ]
      }
    ];

    this.mouseSpeed();

    /* Set loop */
    this.loop();
    this.allPoint.map((_round, _key) => {
      const round = new RandomRound(
        _key,
        this.cursor,
        this.ctx,
        this.sizes,
        _round.contentPoint,
        true,
        false
      );
      this.bigRounds.push(round);
    });
  },
  watch: {
    nextProject: function(newVal, oldVal) {
      // watch it
      if (newVal) {
        this.bigRounds[0].changeURLImage(this.id);
      }
    },
    successAnim: function(newVal) {
      if (newVal) {
        this.bigRounds[0].scaleShape();
        this.bigRounds[0].moveImage();
      }
    },
    displayContent: function(newVal) {
      this.bigRounds[0].hidden();
    }
  },
  methods: {
    changePoints: function() {
      for (let round of this.bigRounds) {
        round.changePoint();
      }
    },
    detectMouse: function(_event) {
      this.cursor.x = _event.clientX;
      this.cursor.y = _event.clientY;
      if (this.cursor.xPage < _event.pageX) this.cursor.directionX = 1;
      else if (this.cursor.xPage > _event.pageX) this.cursor.directionX = -1;
      else this.cursor.directionX = 0;

      if (this.cursor.yPage < _event.pageY) this.cursor.directionY = 1;
      else if (this.cursor.yPage > _event.pageY) this.cursor.directionY = -1;
      else this.cursor.directionY = 0;

      this.cursor.xPage = _event.pageX;
      this.cursor.yPage = _event.pageY;
    },
    resize: function() {
      this.sizes.height = window.innerHeight;
      this.sizes.width = window.innerWidth;
      this.ctx.width = this.sizes.width;
      this.ctx.height = this.sizes.height;
      this.bigRounds = [];
      this.allPoint.map((_round, _key) => {
        const round = new RandomRound(
          _key,
          this.cursor,
          this.ctx,
          this.sizes,
          _round.contentPoint,
          true,
          false
        );
        this.bigRounds.push(round);
      });
    },
    loop: function() {
      window.requestAnimationFrame(() => {
        this.loop();
      });

      for (let round of this.bigRounds) {
        round.draw();
      }
    },
    updateCanvas: function() {
      var HERMITE = new Hermite_class();
      this.ctx = this.$refs.canvas.getContext("2d");
      HERMITE.resample(this.$refs.canvas, this.sizes.width, this.sizes.height);
    },
    mouseSpeed: function() {
      this.cursor.speedMouseX = this.cursor.xPage - this.cursor.lastX;
      this.cursor.speedMouseY = this.cursor.yPage - this.cursor.lastY;

      this.cursor.lastX = this.cursor.xPage;
      this.cursor.lastY = this.cursor.yPage;

      setTimeout(() => this.mouseSpeed(), 50);
    }
  },
  destroy: function() {
    window.removeEventListener("mousemove", this.detectMouse);
    window.removeEventListener("resize", this.resize);
  }
};
/* eslint-disable */
</script>

<style lang="stylus">
canvas {
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -o-crisp-edges;
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor;
}
</style>
