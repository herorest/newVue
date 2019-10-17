<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-Menu></ebook-Menu>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader.vue'
  import EbookTitle from '../../components/ebook/EbookTitle.vue'
  import EbookMenu from '../../components/ebook/EbookMenu.vue'

  export default {
    name: 'home',
    components: {
      EbookReader,
      EbookMenu,
      EbookTitle
    }
  }
</script>

<style scoped>
  .icon-bookmark{
    font-size:1rem;
    color:#f00;
  }
</style>
