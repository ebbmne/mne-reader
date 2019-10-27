<template>
  <div id="reader"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Epub from "epubjs";

export default {
  computed: {
    ...mapState({
      baseURL: state => state.baseURL,
      fileName: state => state.fileName,
      showTitleAndMenuWrap: state => state.showTitleAndMenuWrap
    }),
  },
  methods: {
    ...mapActions(["setFileName", "toggleTitleAndMenuWrap", "setSettingIndex"]),
    /**
     * 初始化电子书
     * url: 电子书的下载地址
     */
    initReader(url) {
      // 根据电子书下载路径创建Epub对象
      this.ebook = new Epub(url);
      // 根据Epub对象创建电子书渲染对象
      this.rendition = this.ebook.renderTo("reader", {
        width: window.innerWidth,
        height: window.innerHeight,
        method: "default" // 为了兼容微信浏览器
      });
      // 进行渲染
      
      this.bindGesture();
      this.rendition.display();
    },
    /**
     * 绑定电子书手势
     * rendition: 电子书渲染对象
     */
    bindGesture() {
      this.rendition.on("touchstart", event => {
        this.startClientX = event.changedTouches[0].clientX;
        this.startTimeStamp = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        const distanceDiff = event.changedTouches[0].clientX - this.startClientX;
        const timeDiff = event.timeStamp - this.startTimeStamp;
        
        if (timeDiff < 500 && distanceDiff > 40) {
          this.changePage(false);
        } else if (timeDiff < 500 && distanceDiff < -40) {
          this.changePage(true);
        } else {
          this.toggleTitleAndMenuWrap();
          this.setSettingIndex(-1);
        }
      });
    },
    changePage(nextPage) {
      if (this.showTitleAndMenuWrap) {
        this.toggleTitleAndMenuWrap();
      }
      if (this.rendition) {
        if (nextPage) {
          this.rendition.next();
        } else {
          this.rendition.prev();
        }
      }
    }
  },
  mounted() {
    // 从路由中获取电子书存在路径和名称
    const fileName = this.$route.params.fileName.split("|").join("/");
    // 将电子书名称和路径存储到store中
    this.setFileName({
      fileName
    }).then(() => {
      // 获取电子书的下载路径
      const url = this.baseURL + this.fileName + ".epub";
      // 初始化电子书
      this.initReader(url);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
</style>
