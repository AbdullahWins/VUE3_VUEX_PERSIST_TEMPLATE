import axios from 'axios'

const baseURL = import.meta.env.VITE_REGION_BASE_URL
const apiKey = import.meta.env.VITE_REGION_KEY
export const regionModal = {
  state: {
    isCountryLoading: true,
    isCountryError: false,
    isStateLoading: true,
    isStateError: true,
    countries: [],
    states: [],
    cities: []
  },
  mutations: {
    setCountries: (state, payload) => {
      state.countries = payload
    },
    setStates: (state, payload) => {
      state.states = payload
    },
    setStatus: (state, payload) => {
      state.isCountryLoading = payload.loading
      state.isCountryError = payload.error
    }
  },
  actions: {
    async fetchCountries({ commit, state }) {
      if (state.countries?.length > 0) {
        return
      }
      try {
        const response = await axios.get(`${baseURL}/countries`, {
          headers: {
            'X-CSCAPI-KEY': apiKey
          }
        })
        commit('setCountries', response.data)
        commit('setStatus', { loading: false, error: false })
      } catch (error) {
        commit('setStatus', { loading: false, error: true })
        console.error('There was a problem with the fetch operation:', error)
        throw error
      }
    },

    async fetchStates({ commit, state }) {
      if (state.states?.length > 0) {
        return
      }
      try {
        const response = await axios.get(`${baseURL}/states`, {
          headers: {
            'X-CSCAPI-KEY': apiKey
          }
        })
        commit('setStates', response.data)
        commit('setStatus', { loading: false, error: false })
      } catch (error) {
        commit('setStatus', { loading: false, error: true })
        console.error('There was a problem with the fetch operation:', error)
        throw error
      }
    }
  }
}
