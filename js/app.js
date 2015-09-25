var app = angular.module("not-angry-angular", ['ui.router'])

app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: "<h1>You did it!</h1>"
    })
    .state('about', {
      url: '/about',
      template: '<h1>What about it??</h1>'
    })
})
