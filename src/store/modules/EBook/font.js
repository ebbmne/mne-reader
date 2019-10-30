import { fontSizeCollection, fontFamilyCollection } from "@/config/book.js";
import localStorage from "@/utils/localStorage";

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
    showFontFamilySelection: state => state.showFontFamilySelection
  },
  mutations: {
    setCurrentFontSizeIndex(state, payload) {
      const index = payload.index;
      const book = payload.book;

      state.currentFontSizeIndex = index;
      const fontSize = state.fontSizeCollection[index].fontSize + "px";
      book.currentBookRendition.themes.fontSize(fontSize);
      
      let obj = localStorage.getObj(book.bookName);
      obj.fontSizeIndex = index;
      localStorage.setObj(book.bookName, obj);
    },
    setCurrentFontFamilyIndex(state, payload) {
      const index = payload.index;
      const book = payload.book;

      state.currentFontFamilyIndex = index;

      let obj = localStorage.getObj(book.bookName);
      obj.fontFamilyIndex = index;
      localStorage.setObj(book.bookName, obj);
    },
    showFontFamilySelection(state, flag) {
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
}

export default font;