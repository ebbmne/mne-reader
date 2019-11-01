import font from "./font.js";
import setting from "./setting.js";
import theme from "./theme.js";
import location from "./location.js";

const book = {
  state: {
    catagory: "",
    bookName: "",
    currentBook: null,
    currentBookRendition: null,
    available: false
  },
  getters: {
    catagory: state => state.catagory,
    bookName: state => state.bookName,
    bookAvailable: state => state.available,
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
    },
    setBookAvailable(state, isAvailable) {
      state.available = isAvailable;
    }
  },
  modules: {
    font,
    setting,
    theme,
    location
  }
};

export default book;