import localStorage from "@/utils/localStorage.js";

function saveLocationPercentageInLocalStorage(bookName, percentage) {
  let obj = localStorage.getObj(bookName);
  obj.locationPercentage = percentage;
  localStorage.setObj(bookName, obj);
}

const location = {
  state: {
    locationPercentage: 0
  },
  getters: {
    locationPercentage: state => state.locationPercentage
  },
  mutations: {
    setLocationPercentage(state, payload) {
      const percentage = payload.percentage;
      const book = payload.book;

      state.locationPercentage = percentage;

      saveLocationPercentageInLocalStorage(book.bookName, percentage);
    }
  },
  actions: {
    setLocationPercentage({ commit, rootState}, percentage) {
      commit("setLocationPercentage", {
        book: rootState.book,
        percentage
      });
    }
  }
};

export default location;