// modules/counter.js
export const counterModule = {
  state: {
    count: 0,
    isLoading: true
  },
  mutations: {
    incrementCount: (state, payload) => {
      state.count += payload
    },
    decrementCount: (state, payload) => {
      state.count -= payload
    }
  },
  actions: {}
}
