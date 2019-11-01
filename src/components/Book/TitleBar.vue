<template>
  <div class="title-bar">
    <div class="left">
      <span class="icon-back"></span>
    </div>
    <div class="right">
      <div class="item">
        <span class="icon-shelf"></span>
      </div>
      <div class="item">
        <span class="icon-cart"></span>
      </div>
      <div class="item">
        <span class="icon-more"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
@import "@/assets/styles/animation.scss";

.title-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: px2rem(40);
  background: white;
  display: flex;
  z-index: 101;
  font-size: px2rem(22);
  box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, 0.25);
  .left {
    flex: 0 0 px2rem(40);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .item {
      width: px2rem(40);
      height: px2rem(40);
      @include center;
    }
  }
}
</style>