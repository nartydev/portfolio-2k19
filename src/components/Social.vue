<template>
    <div class="social-menu">
        <div class="social-link"><a @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="https://www.linkedin.com/in/kpelat/" target="_blank" title="Linkedin">Linkedin</a></div>
        <div class="social-link"><a @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="https://github.com/nartydev" target="_blank" title="Github">Github</a></div>
        <div class="social-link"><a @mouseover="updateHover('enter')" @mouseleave="updateHover('leave')" href="https://twitter.com/nartydev" target="_blank" title="Twitter">Twitter</a></div>
    </div>
</template>

<script>
export default {
  name: "Social",
  methods: {
    updateHover: function(state) {
        this.$emit('viewHover', state)
    },
  }
};
/* eslint-disable */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.social-menu
    position: absolute
    right: 77px
    bottom: 5%
    height 0
    width:0
    margin: 0
    padding: 0
    transform: rotateZ(-90deg)
    display:flex
    z-index:111111

.social-link:first-child 
    padding-left:0px


.social-link
    display:inline-block
    padding-right:15px
    padding-left:15px
    position:relative
    a:after 
        content: ''
        height: 2px
        width: 100%
        position: absolute
        bottom: -2px
        left: 0
        background: #000000
        transition:.4s ease-in-out
        transform-origin:left
        transform:scaleX(0)
    a:hover:after 
        transform:scaleX(1)
    a 
        text-decoration:none
        color:#000
        position: relative

@media screen and (max-width:700px)
    .social-menu
        display:none



</style>
