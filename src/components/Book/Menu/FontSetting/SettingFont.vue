<template>
  <div class="setting-font">
    <div class="setting-font-size">
      <div class="sign left" :style="minFontSize">A</div>
      <div class="center">
        <div
          class="line-wrapper"
          v-for="(item, index) in fontSizeCollection"
          :key="index"
          @click="selectFontSize(index)"
        >
          <div class="left"></div>
          <div class="point-wrapper">
            <div class="point" v-show="currentFontSizeIndex === index"></div>
          </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="sign right" :style="maxFontSize">A</div>
    </div>
    <div class="setting-font-family" @click="selectFontFamily">
      <div class="family-name">{{ familyName }}</div>
      <div class="family-icon">
        <span class="icon-forward"></span>
      </div>
    </div>
  </div>
</template>

<script>
import bookMixin from '../../BookMixin.js';

export default {
  mixins: [bookMixin],
  computed: {
    minFontSize() {
      return { fontSize: this.fontSizeCollection[0].fontSize + "px" };
    },
    maxFontSize() {
      return {
        fontSize:
          this.fontSizeCollection[this.fontSizeCollection.length - 1].fontSize+"px"
      };
    },
    familyName() {
      return this.fontFamilyCollection[this.currentFontFamilyIndex].fontName;
    }
  },
  methods: {
    selectFontSize(index) {
      this.setCurrentFontSizeIndex(index);
    },
    selectFontFamily() {
      this.setShowFontFamilySelection(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.setting-font {
  width: 100%;
  height: px2rem(80);
  background: white;
  display: flex;
  flex-direction: column;
  .setting-font-size {
    width: 100%;
    height: px2rem(60);
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    box-shadow: px2rem(0) px2rem(-8) px2rem(8) rgba(0,0,0,0.2);
    @include center;
    .sign {
      width: px2rem(40);
      height: px2rem(40);
      line-height: px2rem(40);
      &.left {
        @include center;
        position: relative;
        left: 3%;
      }
      &.right {
        @include center;
        position: relative;
        left: -3%;
      }
    }
    .center {
      flex: 1;
      display: flex;
      height: px2rem(30);
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
  .setting-font-family {
    width: 100%;
    height: px2rem(40);
    font-size: px2rem(14);
    display: flex;
    justify-content: center;
  }
}
</style>