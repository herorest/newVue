<template>
  <div class="ebook-reader">
    <div id="read"></div>
    <div class="mask" @touchstart="touchstart" @touchend="touchend"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    computed: {
      ...mapGetters(['fileName'])
    },
    methods: {
      touchstart(event){
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
      },
      touchend(event){
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.touchStartTime
        if(time < 500 && offsetX > 40){
          this.prevPage()
        }else if(time < 500 && offsetX < -40){
          this.nextPage()
        }else{
          this.showTitleAndMenu()
        }
        event.preventDefault()
        event.stopPropagation()
      },
      initEpub(){
        let url = '/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        this.rendition.display()
      },

      prevPage(){
        this.rendition && this.rendition.prev()
      },

      nextPage(){
        this.rendition && this.rendition.next()
      }
    },
    mounted(){
      let fileName = this.$route.params.fileName
      if(fileName){
        fileName = fileName.split('|').join('/')
        this.$store.dispatch('setFileName', fileName).then(() => {
          this.initEpub()
        })

      } 
      
    }
  }
</script>

<style>
.mask{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
}
</style>