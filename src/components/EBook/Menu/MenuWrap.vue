<template>
  <transition name="slide-bottom">
    <div class="menu-wrapper">
      <font-family-selection v-show="showFontFamilySelection" />
      <theme-setting v-show="settingIndex === 2" />
      <setting-font v-show="settingIndex === 3" />
      <menu-bar />
    </div>
  </transition>
</template>

<script>
import MenuBar from "./MenuBar.vue";
import SettingFont from "./FontSetting/SettingFont.vue";
import FontFamilySelection from "./FontSetting/FontFamilySelection.vue";
import ThemeSetting from "./ThemeSetting/ThemeSetting.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SettingFont,
    MenuBar,
    FontFamilySelection,
    ThemeSetting
  },
  computed: {
    ...mapGetters(["settingIndex", "showFontFamilySelection"]), 
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
@import "@/assets/styles/animation.scss";

.menu-wrapper {
  position: absolute;
  width: 100%;
  height: px2rem(120);
  bottom: 0;
  left: 0;
  z-index: 120;
}
</style>
