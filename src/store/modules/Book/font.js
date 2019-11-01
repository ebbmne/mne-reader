import { fontSizeCollection, fontFamilyCollection } from "@/config/book.js";
import localStorage from "@/utils/localStorage.js";

function saveFontSizeIndexInLocalStorage(bookName, index) {
  let obj = localStorage.getObj(bookName);
  obj.fontSizeIndex = index;
  localStorage.setObj(bookName, obj);
}

function saveFontFamilyIndexInLocalStorage(bookName, index) {
  let obj = localStorage.getObj(bookName);
  obj.fontFamilyIndex = index;
  localStorage.setObj(bookName, obj);
}

const font = {
  state: {
    fontSizeCollection,
    fontFamilyCollection,
    currentFontSizeIndex: 2,
    currentFontFamilyIndex: 0,
    showFontFamilySelection: false
  },
  getters: {
    fontSizeCollection: state => state.fontSizeCollection,
    fontFamilyCollection: state => state.fontFamilyCollection,
    currentFontSizeIndex: state => state.currentFontSizeIndex,
    currentFontFamilyIndex: state => state.currentFontFamilyIndex,
    showFontFamilySelection: state => state.showFontFamilySelection,
    currentFontSize: state => state.fontSizeCollection[state.currentFontSizeIndex]
  },
  mutations: {
    setCurrentFontSizeIndex(state, payload) {
      const index = payload.index;
      const book = payload.book;

      state.currentFontSizeIndex = index;
      const fontSize = state.fontSizeCollection[index].fontSize + "px";
      book.currentBookRendition.themes.fontSize(fontSize);

      saveFontSizeIndexInLocalStorage(book.bookName, index);
    },
    setCurrentFontFamilyIndex(state, payload) {
      const index = payload.index;
      const book = payload.book;

      state.currentFontFamilyIndex = index;
      const fontName = state.fontFamilyCollection[index].fontName;
      book.currentBookRendition.themes.font(fontName);

      saveFontFamilyIndexInLocalStorage(book.bookName, index);
    },
    setShowFontFamilySelection(state, flag) {
      state.showFontFamilySelection = flag;
    }
  },
  actions: {
    setCurrentFontSizeIndex({ commit, rootState }, index) {
      commit("setCurrentFontSizeIndex", {
        book: rootState.book,
        index
      });
    },
    setCurrentFontFamilyIndex({ commit, rootState }, index) {
      commit("setCurrentFontFamilyIndex", {
        book: rootState.book,
        index
      });
    }
  }
};

export default font;
