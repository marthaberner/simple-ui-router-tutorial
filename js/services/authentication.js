app.factory('AuthService', function () {
  return {
    isAuthenticated: function () {
      var num = Math.floor((Math.random() * 10) + 1);
      return num === 3 || num === 7;
    }
  }
})
