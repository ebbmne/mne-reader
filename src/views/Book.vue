<template>
  <div class="book">
    <transition name="animation">
      <title-bar v-show="showTitleAndMenuWrap"></title-bar>
    </transition>
    <reader></reader>
    <transition name="animation">
      <menu-wrap v-show="showTitleAndMenuWrap"></menu-wrap>
    </transition>
  </div>
</template>

<script>
import TitleBar from "@/components/Book/TitleBar.vue";
import Reader from "@/components/Book/Reader.vue";
import MenuWrap from "@/components/Book/Menu/MenuWrap.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TitleBar,
    Reader,
    MenuWrap
  },
  computed: {
    ...mapGetters(["showTitleAndMenuWrap"])
  }
};
</script>

<style lang="scss" scoped>
.book {
  width: 100%;
  height: 100%;
}
</style>
