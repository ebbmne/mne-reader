const setting = {
  state: {
    showTitleAndMenuWrap: false,
    settingIndex: -1
  },
  getters: {
    showTitleAndMenuWrap: state => state.showTitleAndMenuWrap,
    settingIndex: state => state.settingIndex
  },
  mutations: {
    setSettingIndex(state, index) {
      state.settingIndex = index;
    },
    toggleTitleAndMenuWrap(state) {
      state.showTitleAndMenuWrap = !state.showTitleAndMenuWrap;
    }
  }
}

export default setting;