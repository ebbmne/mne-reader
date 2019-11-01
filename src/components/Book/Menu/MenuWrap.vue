<template>
  <div class="menu-wrapper">
    <transition name="animation">
      <location-setting v-if="settingIndex === 1"/>
    </transition>
    <transition name="animation">
      <theme-setting v-show="settingIndex === 2" />
    </transition>
    <transition name="animation">
      <font-family-selection v-show="showFontFamilySelection" />
    </transition>
    <transition name="animation">
      <setting-font v-show="settingIndex === 3" />
    </transition>
    <menu-bar />
  </div>
</template>

<script>
import bookMixin from "../BookMixin.js";
import MenuBar from "./MenuBar.vue";
import SettingFont from "./FontSetting/SettingFont.vue";
import FontFamilySelection from "./FontSetting/FontFamilySelection.vue";
import ThemeSetting from "./ThemeSetting/ThemeSetting.vue";
import LocationSetting from "./LocationSetting/LocationSetting.vue";

export default {
  mixins: [bookMixin],
  components: {
    SettingFont,
    MenuBar,
    FontFamilySelection,
    ThemeSetting,
    LocationSetting
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
