<template>
  <div class="setting-font">
    <div class="sign left"
      :style="{fontSize: this.fontSizeSetting[0].fontSize + 'px'}">A</div>
    <div class="center">
      <div class="line-wrapper" 
        v-for="(item, index) in fontSizeSetting" 
        :key="index">
        <div class="left"></div>
        <div class="point-wrapper"
          @click="selectFontSize(index)"
        >
          <div class="point" v-show="currentFontSizeIndex === index"></div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <div class="sign right" 
      :style="{fontSize: this.fontSizeSetting[this.fontSizeSetting.length-1].fontSize + 'px'}">A</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      fontSizeSetting: state => state.fontSizeSetting,
      currentFontSizeIndex: state => state.currentFontSizeIndex
    }),
  },
  methods: {
    ...mapActions(["changeCurrentFontSizeInddex"]),
    selectFontSize(index) {
      this.changeCurrentFontSizeInddex(index);
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';

.setting-font {
  width: 100%;
  height: px2rem(40);
  background: white;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  box-shadow: px2rem(0) px2rem(-8) px2rem(8) #ccc;
  .sign {
    width: px2rem(40);
    height: px2rem(40);
    flex: 0 0 px2rem(40);
    line-height: px2rem(40);
    &.left {
      text-align: right;
    }
    &.right {
      text-align: left;
    }
  }
  .center{
    flex: 1;
    display: flex;
    .line-wrapper {
      flex: 1;
      display: flex;
      @include center;
      .left {
        flex: 1;
        height: 0;
        border-top: px2rem(1) solid #666;
      }
      .right {
        flex: 1;
        height: 0;
        border-top: px2rem(1) solid #666;
      }
      .point-wrapper {
        flex: 0 0 0;
        width: 0;
        height: px2rem(8);
        border-left: px2rem(1) solid #666;
        position: relative;
        .point {
          width: px2rem(12);
          height: px2rem(12);
          border-radius: px2rem(6);
          background-color: #777;
          position: absolute;
          left: px2rem(-6.5);
          top: px2rem(-2.5);
        }
      }
      &.line-wrapper:first-child {
        .left {
          border: none;
        }
      }
      &.line-wrapper:last-child {
        .right {
          border: none;
        }
      }
    }
  }
}
</style>