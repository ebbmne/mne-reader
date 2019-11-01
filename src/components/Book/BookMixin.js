import { mapGetters, mapMutations, mapActions } from "vuex";

const bookMixin = {
  computed: {
    ...mapGetters([
      "book",
      "baseURL",
      "bookName",
      "currentBook",
      "currentBookRendition",
      "settingIndex",
      "showTitleAndMenuWrap",
      "fontSizeCollection",
      "currentFontSizeIndex",
      "fontFamilyCollection",
      "currentFontFamilyIndex",
      "showFontFamilySelection",
      "themeCollection",
      "currentThemeIndex",
      "currentFontSize",
      "bookAvailable",
      "locationPercentage"
    ])
  },
  methods: {
    ...mapMutations([
      "setCatagory",
      "setBookName",
      "toggleTitleAndMenuWrap",
      "setSettingIndex",
      "setCurrentBook",
      "setCurrentBookRendition",
      "setShowFontFamilySelection",
      "setBookAvailable"
    ]),
    ...mapActions([
      "setCurrentFontSizeIndex",
      "setCurrentFontFamilyIndex",
      "setCurrentThemeIndex",
      "setLocationPercentage"
    ])
  }
};

export default bookMixin;
