<template>
  <div class="reader-wrapper">
    <div id="reader"></div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Epub from "epubjs";
import localStorage from "@/utils/localStorage";

export default {
  computed: {
    ...mapGetters([
      "baseURL",
      "bookName",
      "showTitleAndMenuWrap",
      "fontFamilyCollection",
      "showTitleAndMenuWrap"
    ]),
  },
  methods: {
    ...mapMutations([
      "setCatagory",
      "setBookName",
      "toggleTitleAndMenuWrap",
      "setSettingIndex",
      "setCurrentBook",
      "setCurrentBookRendition",
      "showFontFamilySelection"
    ]),
    ...mapActions([
      "setCurrentFontSizeIndex",
      "setCurrentFontFamilyIndex"
    ]),
    initReader(url, bookName) {
      const book = new Epub(url);
      const rendition = book.renderTo("reader", {
        width: window.innerWidth,
        height: window.innerHeight
      }); 
      rendition.display().then(() => {
        this.setCurrentBook(book);
        this.setCurrentBookRendition(rendition);
        this.initFont(bookName);
        this.bindGesture(rendition);
      });
    },
    bindGesture(rendition) {
      const that = this;
      const maskDOM = this.$refs.mask;

      let isTouch = false;
      
      maskDOM.onmousedown = function(ev1) {
        const startLeft = ev1.clientX;
        maskDOM.onmousemove = function(ev2) {
          maskDOM.onmouseup = function() {
            const diff = ev2.clientX - startLeft;
            if(!isTouch && diff < -10) {
              if (that.showTitleAndMenuWrap) {
                that.toggleTitleAndMenuWrap();
              }
              rendition.next();
            } else if(!isTouch && diff > 10) {
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
          if(!isTouch) {
            that.toggleTitleAndMenuWrap();
            that.setSettingIndex(-1);
          }
        }
      };
      
      maskDOM.ontouchstart = function(ev1) {
        isTouch = true;
        const startLeft = ev1.changedTouches[0].screenX;
        maskDOM.ontouchmove = function(ev2) {
          maskDOM.ontouchend = function() {
            const diff = ev2.changedTouches[0].screenX - startLeft;
            if(diff < -10) {
              if (that.showTitleAndMenuWrap) {
                that.toggleTitleAndMenuWrap();
              }
              rendition.next();
            } else if(diff > 10) {
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
          that.toggleTitleAndMenuWrap();
          isTouch = true;
          rendition.display(rendition.location.end.cfi);
          that.setSettingIndex(-1);
        };
      };
    },
    initFont(bookName) {
      let info = localStorage.getObj(bookName);
      if (!info) {
        info = {};
        info["fontSizeIndex"] = 2;
        info["fontFamilyIndex"] = 0;
        localStorage.setObj(bookName, info);
      }
      this.setCurrentFontSizeIndex(info.fontSizeIndex);
      this.setCurrentFontFamilyIndex(info.fontFamilyIndex);
    }
  },
  mounted() {
    const catagory = this.$route.params.catagory;
    const bookName = this.$route.params.bookName;
    const epubDownloadURL = this.baseURL + catagory + "/" + bookName + ".epub";

    console.log(epubDownloadURL);

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
}
</style>