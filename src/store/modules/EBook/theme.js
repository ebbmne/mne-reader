import { themeCollection } from "@/config/book.js";
import localStorage from "@/utils/localStorage";

const theme = {
  state: {
    themeCollection,
    currentThemeIndex: 0
  },
  getters: {
    themeCollection: state => state.themeCollection,
    currentThemeIndex: state => state.currentThemeIndex
  },
  mutations: {
    setCurrentThemeIndex(state, payload) {
      const index = payload.index;
      const book = payload.book;

      state.currentThemeIndex = index;

      const themeName = state.themeCollection[index].themeName;
      book.currentBookRendition.themes.select(themeName);
      
      let obj = localStorage.getObj(book.bookName);
      obj.themeIndex = index;
      localStorage.setObj(book.bookName, obj);
    }
  },
  actions: {
    setCurrentThemeIndex({ commit, rootState }, index) {
      commit("setCurrentThemeIndex", {
        book: rootState.book,
        index
      })
    }
  }
}

export default theme;