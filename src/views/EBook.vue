<template>
  <div class="ebook">
    <title-bar v-show="showTitleAndMenuWrap"></title-bar>
    <reader></reader>
    <menu-wrap v-show="showTitleAndMenuWrap"></menu-wrap>
  </div>
</template>

<script>
import TitleBar from "@/components/EBook/TitleBar.vue";
import Reader from "@/components/EBook/Reader.vue";
import MenuWrap from "@/components/EBook/Menu/MenuWrap.vue";
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
.ebook {
  width: 100%;
  height: 100%;
}
</style>
