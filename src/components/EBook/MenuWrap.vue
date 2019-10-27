<template>
  <transition name="slide-bottom">
    <div class="menu-wrapper">
      <setting-font v-show="settingIndex === 3"></setting-font>
      <menu-bar></menu-bar>
    </div>
  </transition>
</template>

<script>
import SettingFont from "./SettingFont";
import MenuBar from "./MenuBar";
import { mapState } from "vuex";

export default {
  components: {
    SettingFont,
    MenuBar
  },
  computed: {
    ...mapState({
      settingIndex: state => state.settingIndex
    })
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
@import "@/assets/styles/animation.scss";

.menu-wrapper {
  position: absolute;
  width: 100%;
  height: px2rem(80);
  bottom: 0;
  left: 0;
}
</style>