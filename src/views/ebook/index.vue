<template>
  <div class="ebook">
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader.vue'
  export default {
    name: 'home',
    components: {
      EbookReader
    }
  }
</script>

<style scoped>
  .icon-bookmark{
    font-size:1rem;
    color:#f00;
  }
</style>
