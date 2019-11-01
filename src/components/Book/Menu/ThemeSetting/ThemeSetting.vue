<template>
  <div class="theme-setting-wrapper">
    <div class="theme-setting-item"
      v-for="(item, index) in themeCollection"
      :key="index"
      :class="{'selectTheme': currentThemeIndex === index}"
    >
      <div class="theme-block-wrapper">
        <div class="theme-block" @click="selectTheme(index)">
          <div class="theme-block-item" :style="{'background-color': item.style.body.background}"></div>
        </div>
      </div>
      <div class="theme-name">{{ item.alias }}</div>
    </div>
  </div>
</template>

<script>
import bookMixin from "../../BookMixin.js";

export default {
  mixins: [bookMixin],
  methods: {
    selectTheme(index) {
      this.setCurrentThemeIndex(index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.theme-setting-wrapper {
  display: flex;
  width: 100%;
  height: px2rem(80);
  background: white;
  z-index: 120;
  box-shadow: px2rem(0) px2rem(-4) px2rem(4) rgba(0, 0, 0, 0.2);
  .theme-setting-item {
    flex: 1;
    .theme-block-wrapper {
      width: 100%;
      height: px2rem(60);
      @include center;
      .theme-block {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: px2rem(5);
        .theme-block-item {
          width: 100%;
          height: 100%;
        }
      }
    }
    .theme-name {
      width: 100%;
      height: px2rem(20);
      font-size: px2rem(12);
      @include center;
    }
    &.selectTheme {
      .theme-name {
        font-weight: bold;
      }
      .theme-block-item {
        border: px2rem(2) solid #666;
      }
    }
  }
}
</style>