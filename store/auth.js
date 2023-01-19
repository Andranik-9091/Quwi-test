export const state = () => ({
  accessToken: null,
  authErrMessage: null,
})

export const mutations = {
  SET_PAYLOAD(state, accessToken) {
    state.accessToken = accessToken
  },
  SET_ERROR_MESSAGE(state, message) {
    state.authErrMessage = message
  },
  LOGOUT(state) {
    state.accessToken = null
  },
}

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      const { data } = await this.$axios.post('auth/login', { email, password })

      commit('SET_PAYLOAD', data.token)
      commit('SET_ERROR_MESSAGE', null)
    } catch (error) {
      if (error.response) {
        const errObj = error.response.data.first_errors
        const errStr = errObj ? Object.values(errObj).join(' | ') : ''
        commit('SET_ERROR_MESSAGE', errStr)
      } else {
        commit(
          'SET_ERROR_MESSAGE',
          'An error occurred, please try again later.'
        )
      }
      throw error
    }
  },

  async logout({ commit }) {
    const logoutData = {
      anywhere: true
    }

    try {
      await this.$axios.post('auth/logout', logoutData)
      commit('LOGOUT')
    } catch (error) {
      throw new Error(error)
    }
  },
}

export const getters = {
  getAuthErrMessage: (state) => state.authErrMessage,
  isAuthenticated: (state) => {
    return state.accessToken && state.accessToken !== ''
  },
}
