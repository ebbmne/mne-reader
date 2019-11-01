<template>
  <div class="reader-wrapper">
    <div id="reader"></div>
    <div class="mask" ref="mask"></div>
    <div class="toast" v-if="showToast">
      加载中，请稍后
    </div>
  </div>
</template>

<script>
import bookMixin from "./BookMixin.js";
import Epub from "epubjs";
import localStorage from "@/utils/localStorage.js";

function checkInitSetting(info) {
  return info && 
    info.hasOwnProperty("fontSizeIndex") && 
    info.hasOwnProperty("fontFamilyIndex") && 
    info.hasOwnProperty("fontFamilyIndex") &&
    info.hasOwnProperty("locationPercentage");
}

export default {
  mixins: [bookMixin],
  data() {
    return {
      showToast: true
    }
  },
  methods: {
    initReader(url, bookName) {
      const book = new Epub(url);
      const rendition = book.renderTo("reader", {
        width: window.innerWidth,
        height: window.innerHeight
      });
      this.setCurrentBook(book);
      this.setCurrentBookRendition(rendition);
      this.bindWebFont(rendition);
      this.bindThemes(rendition);
      this.bindGesture(rendition);
      this.initSetting(bookName);
      book.ready.then(() => {
        const charNumber = 750 * (window.innerWidth / 375) * (this.currentFontSize / 16);
        book.locations.generate(charNumber).then(() => {
          this.setBookAvailable(true);
          rendition.display(book.locations.cfiFromPercentage(this.locationPercentage / 100)).then(() => {
            this.showToast = false;
          });
        });
      });
    },
    bindWebFont(rendition) {
      rendition.hooks.content.register(contents => {
        this.fontFamilyCollection.forEach(item => {
          if (item.src) {
            const url = this.baseURL + item.src;
            contents.addStylesheet(url);
          }
        });
      });
    },
    bindThemes(rendition) {
      this.themeCollection.forEach(item => {
        rendition.themes.register(item.themeName, item.style);
      });
    },
    bindGesture(rendition) {
      const that = this;
      const maskDOM = this.$refs.mask;
      let isTouch = false;

      // PC端手势
      maskDOM.onmousedown = function(ev1) {
        const startLeft = ev1.clientX;
        maskDOM.onmousemove = function(ev2) {
          maskDOM.onmouseup = function() {
            const diff = ev2.clientX - startLeft;
            if (!isTouch && diff < -10) {
              if (that.showTitleAndMenuWrap) {
                that.toggleTitleAndMenuWrap();
              }
              rendition.next();
            } else if (!isTouch && diff > 10) {
              if (that.showTitleAndMenuWrap) {
                that.toggleTitleAndMenuWrap();
              }
              rendition.prev();
            }
            maskDOM.onmousemove = null;
            maskDOM.onmouseup = null;
          };
        };
        maskDOM.onmouseup = function() {
          if (!isTouch) {
            that.toggleTitleAndMenuWrap();
            that.setSettingIndex(-1);
            that.setShowFontFamilySelection(false);
          }
        };
      };
      
      // 移动端手势
      maskDOM.ontouchstart = function(ev1) {
        isTouch = true;
        const startLeft = ev1.changedTouches[0].screenX;
        maskDOM.ontouchmove = function(ev2) {
          maskDOM.ontouchend = function() {
            const diff = ev2.changedTouches[0].screenX - startLeft;
            if (diff < -10) {
              if (that.showTitleAndMenuWrap) {
                that.toggleTitleAndMenuWrap();
              }
              rendition.next();
            } else if (diff > 10) {
              if (that.showTitleAndMenuWrap) {
                that.toggleTitleAndMenuWrap();
              }
              rendition.prev();
            }
            maskDOM.ontouchmove = null;
            maskDOM.ontouchend = null;
            isTouch = false;
          };
        };
        maskDOM.ontouchend = function() {
          isTouch = true;
          that.toggleTitleAndMenuWrap();
          that.setSettingIndex(-1);
          that.setShowFontFamilySelection(false);
          rendition.display(rendition.location.end.cfi);
        };
      };
    },
    initSetting(bookName) {
      let info = localStorage.getObj(bookName);
      if (!checkInitSetting(info)) {
        info = {};
        info["fontSizeIndex"] = 2;
        info["fontFamilyIndex"] = 0;
        info["themeIndex"] = 1;
        info["locationPercentage"] = 0;
        localStorage.setObj(bookName, info);
      }
      this.setCurrentFontSizeIndex(info.fontSizeIndex);
      this.setCurrentFontFamilyIndex(info.fontFamilyIndex);
      this.setCurrentThemeIndex(info.themeIndex);
      this.setLocationPercentage(info.locationPercentage);
    }
  },
  mounted() {
    const catagory = this.$route.params.catagory;
    const bookName = this.$route.params.bookName;
    const epubDownloadURL = this.baseURL + catagory + "/" + bookName + ".epub";
    this.setCatagory(catagory);
    this.setBookName(bookName);
    this.initReader(epubDownloadURL, bookName);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.reader-wrapper {
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
  }
  .toast {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
    background-color: grey;
    @include center;
  }
}
</style>
