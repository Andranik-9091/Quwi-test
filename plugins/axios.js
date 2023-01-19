export default function ({ store, $axios, redirect }) {
  $axios.onRequest(config => {
    if (store.getters['auth/isAuthenticated']) {
      config.headers.Authorization = 'Bearer ' + store.state.auth.accessToken
    }
    return config
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
