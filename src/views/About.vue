<template>
  <div>
    <div class="content-anim">
      <div class="circle" :class="showRound ? 'active' : ''"></div>
    </div>
    <div class="about" ref="contentAbout" v-hammer:pan.vertical="magicScroll">
      <div class="container">
        <div class="overflow">
          <transition appear name="fade">
            <h1 v-show="animationOn === true">Hi, I'm Kérian Pelat</h1>
          </transition>
        </div>
        <transition appear name="translate-right">
          <svg
            v-show="animationOn === true"
            xmlns="http://www.w3.org/2000/svg"
            class="text-translate"
            width="4100px"
            height="280px"
          >
            <text
              x="10"
              y="180"
              style="font-family: Poppins;
                      font-size: 187px;
                      font-weight:900;
                      stroke: rgb(255, 255, 255);
                      stroke-width: 3px;
                      letter-spacing:6px;
                      "
            >WEB DEVELOPER</text>
          </svg>
        </transition>
        <div class="content-right">
          <div class="overflow">
            <transition appear name="desc-fade">
              <p
                v-show="animationOn === true"
                class="anim-text"
              >I'm Kérian Pelat, a 19-year-old french front end</p>
            </transition>
          </div>
          <div class="overflow">
            <transition appear name="desc-fade-2">
              <p
                v-show="animationOn === true"
                class="copy-anim-text"
              >developer based in Paris. Currently in third year</p>
            </transition>
          </div>
          <div class="overflow">
            <transition appear name="desc-fade-3">
              <p
                v-show="animationOn === true"
                class="copy-anim-text"
              >at HETIC, I am looking for new opportunities and</p>
            </transition>
          </div>
          <div class="overflow">
            <transition appear name="desc-fade-4">
              <p
                v-show="animationOn === true"
                class="copy-anim-text"
              >new challenges as a freelancer or for an</p>
            </transition>
          </div>
          <div class="overflow">
            <transition appear name="desc-fade-5">
              <p v-show="animationOn === true" class="copy-anim-text">internship for 6 months</p>
            </transition>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="container-about">
        <div ref="contactleft" class="fix">
          <div class="about-me-title">About</div>
        </div>
        <div class="text-about">
          <RevealText
            class="content-text-about"
            :text="'Introduction'"
            :direction="direction"
            :type="'h2'"
            :scroll="scroll"
          />
          <div class="content-p">
            <RevealText
              class="content-text-about"
              :text="'Very soon attracted to the digital world, I started to learn'"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
            <RevealText
              class="content-text-about"
              :text="'web development on my own at the age of 11. Over the years'"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
            <RevealText
              class="content-text-about"
              :text="'I acquired skills, experience and I discovered new aspects of'"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
            <RevealText
              class="content-text-about"
              :text="'the web that I like a lot, such as design and mobile '"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
            <RevealText
              class="content-text-about"
              :text="'application development. I make the most of the experience '"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
            <RevealText
              class="content-text-about"
              :text="'that I have acquired by getting very involved in each of my '"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
            <RevealText
              class="content-text-about"
              :text="'projects. I am curious by nature and I enjoy discovering new '"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
            <RevealText
              class="content-text-about"
              :text="'technologies and creating new tools.'"
              :direction="direction"
              :type="'p'"
              :scroll="scroll"
            />
          </div>
          <br>
          <RevealText
            class="content-text-about"
            :text="'Today I have the chance to work as a freelance for large'"
            :direction="direction"
            :type="'p'"
            :scroll="scroll"
          />
          <RevealText
            class="content-text-about"
            :text="'groups such as RCI Banks & Services (Renault Group), YSL'"
            :direction="direction"
            :type="'p'"
            :scroll="scroll"
          />
          <RevealText
            class="content-text-about"
            :text="'(Yves Saint Laurent) or startups like WhiteLab Genomics.'"
            :direction="direction"
            :type="'p'"
            :scroll="scroll"
          />
          <RevealText
            class="spacing-about"
            :text="'What I do'"
            :direction="direction"
            :type="'h2'"
            :scroll="scroll"
          />
          <div class="flex-between">
            <div>
              <RevealText
                :text="'Front-end development'"
                :direction="direction"
                :type="'h3'"
                :scroll="scroll"
              />
              <ul class="content-skill">
                <RevealText
                  :text="'HTML/CSS/JS ES6'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
                <RevealText
                  :text="'Vue.js & React.js'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
                <RevealText
                  :text="'Gatsby & Next.js'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
              </ul>
            </div>
            <div>
              <RevealText
                :text="'Back-end development'"
                :direction="direction"
                :type="'h3'"
                :scroll="scroll"
              />
              <ul class="content-skill">
                <RevealText :text="'PHP/PDO'" :direction="direction" :type="'li'" :scroll="scroll"/>
                <RevealText
                  :text="'Node.js (Express)'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
                <RevealText
                  :text="'MySQL/PostgreSQL/MongoDB'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
              </ul>
            </div>
            <div>
              <RevealText :text="'Other'" :direction="direction" :type="'h3'" :scroll="scroll"/>
              <ul class="content-skill">
                <RevealText
                  :text="'Love create project'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
                <RevealText
                  :text="'UX/UI Design'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
                <RevealText
                  :text="'AWS (Devops)'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
                <RevealText
                  :text="'React native'"
                  :direction="direction"
                  :type="'li'"
                  :scroll="scroll"
                />
              </ul>
            </div>
          </div>
          <RevealText
            class="spacing-about"
            :text="'My journey'"
            :direction="direction"
            :type="'h2'"
            :scroll="scroll"
          />
          <div class="line-journey">
            <div>
              <div class="line-journey--job">
                <RevealText
                  :text="'Front-end developer'"
                  :direction="direction"
                  :type="'div'"
                  :scroll="scroll"
                />
              </div>
              <div class="line-journey--name">
                <RevealText
                  :text="'Freelance - Paris'"
                  :direction="direction"
                  :type="'div.text'"
                  :scroll="scroll"
                />
              </div>
            </div>
            <div class="line-journey--date">
              <RevealText
                :text="'November 2017 - Present'"
                :direction="direction"
                :type="'div.text'"
                :scroll="scroll"
              />
            </div>
          </div>
          <div class="line-journey">
            <div>
              <div class="line-journey--job">
                <RevealText
                  :text="'Fullstack developer Intern'"
                  :direction="direction"
                  :type="'div'"
                  :scroll="scroll"
                />
              </div>
              <div class="line-journey--name">
                <RevealText
                  :text="'Côté Nature - Paris'"
                  :direction="direction"
                  :type="'div.text'"
                  :scroll="scroll"
                />
              </div>
            </div>
            <div class="line-journey--date">
              <RevealText
                :text="'July 2019 - October 2019'"
                :direction="direction"
                :type="'div.text'"
                :scroll="scroll"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container-copy">
        <div class="title-work">
          <RevealText
            :text="'Let\'s work together'"
            :direction="direction"
            :type="'h1'"
            :scroll="scroll"
          />
        </div>
        <div class="flex-space">
          <div>
            <a
              @mouseover="updateHover('enter')"
              @mouseleave="updateHover('leave')"
              href="mailto:kerian.pelat@hetic.net"
              target="_blank"
              title="Mail"
            >Mail</a>
          </div>
          <div>
            <a
              @mouseover="updateHover('enter')"
              @mouseleave="updateHover('leave')"
              href="https://www.malt.fr/profile/kerianpelat1"
              target="_blank"
              title="Malt"
            >Malt</a>
          </div>
          <div>
            <a
              @mouseover="updateHover('enter')"
              @mouseleave="updateHover('leave')"
              href="https://github.com/nartydev"
              target="_blank"
              title="Github"
            >Github</a>
          </div>
          <div>
            <a
              @mouseover="updateHover('enter')"
              @mouseleave="updateHover('leave')"
              href="https://www.linkedin.com/in/kpelat/"
              target="_blank"
              title="Linkedin"
            >Linkedin</a>
          </div>
          <div>
            <a
              @mouseover="updateHover('enter')"
              @mouseleave="updateHover('leave')"
              href="https://twitter.com/nartydev"
              target="_blank"
              title="Twitter"
            >Twitter</a>
          </div>
        </div>
      </div>
      <div class="container-copy">
        <div class="copy">Copyright &copy; 2019 - Code and design by Kérian Pelat</div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite, Power4 } from "gsap";
