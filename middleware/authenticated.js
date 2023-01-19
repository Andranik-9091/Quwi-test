export default function ({ store, redirect, route }) {
  if (!store.getters['auth/isAuthenticated']) {
    const path = encodeURIComponent(route.path);
    return redirect(`/login?r=${path}`);
  }
}
