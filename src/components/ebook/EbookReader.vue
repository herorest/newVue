<template>
  <div class="ebook-reader">
    <div id="read"></div>
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
      initEpub(){
        let url = '/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.showBook = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        this.showBook.display()

        this.showBook.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })

        this.showBook.on('touchend', event => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          console.log(offsetX, time);
          if(time < 500 && offsetX > 40){
            this.prevPage()
          }else if(time < 500 && offsetX < -40){
            this.nextPage()
          }else{
            this.showTitleAndMenu()
          }
          event.preventDefault()
          event.stopPropagation()
        })
      },

      prevPage(){
        this.showBook && this.showBook.prev()
      },

      nextPage(){
        this.showBook && this.showBook.next()
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