import normalizeWheel from "normalize-wheel";
import RevealText from "@/components/RevealText.vue";
import { VueHammer } from "vue2-hammer";

export default {
  name: "about",
  components: { RevealText },
  data: function() {
    return {
      animationOn: true,
      scroll: 0,
      showRound: false,
      valueScrollText: 0,
      direction: 0
    };
  },
  beforeDestroy: function() {
    document.body.removeEventListener("DOMMouseScroll", this.magicScroll);
    document.body.removeEventListener("mousewheel", this.magicScroll);
    document.body.removeEventListener("keydown", this.magicScroll);
  },
  mounted: function() {
    VueHammer.config.pan = {
      touchAction: "auto"
    };
    setTimeout(() => {
      document.body.addEventListener("DOMMouseScroll", this.magicScroll);
      document.body.addEventListener("mousewheel", this.magicScroll);
      document.body.addEventListener("keydown", this.magicScroll);
      this.animationOn = true;
    }, 500);
  },
  beforeRouteLeave(to, from, next) {
    (this.scroll = 0), (this.valueScrollText = 0);
    TweenLite.to(".about", 0.7, {
      y: 0,
      ease: Power4.easeOut
    });
    TweenLite.to(".text-translate", 0.5, {
      x: -this.scroll
    });
    TweenLite.to(".text-translate", 0.5, {
      y: this.valueScrollText
    });
    setTimeout(() => {
      this.animationOn = false;
    }, 700);
    setTimeout(() => {
      this.showRound = true;
    }, 900);
    setTimeout(() => {
      next();
    }, 1700);
  },
  methods: {
    updateHover: function(state) {
      this.$emit("updateValue", state);
    },
    magicScroll: function(_event) {
      const normalized = normalizeWheel(_event);
      this.direction = normalized.pixelY;
      if (
        normalized.pixelY == 30 ||
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

      let boundingLeftContact = this.$refs.contactleft.getBoundingClientRect();
      if (normalized.pixelY > 0) {
        if (
          boundingLeftContact.top < 400 &&
          boundingLeftContact.top > -500 &&
          this.valueScrollText < 500
        ) {
          this.valueScrollText += Math.floor(normalized.pixelY) / 2;
          TweenLite.to(".fix", 0.5, {
            y: this.valueScrollText
          });
        }
        if (
          this.scroll + normalized.pixelY >
          this.$refs.contentAbout.offsetHeight - window.innerHeight
        ) {
          this.scroll =
            this.$refs.contentAbout.offsetHeight - window.innerHeight;
          TweenLite.to(".about", 0.5, {
            y: -this.scroll
          });
        } else {
          this.scroll += Math.floor(normalized.pixelY);
          TweenLite.to(".about", 0.5, {
            y: -this.scroll
          });
          TweenLite.to(".text-translate", 0.5, {
            x: -this.scroll
          });
        }
      } else {
        if (this.scroll + normalized.pixelY <= 0) {
          this.scroll = 0;
          TweenLite.to(".about", 0.5, {
            y: -this.scroll
          });
          TweenLite.to(".text-translate", 0.5, {
            x: -this.scroll
          });
        } else {
          this.scroll += Math.floor(normalized.pixelY);
          if (this.valueScrollText <= 0) {
            this.valueScrollText = 0;
          } else {
            this.valueScrollText += Math.floor(normalized.pixelY) / 2;
          }
          TweenLite.to(".about", 0.5, {
            y: -this.scroll
          });
          TweenLite.to(".text-translate", 0.5, {
            x: -this.scroll
          });
          TweenLite.to(".fix", 0.5, {
            y: this.valueScrollText
          });
        }
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.circle {
  position: fixed;
  background: #fff;
  height: 50px;
  width: 50px;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  border-radius: 50%;
  z-index: 111;
  margin-top: -25px;
  transition: 0.7s ease-in-out;
  transform: scale(0);
}

.circle.active {
  transform: scale(68);
}

.content-anim {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.desc-fade-enter-active {
  transition: all 0.6s;
  transition-delay: 1.1s;
}

.desc-fade-leave-active {
  transition: all 0.4s;
}

.desc-fade-enter {
  transform: translateY(200%) rotateZ(7deg);
  opacity: 0;
}

.desc-fade-leave-to {
  transform: translateY(200%) rotateZ(-10deg);
  opacity: 0;
}

.desc-fade-2-enter-active {
  transition: all 0.6s;
  transition-delay: 1.1s;
}

.desc-fade-2-leave-active {
  transition: all 0.4s;
}

.desc-fade-2-enter {
  transform: translateY(200%) rotateZ(7deg);
  opacity: 0;
}

.desc-fade-2-leave-to {
  transform: translateY(200%) rotateZ(-10deg);
  opacity: 0;
}

.desc-fade-3-enter-active {
  transition: all 0.6s;
  transition-delay: 1.2s;
}

.desc-fade-3-leave-active {
  transition: all 0.4s;
}

.desc-fade-3-enter {
  transform: translateY(200%) rotateZ(7deg);
  opacity: 0;
}

.desc-fade-3-leave-to {
  transform: translateY(200%) rotateZ(-10deg);
  opacity: 0;
}

.desc-fade-4-enter-active {
  transition: all 0.6s;
  transition-delay: 1.3s;
}

.desc-fade-4-leave-active {
  transition: all 0.4s;
}

.desc-fade-4-enter {
  transform: translateY(200%) rotateZ(7deg);
  opacity: 0;
}

.desc-fade-4-leave-to {
  transform: translateY(200%) rotateZ(-10deg);
  opacity: 0;
}

.desc-fade-5-enter-active {
  transition: all 0.6s;
  transition-delay: 1.4s;
}

.desc-fade-5-leave-active {
  transition: all 0.4s;
}

.desc-fade-5-enter {
  transform: translateY(200%) rotateZ(7deg);
  opacity: 0;
}

.desc-fade-5-leave-to {
  transform: translateY(200%) rotateZ(-10deg);
  opacity: 0;
}

.overflow {
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter {
  transform: translateY(-200%) rotateZ(15deg);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(-100%) rotateZ(-10deg);
  opacity: 0;
}

.translate-right-enter-active, .translate-right-leave-active {
  transition: all 1s ease-in-out;
  transition-delay: 0.3s;
}

.translate-right-leave-active {
  transition: all 0.5s;
}

.translate-right-enter {
  transform: translateX(50%);
  opacity: 0;
}

.translate-right-leave-to {
  opacity: 0;
}

body {
  background: #070808;
}

.title-work {
  margin-top: 87px;
  margin-bottom: 20px;
}

.content-right {
  width: 57%;
  float: right;
}

.anim-text {
  width: 100%;
  margin-top: 290px;
  font-weight: 500;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: 0;
}

.line-journey {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.line-journey > div {
  width: 50%;
  font-size: 18px;
}

.line-journey--date {
  text-align: right;
}

.line-journey--name {
  color: #fff;
}

.line-journey--job {
  color: #fff;
  font-weight: 700;
}

.copy-anim-text {
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: 'Poppins';
  font-size: 1.5em;
  color: #fff;
  margin: 0;
  will-change: opacity, transform;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    flex: 0.47;
    min-width: 47%;
  }
}

.flex-space {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    padding: 30px;
  }

  > div > a {
    padding: 30px 0;
    font-weight: 600;
    letter-spacing: 0.5px;
    position: relative;
  }

  > div > a::after {
    position: absolute;
    left: 0;
    right: 0;
    content: '';
    top: 53px;
    height: 0px;
    border-bottom: 1px solid #fff;
    background: #fff;
    transform-origin: left;
    transition: 0.5s ease-in-out;
    transform: scaleX(1);
  }

  > div > a:hover::after {
    transform: scaleX(0);
  }
}

a {
  text-decoration: none;
  color: #fff;
}

.text-translate {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 180px;
  position: absolute;
  left: -11px;
  width: 4183px;
  color: #1e1e1e;
}

.content-skill {
  margin: 0;
  padding: 0;
}

.content-skill li {
  list-style: none;
  padding: 5px 0;
  color: #ccc;
  font-size: 1.1em;
}

.spacing-about {
  margin: 50px 0 0px;
}

h1 {
  font-size: 60px;
  font-family: 'Poppins';
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

p {
  font-size: 1.3em;
  font-family: 'Poppins';
  color: #e4e4e4;
  line-height: 1.5;
}

.container {
  color: #fff;
  width: 1100px;
  margin: 150px auto 0;
  position: relative;
}

.container-copy {
  color: #fff;
  width: 1100px;
  margin: 0px auto 0;
  padding: 70px 0;
  position: relative;
  color: #fff;
}

.container-about {
  color: #fff;
  width: 1100px;
  margin: 70px auto 0;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.fix {
  flex: 0.4;
}

.about {
  font-family: 'Poppins';
}

.text-about {
  flex: 0.57;
}

.clear {
  clear: both;
}

.about {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}

.content-text {
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
}

.content-picture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.overflow-text {
  width: 40%;
  overflow: hidden;
}

.anim-text {
  font-family: 'Poppins';
  font-size: 1.5em;
  color: #fff;
  will-change: opacity, transform;
}

.about-me-title {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 16em;
  font-weight: 800;
}

.copy {
  color: #ccc;
  padding-bottom: 30px;
}

@media screen and (max-width: 700px) {
  * {
    box-sizing: border-box;
  }

  .flex-between > div {
    min-width: 100%;
  }

  .line-journey {
    flex-wrap: wrap;
  }

  .line-journey > div {
    width: 100%;
    text-align: left;
  }

  .fix {
    display: none;
  }

  .container-about, .container, .container-copy {
    width: 100%;
    padding: 0 15px;
  }

  .text-about {
    flex: 1;
  }

  .content-right {
    width: 100%;
  }

  .title-contact {
    font-size: 4em;
    line-height: 1;
  }

  h1 {
    font-size: 46px;
  }

  .text-translate {
    display: none;
  }

  .anim-text {
    margin-top: 15px;
  }

  .title-work {
    margin-top:27px;
  }

  .title-work div {
    font-size:3em;
  }
}
</style>
