import font from "./font.js";
import setting from "./setting.js";
import theme from "./theme.js"

const book = {
  state: {
    catagory: "",
    bookName: "",
    currentBook: null,
    currentBookRendition: null
  },
  getters: {
    catagory: state => state.catagory,
    bookName: state => state.bookName,
    currentBook: state => state.currentBook,
    currentBookRendition: state => state.currentBookRendition
  },
  mutations: {   
    setCatagory(state, catagory) {
      state.catagory = catagory;
    },
    setBookName(state, bookName) {
      state.bookName = bookName;
    },
    setCurrentBook(state, book) {
      state.currentBook = book;
    },
    setCurrentBookRendition(state, rendition) {
      state.currentBookRendition = rendition;
    }
  },
  modules: {
    font,
    setting,
    theme
  }
};

export default book;