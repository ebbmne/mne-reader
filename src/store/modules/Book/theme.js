import { themeCollection } from "@/config/book.js";
import localStorage from "@/utils/localStorage.js";

function saveThemeIndexInLocalStorage(bookName, index) {
  let obj = localStorage.getObj(bookName);
  obj.themeIndex = index;
  localStorage.setObj(bookName, obj);
}

function addThemeCSS(themeName) {
  const links = document.getElementsByTagName("link");
  for (let i=links.length; i>=0; i--) {
    const link = links[i];
    if (link && link.getAttribute("href") && link.getAttribute("href").startsWith("/staticserver/themecss")) {
      link.parentNode.removeChild(link);
    }
  }

  const linkDOM = document.createElement("link");
  linkDOM.setAttribute("rel", "stylesheet");
  linkDOM.setAttribute("href", `/staticserver/themecss/${themeName}.css`);
  document.getElementsByTagName("head")[0].appendChild(linkDOM);
}

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
      
      saveThemeIndexInLocalStorage(book.bookName, index);
      addThemeCSS(themeName);
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