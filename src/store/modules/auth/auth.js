// modules/auth.js
export const authModule = {
  state: {
    auth: {},
    showTutorial: false,
    showBlur: false,
    showSignupModal: false
  },
  mutations: {
    setAuth: (state, payload) => {
      state.auth = { ...payload }
    },
    logout: (state) => {
      state.auth = {}
    },
    toggleTutorial: (state, payload) => {
      state.showTutorial = payload
    },
    toggleBlur: (state, payload) => {
      state.showBlur = payload
    },
    toggleSignupModal: (state, payload) => {
      state.showSignupModal = payload
    }
  },
  actions: {}
}
