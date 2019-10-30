<template>
  <div class="menu-bar" :class="{'hide-box-shadow': hideBoxShadow}">
    <div class="item">
      <span class="icon-menu"></span>
    </div>
    <div class="item">
      <span class="icon-progress"></span>
    </div>
    <div class="item">
      <span class="icon-bright" @click="showFontSizeCollection(2)"></span>
    </div>
    <div class="item">
      <span class="icon-a" @click="showFontSizeCollection(3)">A</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "settingIndex", 
      "showTitleAndMenuWrap"
    ]),
    hideBoxShadow() {
      return (this.settingIndex !== -1) || (!this.showTitleAndMenuWrap);
    }
  },
  methods: {
    ...mapMutations([
      "setSettingIndex"
    ]),
    showFontSizeCollection(index) {
      if (this.settingIndex !== 3) {
        this.setSettingIndex(index);
      } else {
        this.setSettingIndex(-1);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
@import "@/assets/styles/animation.scss";

.menu-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: px2rem(40);
  background: white;
  box-shadow: 0 px2rem(-4) px2rem(4) rgba(0, 0, 0, 0.25);
  display: flex;
  &.hide-box-shadow {
    box-shadow: none;
  }
  .item {
    flex: 1;
    font-size: px2rem(22);
    @include center;
  }
}
</style>