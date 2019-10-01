<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="ifTitleAndMenuShow">
      <div class="left">
        <span class="icon-back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-person"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
   
  }
</script>