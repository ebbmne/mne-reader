import Vue from "vue";
import Vuex from "vuex";
import { BASE_URL } from "@/config/network.js";
import { fontSizeSetting } from "@/config/fontsize.js";
import { SET_FILE_NAME, TOGGLE_TITLE_AND_MENU_WRAP, SET_SETTING_INDEX, CHANGE_CURRENT_FONT_SIZE_INDEX } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseURL: BASE_URL,
    fileName: "",
    showTitleAndMenuWrap: false,
    fontSizeSetting,
    settingIndex: -1,
    currentFontSizeIndex: 2
  },
  mutations: {
    [SET_FILE_NAME](state, payload) {
      state.fileName = payload.fileName;
    },
    [TOGGLE_TITLE_AND_MENU_WRAP](state) {
      state.showTitleAndMenuWrap = !state.showTitleAndMenuWrap;
    },
    [SET_SETTING_INDEX](state, index) {
      state.settingIndex = index;
    },
    [CHANGE_CURRENT_FONT_SIZE_INDEX](state, index) {
      state.currentFontSizeIndex = index;
    }
  },
  actions: {
    setFileName({ commit }, payload) {
      return commit(SET_FILE_NAME, payload);
    },
    toggleTitleAndMenuWrap({ commit }) {
      commit(TOGGLE_TITLE_AND_MENU_WRAP);
    },
    setSettingIndex({ commit }, index) {
      commit(SET_SETTING_INDEX, index);
    },
    changeCurrentFontSizeInddex({ commit }, index) {
      commit(CHANGE_CURRENT_FONT_SIZE_INDEX, index);
    }
  }
});
