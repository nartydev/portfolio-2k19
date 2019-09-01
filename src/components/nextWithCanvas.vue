<template>
  <div>
    <canvas class="canvas" ref="canvas" :width="sizes.width" :height="sizes.height"/>
  </div>
</template>

<script>
/* eslint-disable */

import RandomRound from "@/controller/RandomRound";

export default {
  name: "nextProject",
  props: ['dataProjects', 'updateColor'],
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
      bigRounds: [],
      actualProject: null
    };
  },
  mounted: function() {

      this.updateCanvas();
      this.selectProject()
      window.addEventListener("resize", () => this.resize());

      /* Set mouse */

      window.addEventListener("mousemove", e => this.detectMouse(e));
      this.allPoint = [
        {
          contentPoint: [
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2,
            0,
            this.sizes.height / 2
          ]
        },
        {
          contentPoint: [
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2,
            this.sizes.width,
            this.sizes.height / 2
          ]
        }
      ];

      this.mouseSpeed();
    if(window.innerWidth > 700) {

      /* Set loop */
      this.loop();
      this.allPoint.map((_round, _key) => {
        const round = new RandomRound(
          _key,
          this.cursor,
          this.ctx,
          this.sizes,
          _round.contentPoint,
          false,
          true,
          this.actualProject
        );
        this.bigRounds.push(round);
      });
    }
  },
  updated: function() {
    console.log('okbgvfncdk,')
  },
  watch: {
    updateColor: function(newVal) {
      console.log('watch:', newVal)
      this.selectProject()
    }
  },
  methods: {
    changePoints: function() {
      for (let round of this.bigRounds) {
        round.changePoint();
      }
    },
    selectProject: function() {
        this.dataProjects.map((_project, index) => {
            if (this.$route.params.slug == _project.slug) {
                this.actualProject = _project.bg
            }
        });
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
     this.bigRounds = []
      this.allPoint.map((_round, _key) => {
        const round = new RandomRound(
          _key,
          this.cursor,
          this.ctx,
          this.sizes,
          _round.contentPoint,
          false,
          true,
          this.actualProject
        );
        this.bigRounds.push(round);
      });
    },
    loop: function() {
      window.requestAnimationFrame(() => {
        this.loop();
      });

      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(0, 0, this.sizes.width, this.sizes.height);

      for (let round of this.bigRounds) {
        round.draw();
      }
    },
    updateCanvas: function() {
      this.ctx = this.$refs.canvas.getContext("2d");
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

@media screen and (max-width:700px)
  .canvas
    display:none

</style>
