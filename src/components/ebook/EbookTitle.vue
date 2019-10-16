<template>
  <transition name="slide-down">
    <div class="title-wrapper">
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

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";

  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 210;
    display: flex;
    width: 100%;
    height: px2rem(60);
    background: white;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
    font-size: px2rem(24);
    .left {
      flex: 0 0 px2rem(60);
      @include left;
      margin-left: px2rem(15);
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
        .icon-shelf {
          font-size: px2rem(26);
        }
        .icon-cart {
          font-size: px2rem(26);
        }
      }
    }
  }
</style>