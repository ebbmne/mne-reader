<template>
  <div class="font-family-selection-wrapper">
    <div class="title" @click="hideSelection">
      <div class="icon-wrapper">
        <span class="icon-down2"></span>
      </div>
      <div class="comment">选择字体</div>
    </div>
    <div
      class="font-family-item"
      v-for="(item, index) in fontFamilyCollection"
      :key="index"
      @click="selectFontFamily(index)"
      :class="{'selected': index === currentFontFamilyIndex}"
    >
      <div class="font-name">{{ item.fontName }}</div>
      <div class="icon">
        <span class="icon-check"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "fontFamilyCollection",
      "currentFontFamilyIndex",
      "currentBookRendition"
    ])
  },
  methods: {
    ...mapMutations(["showFontFamilySelection"]),
    ...mapActions(["setCurrentFontFamilyIndex"]),
    selectFontFamily(index) {
      this.setCurrentFontFamilyIndex(index);
      const fontName = this.fontFamilyCollection[index].fontName;
      if (index !== 0) {
        this.currentBookRendition.themes.font(fontName);
      }
    },
    hideSelection() {
      this.showFontFamilySelection(false);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/global.scss";

.font-family-selection-wrapper {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 200;
  font-size: px2rem(16);
  box-shadow: px2rem(0) px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.3);
  .title {
    width: 100%;
    height: px2rem(30);
    background: white;
    display: flex;
    border-bottom: px2rem(1) solid #ccc;
    font-weight: bold;
    .icon-wrapper {
      flex: 0 0 px2rem(35);
      @include center;
    }
    .comment {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px2rem(12);
      position: relative;
      left: px2rem(-17);
    }
  }
  .font-family-item {
    width: 100%;
    height: px2rem(30);
    line-height: px2rem(30);
    background-color: white;
    font-size: px2rem(14);
    display: flex;
    &.selected {
      color: #66ccff;
      font-weight: bold;
    }
    .font-name {
      flex: 1;
      text-indent: px2rem(10);
    }
    .icon {
      flex: 0 0 px2rem(30);
    }
  }
}
</style>
