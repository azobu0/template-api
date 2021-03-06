module.exports = {
  register: require('./register'),
  authenticate: require('./authenticate'),
  deauthenticate: require('./deauthenticate'),
  getAuthenticatedUser: require('./getAuthenticatedUser'),
  isRegistered: require('./isRegistered'),
  isPasswordCorrect: require('./isPasswordCorrect'),
  isAuthenticated: require('./isAuthenticated'),
  isAuthorized: require('./isAuthorized'),
  isAuthorizedAdmin: require('./isAuthorizedAdmin')
}
