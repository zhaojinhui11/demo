export default {
  name: 'userService',
  fn: function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/someapi/login');
  },
  mockFn: function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/stub/login.json');
  }
}